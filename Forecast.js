let weather = {
  apiKey: "4ae30463b0ed1c32c22fcaebca09eb94",
  
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("⚠ Weather not found");
          throw new Error("⚠ Weather not found");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data))
      .then(() => this.fetchForecast(city));
  },
  
  fetchWeatherByCoordinates: function (lat, lon) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("⚠ Weather not found");
          throw new Error("⚠ Weather not found");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data))
      .then(() => this.fetchForecastByCoordinates(lat, lon));
  },

  fetchForecast: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("⚠ Forecast not found");
          throw new Error("⚠ Forecast not found");
        }
        return response.json();
      })
      .then((data) => this.displayForecast(data));
  },
  
  fetchForecastByCoordinates: function (lat, lon) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("⚠ Forecast not found");
          throw new Error("⚠ Forecast not found");
        }
        return response.json();
      })
      .then((data) => this.displayForecast(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const date = new Date();
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    var hours = d.getHours() % 12 || 12;
    var amOrPm = d.getHours() < 12 ? "AM" : "PM";
    document.getElementById("date").innerHTML = "📅   " + day+",  "+ d.getDate() +' '+month+" "+d.getFullYear()+"  <br>  "+"🕒   "+hours + ":" + d.getMinutes() +  " " + amOrPm + " (IST)";
  },

  displayForecast: function (data) {
    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.innerHTML = ""; // Clear previous forecast data

    const dailyData = data.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));
    dailyData.slice(0, 5).forEach((day) => {
      const date = new Date(day.dt * 1000);
      const dayName = date.toLocaleDateString("en-US", { weekday: 'short' });
      const fullDate = date.toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' });
      const { icon } = day.weather[0];
      const { temp } = day.main;
      const description = day.weather[0].description;

      const forecastEl = document.createElement("div");
      forecastEl.classList.add("forecast-day");
      forecastEl.innerHTML = `
        <div class="date">${dayName}, ${fullDate}</div>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}" />
        <div class="temp">${Math.round(temp)}°C</div>
        <div class="description">${description}</div>
      `;
      forecastContainer.appendChild(forecastEl);
    });
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },

  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.fetchWeatherByCoordinates(lat, lon);
        },
        () => {
          alert("Unable to retrieve your location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

// Adding event listener to get live location when the page loads
document.addEventListener("DOMContentLoaded", () => {
  weather.getLocation();
});
