const button = document.getElementById("btn"); //on récupère les éléments de la page html
const cityname = document.getElementById("cityname");
const date = document.getElementById("date");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");

const nameElement = document.createElement("div"); //on crée des nouvelles div à l'intérieur des éléments de la page
const dateElement = document.createElement("div");
const weatherElement = document.createElement("div");
const temperatureElement = document.createElement("div");
const windElement = document.createElement("div");
const humidityElement = document.createElement("div");

const fetchWeather = async () => { // on déclare la fonction qui récupère les données sur l'API
  
  let input = document.getElementById("inputbox").value; //on récupère la valeur de l'input (nom de ville entré par l'utilisateur)

  let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=${input}&aqi=no`; //on injecte l'input dans la requête API

  let data = await fetch(requestString); //on lance l'appel à l'API
  let response = await data.json(); //on transforme les données au format json

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
};

button.addEventListener("click", fetchWeather); //on ajoute une addEventListener au bouton : au click, on lance la fonction fetchWeather
