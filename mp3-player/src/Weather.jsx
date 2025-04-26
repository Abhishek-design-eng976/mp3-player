import React, {useState} from "react";
import axios from 'axios';
function Weather (){
    const[city, setCity]= useState("")
    const [weather, setWeather] =useState({name:"",main:{temp:0}})
    const apiKey= ''

    function getWether() {
        // axios
        // .get('https://api.openweathermap.org/data/2.5/weather', {
        //   params: { q: city, appid: apiKey, units: 'metric' },
        // })
        // .then((res) => setWeather(res.data))
        // .catch(() => alert('City not found'));
    setWeather({name:"Hof", main:{temp:"10 degrees"}})

    }

    return(
        <div>
             <input placeholder="enter city" value={city} onChange={(e) => setCity(e.target.value)}></input>
             <button onClick={getWether}>Search Weather</button>
             {weather &&(
                <div>
                <h2>{weather.name}</h2>
                <h2>{weather.main.temp}</h2>
                </div>
                
             )}
        </div>
       
    )

}
export default Weather;