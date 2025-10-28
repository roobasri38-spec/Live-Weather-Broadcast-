// API Key from OpenWeatherMap (replace with your own key)
const apiKey = '2b6d209079e0f70cc4d80905d9055aeb';

// Function to get weather data
function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            alert('Error: ' + error);
            console.error(error);
        });
}

// Function to display weather data
function displayWeather(data) {
    if (data.cod !== 200) {
        alert(data.message);
        return;
    }

    const weatherInfo = document.getElementById('weather-info');
    const weatherDetails = `
        <div class="weather-info-item"><strong>City:</strong> ${data.name}</div>
        <div class="weather-info-item"><strong>Temperature:</strong> ${data.main.temp} °C</div>
        <div class="weather-info-item"><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div class="weather-info-item"><strong>Weather:</strong> ${data.weather[0].description}</div>
        <div class="weather-info-item"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    `;

    weatherInfo.innerHTML = weatherDetails;
}
