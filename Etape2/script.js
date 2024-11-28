const input = document.getElementById("input-box");
const button = document.getElementById("btn");

const name = document.getElementById("city-name");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");

const nameElement = document.createElement("name");
const weatherElement = document.createElement("div");
const temperatureElement = document.createElement("temperature");
const windElement = document.createElement("wind");
const humidityElement = document.createElement("humidity");

const fetchWeather = async () => {
  let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=Lyon&aqi=no

`;
  let data = await fetch(requestString);
  console.log(data);
  let response = await data.json();
  console.log(response);
  weatherElement.innerText = `${response["current"]["condition"]["text"]}`;

  console.log(`${response["current"]["condition"]["text"]}`);

  document.body.innerHTML = `<div>${response["location"]["name"]}</div>`;
  document.body.innerHTML = `<p>${response["current"]["condition"]["text"]}</p>`;

  document.body.innerHTML = `<P>${response["current"]["temp_c"]}</P>`;
  document.body.innerHTML = `<p>${response["current"]["wind_kph"]}</p>`;
  document.body.innerHTML = `<p>${response["current"]["humidity"]}</p>`;

  // document.body.innerHTML = `<p>${response["current"]["icon"]}</p>`; // attention prevoir une image et non du texte en sorti
};
fetchWeather();
