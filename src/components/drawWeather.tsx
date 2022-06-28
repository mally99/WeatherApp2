
function DrawWeather(props) {
    const weatherData = props.weather;
    const icon = weatherData.weather[0].icon;
    let newDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = '';
    let className = props.className
    const picUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
    
    if (props.curWeather !== true) {
        newDate = new Date(weatherData.dt_txt);
        dayName = days[newDate.getDay()];
        className.concat(' nextDayWeather')
    }
    return (
        <div className={className} >
            {props.curWeather === true ? <h1>Now In : {props.cityName}</h1> :
                <div>
                    <h3>{dayName}</h3>
                    <p>{newDate.getDate()} / {newDate.getMonth() + 1} / {newDate.getFullYear()} </p>
                </div>}
            <h1 id='tmp'>{Math.floor(weatherData.main.temp - 273)}&#176;</h1>
            <img src={picUrl} alt="weather describe pic" />
            <p>humidity : {weatherData.main.humidity}%</p>
            <b><p>{weatherData.weather[0].description}</p></b>
        </div>
    )
}

export default DrawWeather

// echo "# aaa" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/mally99/aaa.git
// git push -u origin main