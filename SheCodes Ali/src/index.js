function displayCity(response) {
  console.log(response.data);
  let cityResponse = document.querySelector("#city");
  cityResponse.innerHTML = response.data.city;
  let temperatureResponse = document.querySelector("#temperature");
  temperatureResponse.innerHTML =
    Math.round(response.data.temperature.current) + "ºC";
}

function citySearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#searching");
  let apiCity = searchInputElement.value;
  let apiKey = "1eafo8c549253t7ecbdfbc850a6a8763";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCity);
}

let weather = document.querySelector("#changes");
weather.addEventListener("submit", citySearch);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let timeDate = document.querySelector(".size");
timeDate.innerHTML = `${day}  ${hour} : ${minutes}`;
