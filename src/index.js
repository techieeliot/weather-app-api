// let latitude = "";
// let longitude = "";
// let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let description = document.getElementById("desc");
let icon = document.getElementById("icon");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }
};

const showPosition = position => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(respjson) {
      console.log(respjson);
      let roundedTemp = Math.round(respjson.main.temp * (9 / 5) + 32);

      city.textContent = respjson.name;
      icon.setAttribute("src", respjson.weather[0].icon);
      temp.textContent = `The current temperature is ${roundedTemp}° F,`;
      description.textContent = `and the forecast is ${
        respjson.weather[0].description
      }.`;
      console.log(icon.getAttribute("id"));
    });
};

const showError = error => {
  alert(error.message);
};
getLocation();
