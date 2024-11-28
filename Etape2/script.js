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
  // let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=Lyon&aqi=no`;
  let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=lyon&aqi=no`;
  // let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=${"input[id='inputbox']"}&aqi=no`;

  let data = await fetch(requestString);
  console.log(data);
  let response = await data.json();
  console.log(response);

  nameElement.innerText = `${response["location"]["name"]}`;
  cityname.appendChild(nameElement);

  // dateElement.innerText = `Last update ${response["current"]["last_updated"]}`;
  // date.appendChild(dateElement) // crée un bug

  weatherElement.innerText = `${response["current"]["condition"]["text"]}`;
  weather.appendChild(weatherElement);

  temperatureElement.innerText = `${response["current"]["temp_c"]}`;
  temperature.appendChild(temperatureElement);

  windElement.innerText = `${response["current"]["wind_kph"]}`;
  wind.appendChild(windElement);

  humidityElement.innerText = `Humidity ${response["current"]["humidity"]} %`;
  humidity.appendChild(humidityElement);

  console.log(`${response["current"]["condition"]["text"]}`);
  console.log(`${response["location"]["name"]}`);

  // document.body.innerHTML = `<div>${response["location"]["name"]}</div>`;
  // document.body.innerHTML = `<p>${response["current"]["condition"]["text"]}</p>`;

  // document.body.innerHTML = `<P>${response["current"]["temp_c"]}</P>`;
  // document.body.innerHTML = `<p>${response["current"]["wind_kph"]}</p>`;
  // document.body.innerHTML = `<p>${response["current"]["humidity"]}</p>`;

  // document.body.innerHTML = `<p>${response["current"]["icon"]}</p>`; // attention prevoir une image et non du texte en sorti
};
fetchWeather();
