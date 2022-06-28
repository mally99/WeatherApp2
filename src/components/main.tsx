import '../App.css';
import SelectCity from './selectCity';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Main(props) {
    const [chosenCity, setChosenCity] = useState('');
    const navigate = useNavigate();

    const chooseCity = async (cityName) => {
        const arr = cityName.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str = arr.join(" ");
        console.log(str);
        setChosenCity(str);
    }
    useEffect(() => {
        if (chosenCity !== '') {
            navigate(`/${chosenCity}`);
        }
    }, [chosenCity])
    return (
        <div>
            <h1>My Wheather App</h1>
            <SelectCity onClick={chooseCity} />
        </div>
    );
}
export default Main;