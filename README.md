<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #74EBD5, #ACB6E5);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333;
        }

        .container {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            width: 100%;
            max-width: 500px;
            text-align: center;
        }

        h1 {
            margin-bottom: 20px;
            color: #333;
        }

        .search-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .search-box input {
            width: 70%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .search-box button {
            width: 25%;
            padding: 10px;
            border: none;
            background: #4CAF50;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }

        .search-box button:hover {
            background: #45a049;
        }

        .weather-info {
            margin-top: 20px;
        }

        .weather-info h2 {
            font-size: 24px;
            color: #333;
        }

        .weather-info p {
            font-size: 18px;
            margin: 10px 0;
            color: #555;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Weather App</h1>
    <div class="search-box">
        <input type="text" id="city" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
    </div>
    <div id="weather-info" class="weather-info">
        <!-- Weather details will appear here -->
    </div>
</div>

<script>
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
</script>

</body>
</html>
