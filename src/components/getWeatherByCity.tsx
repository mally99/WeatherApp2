import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CurrentWheather } from '../models/currentWeather';
import { WeatherFor6DaysHourly } from '../models/weatherFor6DaysHourly';
import { WeatherForHour } from '../models/weatherForHour';
import { fetchLatAndLon, fetchCurrentWeather, fetchNextDaysHourlyWeather } from '../services/service';
import DrawWeather from './drawWeather';

function GetWeatherByCity(props) {
    const [curWheather, setCurWheather] = useState(new CurrentWheather)
    const [weather5DaysHourly, setWeather5DaysHourly] = useState(new WeatherFor6DaysHourly)
    const [weather5Days, setWeather5Days] = useState([new WeatherForHour])
    const [chosenCity, setChosenCity] = useState('');
    const { city } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (city !== '' && city !== undefined) {
            setChosenCity(city);
        }
    }, [city])
    useEffect(() => {
        if (chosenCity !== '') {
            chooseCity();
        }
    }, [chosenCity])
    const chooseCity = async () => {
        const data = await fetchLatAndLon(chosenCity);
        if (data != null) {
            await getWeather(data.lat, data.lon)
        }
        else {
            setCurWheather(new CurrentWheather);
        }
    }
    const getWeather = async (lat: number, lon: number) => {
        const data = await fetchCurrentWeather(lat, lon);
        setCurWheather(data);
        const data2 = await fetchNextDaysHourlyWeather(lat, lon);
        setWeather5DaysHourly(data2);
    }
    useEffect(() => {
        if (weather5DaysHourly.cod === "200") {
            setWeather5Days(weather5DaysHourly.list.filter(weather => weather.dt_txt.includes("12:00:00")));
        }
    }, [weather5DaysHourly])
    const navigateToMain=()=>{
        navigate('/');
    }
    return (
        <div>
            {curWheather.cod === 200 ?
                <DrawWeather weather={curWheather} cityName={chosenCity} curWeather={true} className={'drawWeather curWeather'} />
                : <p>no city chosen or city isn't correct</p>}
            <button onClick={navigateToMain}>See The Weather In Another City</button>
            <div className='days'>
                {weather5Days.length >= 5 &&
                    weather5Days.map(weather => (<DrawWeather
                        key={weather.dt_txt}
                        weather={weather} cityName={chosenCity}
                        curWeather={false}
                        className={'drawWeather nextDayWeather'} />))
                }
            </div>
        </div>
    )
}

export default GetWeatherByCity
