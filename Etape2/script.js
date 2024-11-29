const button = document.getElementById("btn");
const cityname = document.getElementById("cityname");
const date = document.getElementById("date");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");

const nameElement = document.createElement("div");
const dateElement = document.createElement("div");
const weatherElement = document.createElement("div");
const temperatureElement = document.createElement("div");
const windElement = document.createElement("div");
const humidityElement = document.createElement("div");

const fetchWeather = async () => {
  let input = document.getElementById("inputbox").value;

  let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=${input}&aqi=no`;

  let data = await fetch(requestString);
  console.log(data);
  let response = await data.json();
  console.log(response);

  nameElement.innerText = `Today in ${response["location"]["name"]}`;
  cityname.appendChild(nameElement);

  weatherElement.innerText = `${response["current"]["condition"]["text"]}`;
  weather.appendChild(weatherElement);

  temperatureElement.innerText = `${response["current"]["temp_c"]} °C`;
  temperature.appendChild(temperatureElement);

  windElement.innerText = `${response["current"]["wind_kph"]} km/h`;
  wind.appendChild(windElement);

  humidityElement.innerText = `${response["current"]["humidity"]} %`;
  humidity.appendChild(humidityElement);

  console.log(`${response["current"]["condition"]["text"]}`);
  console.log(`${response["location"]["name"]}`);
};

button.addEventListener("click", fetchWeather);
