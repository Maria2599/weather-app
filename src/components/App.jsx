import React, { useState } from "react";
import axios from './../../node_modules/axios/lib/axios';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons'
import {faDroplet} from '@fortawesome/free-solid-svg-icons'

function App(){
    const[data, setData] = useState({});
    const wind = <FontAwesomeIcon icon={faWind} />
    const drop = <FontAwesomeIcon icon={faDroplet} />

    const searchLoction = (url)=>{
            axios.get(url).then((response)=>{
                setData(response.data);
                console.log(response.data);
            });
    };
   
    const imgUrl = data.weather ? "http://openweathermap.org/img/wn/"+  data.weather[0].icon  +"@2x.png": null;

    return(
        <div className="card">
        <Input onSearch={searchLoction}/>
        <br/>
        <img src={imgUrl}/>
        <p className="description">{data.weather ? data.weather[0].main : null}</p>
        <div className="rowC">
        <p className="info wind">{wind}  {data.wind ? data.wind.speed : null} km/h</p>
        <p className="info temp">{data.main ? data.main.temp : null} ْ C</p>
        </div>
        <p className="info">{drop}   {data.main ? data.main.humidity : null}</p>
        
        </div>
    );
}

export default App;