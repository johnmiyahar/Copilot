document.addEventListener("DOMContentLoaded", () => {
  console.log('ShoreSquad is ready!');

  // Placeholder for weather data
  const weatherSection = document.getElementById("weather");
  weatherSection.innerHTML = "<p>Loading weather data...</p>";

  // Fetch weather data from NEA API
  const fetchWeatherData = async () => {
    try {
      const response = await fetch("https://api.data.gov.sg/v1/environment/4-day-weather-forecast");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Format and display weather data
      const forecasts = data.items[0].forecasts;
      let weatherHTML = "<h2>4-Day Weather Forecast</h2><ul>";

      forecasts.forEach(forecast => {
        weatherHTML += `<li><strong>${forecast.date}</strong>: ${forecast.forecast} (High: ${forecast.temperature.high}°C, Low: ${forecast.temperature.low}°C)</li>`;
      });

      weatherHTML += "</ul>";
      weatherSection.innerHTML = weatherHTML;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      weatherSection.innerHTML = "<p>Unable to fetch weather data at this time. Please try again later.</p>";
    }
  };

  fetchWeatherData();

  // Placeholder for map
  const mapSection = document.getElementById("map");

  // Future: Add NEA API and Google Maps integration here
});
