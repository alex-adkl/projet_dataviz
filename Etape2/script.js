// const input = document.getElementById("input-box");
// const button = document.getElementById("btn");
// const weather = document.getElementById("weather");
// const temperature = document.getElementById("temperature");
// const wind = document.getElementById("wind");

const fetchWeather = async () => {
  let requestString = `http://api.weatherapi.com/v1/current.json?key=b0e73d7dbcd346fc826145808242711&q=Lyon&aqi=no

`;
  let data = await fetch(requestString);
  console.log(data);
  let response = await data.json();
  console.log(response);
  document.body.innerHTML = `<p>${response["current"]["condition"]["text"]}</p>`;
  console.log(`${response["current"]["condition"]["text"]}`);
};
fetchWeather();
