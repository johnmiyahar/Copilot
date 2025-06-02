document.addEventListener("DOMContentLoaded", () => {
  console.log('ShoreSquad is ready!');

  // Map is already embedded in index.html
  const mapSection = document.getElementById("map");

  // Placeholder for weather
  const weatherSection = document.getElementById("weather");
  weatherSection.innerHTML = "<p>Fetching weather data...</p>";

  // Show loading spinner for weather
  weatherSection.innerHTML = '<div class="spinner"></div><p>Fetching weather data...</p>';

  // Fetch and display 4-day weather forecast from NEA
  (async () => {
    try {
      const response = await fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const forecasts = data.items[0].forecasts;
      let html = '<h3>🌤️ 4-Day Weather Forecast</h3><ul style="list-style:none;padding:0;">';
      forecasts.forEach(day => {
        html += `<li>\n🌊 <strong>${day.date}</strong> <span style="color:#00B4D8;">(${day.forecast})</span><br>\n<small>Temp: ${day.temperature.low}°C - ${day.temperature.high}°C</small>\n</li>`;
      });
      html += '</ul>';
      weatherSection.innerHTML = html;
    } catch (err) {
      weatherSection.innerHTML = '<p style="color:#e63946;">Unable to fetch weather data. Please try again later.</p>';
    }
  })();

  // Placeholder for social features
  const socialSection = document.getElementById("social");
  socialSection.innerHTML = "<p>Loading social features...</p>";

  // Future: Integrate map (e.g. Leaflet.js), weather API, and social features here.
});
