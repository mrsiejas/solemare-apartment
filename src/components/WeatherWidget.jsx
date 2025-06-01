import { useEffect, useState } from 'react';
import { Cloud, CloudRain, CloudSnow, CloudSun, Sun } from 'lucide-react';

const KATY_RYBACKIE = {
    latitude: 54.3333,
    longitude: 19.2500
};

// Weather code mapping based on OpenMeteo documentation
const getWeatherIcon = (code) => {
    // Clear sky
    if (code === 0) return <Sun className="w-6 h-6" />;
    // Mainly clear, partly cloudy, and overcast
    if (code >= 1 && code <= 3) return <CloudSun className="w-6 h-6" />;
    // Fog and depositing rime fog
    if (code === 45 || code === 48) return <Cloud className="w-6 h-6" />;
    // Drizzle and rain
    if (code >= 51 && code <= 67) return <CloudRain className="w-6 h-6" />;
    // Snow
    if (code >= 71 && code <= 77) return <CloudSnow className="w-6 h-6" />;
    // Rain showers
    if (code >= 80 && code <= 82) return <CloudRain className="w-6 h-6" />;
    // Snow showers
    if (code >= 85 && code <= 86) return <CloudSnow className="w-6 h-6" />;
    // Thunderstorm
    if (code >= 95 && code <= 99) return <CloudRain className="w-6 h-6" />;

    // Default to partly cloudy
    return <CloudSun className="w-6 h-6" />;
};

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const params = {
                    latitude: KATY_RYBACKIE.latitude,
                    longitude: KATY_RYBACKIE.longitude,
                    daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min'],
                    timezone: 'auto'
                };

                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?${new URLSearchParams(params)}`
                );

                if (!response.ok) {
                    throw new Error('Weather data fetch failed');
                }

                const data = await response.json();
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <div className="text-primary/80">Loading weather...</div>;
    if (error) return <div className="text-primary/80">Error loading weather: {error}</div>;
    if (!weatherData) return null;

    return (
        <div className="flex justify-center">
            <div className="flex gap-6 items-center">
                {weatherData.daily.time.slice(0, 5).map((date, index) => (
                    <div key={date} className="flex flex-col items-center">
                        <div className="text-sm text-primary/80">
                            {new Date(date).toLocaleDateString('pl-PL', { weekday: 'short' })}
                        </div>
                        <div className="text-primary/80 my-1">
                            {getWeatherIcon(weatherData.daily.weather_code[index])}
                        </div>
                        <div className="text-lg text-primary/80">
                            {Math.round(weatherData.daily.temperature_2m_max[index])}°
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherWidget; 