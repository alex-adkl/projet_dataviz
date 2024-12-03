const button = document.getElementById("btn"); //on récupère les éléments de la page html
const cityname = document.getElementById("cityname");
const date = document.getElementById("date");
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
const forecastTemperatureMin = document.getElementById("ForecastTemperatureMin");
const forecastTemperatureMax = document.getElementById("ForecastTemperatureMax");

const nameElement = document.createElement("div"); //on crée des nouvelles div à l'intérieur des éléments de la page
const dateElement = document.createElement("div");
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

const fetchWeather = async () => {
  // on déclare la fonction qui récupère les données sur l'API

  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)

  let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=${input}&aqi=no`; //on injecte l'input dans la requête API

  let data = await fetch(requestString); //on lance l'appel à l'API
  response = await data.json(); //on transforme les données au format json

  nameElement.innerText = `Today in ${response["location"]["name"]}`; //on injecte les données récupérées dans les balises html
  cityname.appendChild(nameElement); //on ajoute la nouvelle div à l'intérieur de la balise html prévue

  dateElement.innerText = `Local time${response["location"]["localtime"]}`;
  date.appendChild(dateElement);

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

const fetchTempForecast = async () => {
  // Appel à l'API WeatherBit
  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur) 
  const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&days=3&key=52c8e3c84ece4734898ad2b0032941c2`);
  let data = await response.json();
  console.log(data.data[1].min_temp)
  console.log(data.data[1].max_temp)
  forecastTemperatureMinElement.innerText = `${data.data[1].min_temp} °C`;
  forecastTemperatureMin.appendChild(forecastTemperatureMinElement);
  forecastTemperatureMaxElement.innerText = `${data.data[1].max_temp} °C`;
  forecastTemperatureMax.appendChild(forecastTemperatureMaxElement);
}



// Appel à l'API WeatherAPI
const fetchWeatherForecast = async () => {
let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur) 
const response1 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3bdc4ada542e4b009b5141513242911&q=${input}&days=2&aqi=no&alerts=no`);
const data1 = await response1.json();
console.log(data1.forecast.forecastday[1].day.condition.text)
forecastWeatherElement.innerText = `${data1.forecast.forecastday[1].day.condition.text}`
forecastWeather.appendChild(forecastWeatherElement);
}

// weather-condition-ICONS

const fetchIcons = async () => {
  // on déclare la fonction qui récupère les données sur l'API

  // let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)

  let requestString = `weather_conditions.json`; //on injecte l'input dans la requête API

  let data = await fetch(requestString); //on lance l'appel à l'API
  let responseJson = await data.json(); //on transforme les données au format json

  console.log(response);

  // forEach
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
  console.log(weatherIconElement.innerHTML);
  // console.log(backgroundElement.innerHTMLL);

  // Temperature hot

  if (`${response["current"]["temp_c"]}` >= 20) {
    temperatureIconElement.innerHTML = `<img src= "icons/thermometer-warmer.svg">`;
    temperatureIcon.appendChild(temperatureIconElement);
  } else {
    temperatureIconElement.innerHTML = `<img src= "icons/thermometer-colder.svg">`;
    temperatureIcon.appendChild(temperatureIconElement);
  }

  // Example weather condition received from your API

  // if - else
  // const matchedLine = responseJson.find((line) =>
  //   line.day === response["current"]["condition"]["text"]
  // );

  // if (matchedLine) {
  //   weatherIconElement.innerHTML = `<img src="${matchedLine.image}" alt="${matchedLine.day}">`;
  // } else {
  //   console.error("No matching weather condition found.");
  // }

  // let index = 0;
  // while (
  //   `${response["current"]["condition"]["text"]}` == `${responseJson["day"]}`
  // ) {
  //   weatherIconElement.innerHTML = `<img >`;
  // }

  // nameElement.innerText = `Today in ${response["location"]["name"]}`; //on injecte les données récupérées dans les balises html
  // cityname.appendChild(nameElement); //on ajoute la nouvelle div à l'intérieur de la balise html prévue

  // weatherElement.innerText = `${response["current"]["condition"]["text"]}`;
  // weather.appendChild(weatherElement);

  // temperatureElement.innerText = `${response["current"]["temp_c"]} °C`;
  // temperature.appendChild(temperatureElement);

  // windElement.innerText = `${response["current"]["wind_kph"]} km/h`;
  // wind.appendChild(windElement);

  // humidityElement.innerText = `${response["current"]["humidity"]} %`;
  // humidity.appendChild(humidityElement);
};

function fetchAll() {
  fetchWeather();
  fetchWeatherForecast();
  fetchTempForecast()
}

button.addEventListener("click", fetchAll); //on ajoute une addEventListener au bouton : au click, on lance la fonction fetchWeather
