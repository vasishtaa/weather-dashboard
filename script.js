const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherResults = document.getElementById("weatherResults");

searchButton.addEventListener("click", searchWeather);

function searchWeather() {
    const city = cityInput.value;
    if (city === "") return;

    // Fetch weather data using an API (replace with actual API call)
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   
