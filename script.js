  const apiKey = "f08ba2acf2174420b42123505252403";  // API key

    async function getWeather() {
        const city = document.getElementById('city').value;
        if (!city) {
            alert("Please enter a city name");
            return;
        }

        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                displayWeather(data);
            } else {
                alert("City not found!");
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data.");
        }
    }

    function displayWeather(data) {
        const weatherInfo = document.getElementById("weather-info");

        weatherInfo.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Wind Speed: ${data.current.wind_kph} kph</p>
            <p>Snow: ${data.current.snow ? data.current.snow + ' mm' : 'No snow'}</p>
            <p>Rain: ${data.current.precip_mm} mm</p>
            <p>Moisture: ${data.current.humidity}%</p>
        `;
    }
