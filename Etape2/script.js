const button = document.getElementById("btn"); //on récupère les éléments de la page html
const cityname = document.getElementById("cityname");
const lastUpdate = document.getElementById("lastupdate");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");
const background = document.getElementById("background");
const temperatureIcon = document.getElementById("temperatureIcon");
const forecastWeather = document.getElementById("forecastWeather");
const forecastWeatherIcon = document.getElementById("forecastWeatherIcon");
const forecastTemperatureMin = document.getElementById(
  "forecastTemperatureMin"
);
const forecastTemperatureMax = document.getElementById(
  "forecastTemperatureMax"
);

const timeContainer = document.getElementById("time-Container");
const timeElement = document.createElement("div");

const nameElement = document.createElement("div"); //on crée des nouvelles div à l'intérieur des éléments de la page
const lastUpdateElement = document.createElement("div");
const weatherElement = document.createElement("div");
const temperatureElement = document.createElement("div");
const windElement = document.createElement("div");
const humidityElement = document.createElement("div");
const weatherIconElement = document.createElement("div");
const backgroundElement = document.createElement("div");
const temperatureIconElement = document.createElement("div");
const forecastWeatherElement = document.createElement("div");
const forecastWeatherIconElement = document.createElement("div");
const forecastTemperatureMinElement = document.createElement("div");
const forecastTemperatureMaxElement = document.createElement("div");

// On utilise var  pour pouvoir accéder à response.
var response;
let conditionText;

let hours;
let minutes;
let seconds;

const fetchWeather = async () => {
  // on déclare la fonction qui récupère les données sur l'API

  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)
  if (!input) {
    input = "Paris";
    console.log(input);
  }
  let requestString = `http://api.weatherapi.com/v1/current.json?key=c9ea07bc963e4bf7849141302240412&q=${input}&aqi=no`; //on injecte l'input dans la requête API

  let data = await fetch(requestString); //on lance l'appel à l'API
  response = await data.json(); //on transforme les données au format json

  nameElement.innerText = `Today in ${response["location"]["name"]}`; //on injecte les données récupérées dans les balises html
  cityname.appendChild(nameElement); //on ajoute la nouvelle div à l'intérieur de la balise html prévue

  lastUpdateElement.innerText = `Last update${response["current"]["last_updated"]}`;
  lastUpdate.appendChild(lastUpdateElement);

  weatherElement.innerText = `${response["current"]["condition"]["text"]}`;
  weather.appendChild(weatherElement);

  temperatureElement.innerText = `${response["current"]["temp_c"]} °C`;
  temperature.appendChild(temperatureElement);

  windElement.innerText = `${response["current"]["wind_kph"]} km/h`;
  wind.appendChild(windElement);

  humidityElement.innerText = `${response["current"]["humidity"]} %`;
  humidity.appendChild(humidityElement);

  fetchIcons();
};

// Appel à l'API WeatherBit = prévisions des température min. et max.
const fetchTempForecast = async () => {
  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)
  if (!input) {
    input = "Paris";
    console.log(input);
  }
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&days=3&key=52c8e3c84ece4734898ad2b0032941c2`
  );
  let data = await response.json();
  forecastTemperatureMinElement.innerText = `${data.data[1].min_temp} °C`;
  forecastTemperatureMin.appendChild(forecastTemperatureMinElement);
  forecastTemperatureMaxElement.innerText = `${data.data[1].max_temp} °C`;
  forecastTemperatureMax.appendChild(forecastTemperatureMaxElement);
};

// Appel à l'API WeatherAPI = prévisions text
const fetchWeatherForecast = async () => {
  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)
  if (!input) {
    input = "Paris";
    console.log(input);
  }
  let response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=c9ea07bc963e4bf7849141302240412&q=${input}&days=2&aqi=no&alerts=no`
  );
  let data1 = await response.json();

  conditionText = `${data1.forecast.forecastday[1].day.condition.text}`;
  console.log(data1.forecast.forecastday[1].day.condition.text);

  forecastWeatherElement.innerText = conditionText;
  forecastWeather.appendChild(forecastWeatherElement);

  fetchForecastIcon(conditionText);
};

const fetchForecastIcon = async (conditionText) => {
  let requestString = `weather_conditions.json`;
  let data2 = await fetch(requestString); //on lance l'appel à l'API
  let responseJson = await data2.json(); //on transforme les données au format json

  console.log(conditionText);

  // forEach pour injecter l'icone text forecast
  responseJson
    .filter((line) => {
      console.log(line.day, conditionText);

      return line.day.toLowerCase() === conditionText.toLowerCase();
    })
    .forEach((matchedLine) => {
      forecastWeatherIconElement.innerHTML = `<img src="${matchedLine.image}" alt="${matchedLine.day}">`;
      forecastWeatherIcon.appendChild(forecastWeatherIconElement);
      console.log(forecastWeatherIconElement.innerHTML);
    });
};

// weather-condition-ICONS

const fetchIcons = async () => {
  let requestString = `weather_conditions.json`; //on injecte l'input dans la requête API
  let data = await fetch(requestString); //on lance l'appel à l'API
  let responseJson = await data.json(); //on transforme les données au format json

  // forEach pour injecter l'icone text courant
  responseJson
    .filter(
      (line) => line.day === `${response["current"]["condition"]["text"]}`
    )
    .forEach((matchedLine) => {
      weatherIconElement.innerHTML = `<img src="${matchedLine.image}" alt="${matchedLine.day}">`;
      weatherIcon.appendChild(weatherIconElement);
      backgroundElement.innerHTML = `<img src="${matchedLine.background}" alt="${matchedLine.day}">`;
      background.appendChild(backgroundElement);
    });

  if (`${response["current"]["temp_c"]}` >= 20) {
    temperatureIconElement.innerHTML = `<img src= "icons/thermometer-warmer.svg">`; // Temperature hot
    temperatureIcon.appendChild(temperatureIconElement);
  } else {
    temperatureIconElement.innerHTML = `<img src= "icons/thermometer-colder.svg">`; // Temperature cold
    temperatureIcon.appendChild(temperatureIconElement);
  }
};

function fetchAll() {
  fetchWeather();
  fetchWeatherForecast();
  fetchTempForecast();
}

function initTime() {
  //fonction qui récupère la vraie heure et l'affiche à chaque minute

  let date = new Date(); //on crée l'objet Date
  hours = date.getHours(); //on récupère l'heure dans la variable hours
  minutes = date.getMinutes(); //on récupère les minutes dans la variable minutes
  seconds = date.getSeconds(); //on récupère les secondes dans la variable seconds

  showTime(); //on appelle la fonction qui injecte l'heure dans la page html

  setTimeout(initTime, (60 - seconds) * 1000); // On re-synchronise toutes les minutes
}

function incrementSeconds() {
  //Fonction qui incrémente les secondes et déplace le soleil

  seconds++; //on incremente les secondes

  if (seconds >= 60) {
    // si 60 secondes, on incrémente minutes de 1
    seconds = 0;
    minutes++;

    if (minutes >= 60) {
      // si 60 minutes, on incrémente hours de 1
      minutes = 0;
      hours++;

      if (hours >= 24) hours = 0; // si 24 heures, on revient à 0
    }
  }

  showTime(); // on met à jour l'affichage de l'heure
}

function showTime() {
  //fonction qui injecte l'heure dans la page html

  let formatHours = hours; //on ajoute un zéro sur les heures, minutes et secondes si nécessaire
  if (formatHours < 10) {
    formatHours = "0" + hours;
  }
  let formatMinutes = minutes;
  if (formatMinutes < 10) {
    formatMinutes = "0" + minutes;
  }
  let formatSeconds = seconds;
  if (formatSeconds < 10) {
    formatSeconds = "0" + seconds;
  }

  timeElement.className = "time";
  timeElement.innerText = `Il est ${formatHours}:${formatMinutes}:${formatSeconds}`; // on injecte les heures, minutes et secondes dans la balise

  if (timeContainer) {
    timeContainer.appendChild(timeElement); // met à jour l'élement timeElement
  }
}
initTime();
setInterval(incrementSeconds, 1000);

// Home Page
// async function myHome() {
// let input = "lyon";
// let requestStringLyon = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=${input}&aqi=no`; //on injecte l'input dans la requête API

// let dataLyon = await fetch(requestStringLyon); //on lance l'appel à l'API
// let responseLyon = await dataLyon.json();
// weatherElement.innerText = `${responseLyon["current"]["condition"]["text"]}`;
// weather.appendChild(weatherElement);

// temperatureElement.innerText = `${responseLyon["current"]["temp_c"]} °C`;
// temperature.appendChild(temperatureElement);

// windElement.innerText = `${responseLyon["current"]["wind_kph"]} km/h`;
// wind.appendChild(windElement);

// humidityElement.innerText = `${responseLyon["current"]["humidity"]} %`;
// humidity.appendChild(humidityElement);
// fetchIcons();

fetchAll();
// }
// myHome();

button.addEventListener("click", fetchAll); //on ajoute une addEventListener au bouton : au click, on lance la fonction fetchAll
