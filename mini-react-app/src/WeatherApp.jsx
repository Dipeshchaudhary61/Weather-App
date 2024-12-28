import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.5,
        tempMin:25.5,
        tempMax:25.5,
        humidity:47,
        weather:"haze"
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}