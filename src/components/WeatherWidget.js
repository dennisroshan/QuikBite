import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const apiKey = '4610be2af382e0dd58a242ddfaee4972'; // Replace with your actual API key
    const city = 'Bengaluru';

    useEffect(() => {
        const getWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                setWeather(response.data);
            } catch (error) {
                console.error("Error fetching the weather data:", error.message);
            }
        };
        getWeather();
    }, []);

    return (
        <div className="weather-widget">
            {weather ? (
                <div className="d-flex align-items-center">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
                    <p className="card-text ms-2 mb-0">{weather.main.temp}°C, {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading weather...</p>
            )}
        </div>
    );
}

export default WeatherWidget;
