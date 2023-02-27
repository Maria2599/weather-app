import React, { useState } from "react";

function Input(props){
    
    const [location, setLocation] = useState("");
    const apiKey = "48529ebc2350b10b1cc784143428568f";
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+apiKey+"&units=metric";
  
    function handleLocation(event){
        const loc = event.target.value;
        setLocation(loc);
    }

    function searchPress(event){
        if(event.key === "Enter"){
        props.onSearch(url);
        // setLocation("");
        event.preventDefault();
        }
        
    }

    
    return(
  <input
        className="input-text"
        onChange={handleLocation}
        onKeyDown={searchPress}
        value={location}
        type="text"
        name="location"
        placeholder="Enter Location"
        />
       
    );
}

export default Input;