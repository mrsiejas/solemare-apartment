// Weather API configuration
const WEATHER_API_KEY = ENV_OPENWEATHERMAP_API_KEY;
const KATY_RYBACKIE_COORDS = {
    lat: 54.3355,
    lon: 19.2550
};

// Rate limiting configuration
const RATE_LIMIT = {
    maxRequests: 100, // Maximum requests per day
    timeWindow: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    requests: []
};

// Check if we've exceeded rate limit
function checkRateLimit() {
    const now = Date.now();
    // Remove requests older than the time window
    RATE_LIMIT.requests = RATE_LIMIT.requests.filter(time => now - time < RATE_LIMIT.timeWindow);

    if (RATE_LIMIT.requests.length >= RATE_LIMIT.maxRequests) {
        console.warn('Rate limit exceeded for weather API');
        return false;
    }

    RATE_LIMIT.requests.push(now);
    return true;
}

// Weather icons mapping
const weatherIcons = {
    '01d': '☀️', // clear sky day
    '01n': '🌙', // clear sky night
    '02d': '⛅', // few clouds day
    '02n': '☁️', // few clouds night
    '03d': '☁️', // scattered clouds
    '03n': '☁️',
    '04d': '☁️', // broken clouds
    '04n': '☁️',
    '09d': '🌧️', // shower rain
    '09n': '🌧️',
    '10d': '🌦️', // rain day
    '10n': '🌧️', // rain night
    '11d': '⛈️', // thunderstorm
    '11n': '⛈️',
    '13d': '🌨️', // snow
    '13n': '🌨️',
    '50d': '🌫️', // mist
    '50n': '🌫️'
};

// Fetch current weather with rate limiting
async function fetchCurrentWeather() {
    if (!checkRateLimit()) {
        return null;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${KATY_RYBACKIE_COORDS.lat}&lon=${KATY_RYBACKIE_COORDS.lon}&units=metric&appid=${WEATHER_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        return null;
    }
}

// Fetch 5-day forecast with rate limiting
async function fetchForecast() {
    if (!checkRateLimit()) {
        return null;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${KATY_RYBACKIE_COORDS.lat}&lon=${KATY_RYBACKIE_COORDS.lon}&units=metric&appid=${WEATHER_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        return null;
    }
}

// Update current weather display with error handling
function updateCurrentWeather(weather) {
    const currentWeather = document.querySelector('.current-weather');
    if (!currentWeather) return;

    if (!weather) {
        currentWeather.innerHTML = `
            <div class="weather-error">
                <p>${getTranslation('weather.error') || 'Unable to load weather data'}</p>
            </div>
        `;
        return;
    }

    const icon = currentWeather.querySelector('.weather-icon');
    const temperature = currentWeather.querySelector('.temperature');
    const description = currentWeather.querySelector('.description');
    const details = currentWeather.querySelector('.details');

    icon.textContent = weatherIcons[weather.weather[0].icon] || '☀️';
    temperature.textContent = `${Math.round(weather.main.temp)}°C`;
    description.textContent = weather.weather[0].description;

    details.innerHTML = `
        <span>${getTranslation('weather.feelsLike')}: ${Math.round(weather.main.feels_like)}°C</span>
        <span>${getTranslation('weather.humidity')}: ${weather.main.humidity}%</span>
        <span>${getTranslation('weather.wind')}: ${Math.round(weather.wind.speed)} m/s</span>
    `;
}

// Update forecast display with error handling
function updateForecast(forecast) {
    const forecastContainer = document.querySelector('.forecast-container');
    if (!forecastContainer) return;

    if (!forecast) {
        forecastContainer.innerHTML = `
            <div class="forecast-error">
                <p>${getTranslation('weather.error') || 'Unable to load forecast data'}</p>
            </div>
        `;
        return;
    }

    // Get one forecast per day (excluding today)
    const dailyForecasts = forecast.list.filter((item, index) => index % 8 === 0).slice(1, 6);

    forecastContainer.innerHTML = dailyForecasts.map((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayName = index === 0 ? getTranslation('weather.tomorrow') : date.toLocaleDateString(getCurrentLanguage(), { weekday: 'long' });

        return `
            <div class="forecast-day">
                <h4>${dayName}</h4>
                <div class="forecast-icon">${weatherIcons[day.weather[0].icon] || '☀️'}</div>
                <div class="temperature">${Math.round(day.main.temp)}°C</div>
                <div class="description">${day.weather[0].description}</div>
            </div>
        `;
    }).join('');
}

// Initialize weather widget with error handling
async function initWeather() {
    try {
        const currentWeather = await fetchCurrentWeather();
        const forecast = await fetchForecast();

        updateCurrentWeather(currentWeather);
        updateForecast(forecast);
    } catch (error) {
        console.error('Error initializing weather:', error);
    }
}

// Update weather when language changes
document.addEventListener('languageChanged', initWeather);

// Initialize weather on page load
document.addEventListener('DOMContentLoaded', initWeather); 