const button = document.getElementById("btn");                //on récupère les éléments de la page html
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
const forecastTemperatureMin = document.getElementById("forecastTemperatureMin");
const forecastTemperatureMax = document.getElementById("forecastTemperatureMax");
const timeContainer = document.getElementById("time-Container");


const nameElement = document.createElement("div");          //on crée des nouvelles div à l'intérieur des éléments de la page
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
const timeElement = document.createElement("div");

// On utilise var pour pouvoir accéder à response et conditionText
var response;
let conditionText;

let hours;    //on déclare des variables pour afficher l'heure en temps réel
let minutes;
let seconds;

const fetchWeather = async () => {           // on déclare la fonction qui récupère les données sur l'API

  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)
  if (!input) {                                           //si l'input est undefined, on met Paris
    input = "Paris";
  }

  let requestString = `http://api.weatherapi.com/v1/current.json?key=c9ea07bc963e4bf7849141302240412&q=${input}&aqi=no`; //on injecte l'input dans la requête API

  let data = await fetch(requestString);    //on lance l'appel à l'API
  response = await data.json();             //on transforme les données au format json

  nameElement.innerText = `Today in ${response["location"]["name"]}`;     //on injecte les données récupérées dans les balises html
  cityname.appendChild(nameElement);                                      //on ajoute la nouvelle div à l'intérieur de la balise html prévue

  lastUpdateElement.innerText = `Last update: ${response["current"]["last_updated"]}`;
  lastUpdate.appendChild(lastUpdateElement);

  weatherElement.innerText = `${response["current"]["condition"]["text"]}`;
  weather.appendChild(weatherElement);

  temperatureElement.innerText = `${response["current"]["temp_c"]} °C`;
  temperature.appendChild(temperatureElement);

  windElement.innerText = `${response["current"]["wind_kph"]} km/h`;
  wind.appendChild(windElement);

  humidityElement.innerText = `${response["current"]["humidity"]} %`;
  humidity.appendChild(humidityElement);

  fetchIcons(); //on appelle la fonction fetchIcons, qui va filtrer et injecter les icônes dans le html
};

// Appel à l'API WeatherBit = prévisions des température min. et max. J+1
const fetchTempForecast = async () => {
  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)
  if (!input) {
    input = "Paris";                                    //si l'input est undefined, on met Paris
  }
  const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&days=3&key=52c8e3c84ece4734898ad2b0032941c2`); //appel à la deuxième API
  let data = await response.json();   //on transforme les données au format json
  forecastTemperatureMinElement.innerText = `${data.data[1].min_temp} °C`; //on injecte les données dans le html
  forecastTemperatureMin.appendChild(forecastTemperatureMinElement);
  forecastTemperatureMaxElement.innerText = `${data.data[1].max_temp} °C`;
  forecastTemperatureMax.appendChild(forecastTemperatureMaxElement);
};

// Appel à l'API WeatherAPI = prévisions text
const fetchWeatherForecast = async () => {
  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)
  if (!input) {
    input = "Paris";  //si l'input est undefined, on met Paris
  }
  let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c9ea07bc963e4bf7849141302240412&q=${input}&days=2&aqi=no&alerts=no`); //appel à l'API
  let data1 = await response.json(); //on transforme les données au format json

  conditionText = `${data1.forecast.forecastday[1].day.condition.text}`; //on injecte les données dans une variable conditionText

  forecastWeatherElement.innerText = conditionText; //on injecte les données dans le html
  forecastWeather.appendChild(forecastWeatherElement);

  fetchForecastIcon(conditionText); //on appelle la fonction qui définit et injecte l'icône en fonction du text (sunny, cloudy, etc.)
};

const fetchForecastIcon = async (conditionText) => { //fonction qui filtre le text envoyé par l'API et l'icône correspondante via le fichier json

  let requestString = `weather_conditions.json`; //contient les correspondantes text et icone et image de fond
  let data2 = await fetch(requestString); //on lance l'appel à notre fichier
  let responseJson = await data2.json(); //on transforme les données au format json

  // on compare et on injecte 
  responseJson
    .filter((line) => { 
      return line.day.toLowerCase() === conditionText.toLowerCase(); //compare les deux données
    })
    .forEach((matchedLine) => { // on injecte l'icône correspondant au text
      forecastWeatherIconElement.innerHTML = `<img src="${matchedLine.image}" alt="${matchedLine.day}">`;
      forecastWeatherIcon.appendChild(forecastWeatherIconElement);
    });
};

//fonction qui filtre le text envoyé par l'API et l'icône correspondante via le fichier json 
const fetchIcons = async () => {
  let requestString = `weather_conditions.json`; //on injecte l'input dans la requête API
  let data = await fetch(requestString); //on lance l'appel à notre fichier
  let responseJson = await data.json(); //on transforme les données au format json

  
  responseJson // on compare et on injecte 
    .filter(
      (line) => line.day === `${response["current"]["condition"]["text"]}` //compare les deux données
    )
    .forEach((matchedLine) => { // on injecte l'icône et l'image de fond correspondant au text
      weatherIconElement.innerHTML = `<img src="${matchedLine.image}" alt="${matchedLine.day}">`;
      weatherIcon.appendChild(weatherIconElement);
      backgroundElement.innerHTML = `<img src="${matchedLine.background}" alt="${matchedLine.day}">`;
      background.appendChild(backgroundElement);
    });

  if (`${response["current"]["temp_c"]}` >= 20) { //condition pour la témpérature (icones chaud ou froid)
    temperatureIconElement.innerHTML = `<img src= "icons/thermometer-warmer.svg">`; // Temperature hot
    temperatureIcon.appendChild(temperatureIconElement);
  } else {
    temperatureIconElement.innerHTML = `<img src= "icons/thermometer-colder.svg">`; // Temperature cold
    temperatureIcon.appendChild(temperatureIconElement);
  }
};

function fetchAll() { //fonction qui lance les différents appels aux API
  fetchWeather();
  fetchWeatherForecast();
  fetchTempForecast();
}

function initTime() {  //fonction qui récupère la vraie heure et l'affiche à chaque minute

  let date = new Date();    //on crée l'objet Date
  hours = date.getHours(); //on récupère l'heure dans la variable hours
  minutes = date.getMinutes(); //on récupère les minutes dans la variable minutes
  seconds = date.getSeconds(); //on récupère les secondes dans la variable seconds

  showTime(); //on appelle la fonction qui injecte l'heure dans la page html

  setTimeout(initTime, (60 - seconds) * 1000); // On re-synchronise toutes les minutes
}

function incrementSeconds() {  //Fonction qui incrémente les secondes

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
  timeElement.innerText = `${formatHours} : ${formatMinutes} : ${formatSeconds}`; // on injecte les heures, minutes et secondes dans la balise

  if (timeContainer) {
    timeContainer.appendChild(timeElement); // met à jour l'élement timeElement
  }
}

//Appels des fonctions au démarrage

initTime();   //fonction qui récupère la vraie heure et l'affiche à chaque minute
setInterval(incrementSeconds, 1000); //fonction qui met à jour les secondes, minutes et heures

fetchAll(); //on lance tous les appels aux API

button.addEventListener("click", fetchAll); //on ajoute une addEventListener au bouton : au click, on lance la fonction fetchAll
