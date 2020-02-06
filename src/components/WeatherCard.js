import React from 'react';
const WeatherCard = (props) => {
    return (
        <div className='card' > 
            <div className="location">
                <h1 className='city' >São Paulo</h1>   
                <h3 className="country">BR</h3>    
            </div>
            <img className="icon" src="" alt="Weather Icon"></img> 
            <h1 className="temp"> 25 °C</h1>
            <h1 className="condition">Clouds</h1>
        </div>
     );
}
 
export default WeatherCard;