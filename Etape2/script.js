const button = document.getElementById("btn"); //on récupère les éléments de la page html
const cityname = document.getElementById("cityname");
const date = document.getElementById("date");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");
const background = document.getElementById("background");
const temperatureIcon = document.getElementById("temperatureIcon");

const nameElement = document.createElement("div"); //on crée des nouvelles div à l'intérieur des éléments de la page
const dateElement = document.createElement("div");
const weatherElement = document.createElement("div");
const temperatureElement = document.createElement("div");
const windElement = document.createElement("div");
const humidityElement = document.createElement("div");
const weatherIconElement = document.createElement("div");
const backgroundElement = document.createElement("div");
const temperatureIconElement = document.createElement("div");

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

// function fetchAll() {
//   fetchWeather();
//   fetchIcons();
// }

button.addEventListener("click", fetchWeather); //on ajoute une addEventListener au bouton : au click, on lance la fonction fetchWeather
