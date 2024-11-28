const timeContainer = document.getElementById("time-Container");
const timeElement = document.createElement("div");
const background = document.getElementById("body");
// background.style.backgroundColor = "rgb(250, 170, 0)";
/*background.style.background ='linear-gradient(blue, green)';*/

const soleil = document.getElementById("soleil");
soleil.style.position = "absolute";

let x = -150; //position de départ de l'objet soleil
let speed = 150; //pixels par minute
let counter = 0; //compteur

let hours;
let minutes;
let seconds;

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
  moveObject(); // on déplace le soleil
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

function moveObject() {
  //fonction qui déplace le soleil 1 fois par seconde
  x += speed; //on ajoute 150 à la position de l'objet soleil
  soleil.style.left = x + "px";

  counter++;
  if (counter == 15) {
    x = "";
  }
}

initTime();
setInterval(incrementSeconds, 1000);

// var percentage1 = 50;
// var color1 = "#C00";
// var percentage2 = 100;
// var color2 = "#000";

//  Changer coleurs :
// function changeBackgroundColor() {
//   // Generate random RGB color
//   const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
//     Math.random() * 256
//   )}, ${Math.floor(Math.random() * 256)})`;

//   // Apply the color to the body background
//   document.body.style.backgroundColor = randomColor;
// }

// // Automatically change background color every second
// setInterval(changeBackgroundColor, 1000); // 1000ms = 1 second

// changer coleurs 2 :
// const colors = [
//   "Alice blue",
//   "Lavender blue",
//   "Light cyon",
//   "Baby blue",
//   "Powder blue",
//   "Light blue",
//   "Sky blue",
//   "Ice blue",
//   "Steel blue",
//   "Dodger blue",
//   "Cornflower blue",
//   "Royal Blue",
//   "Cobalt Blue",
//   "Sapphire Blue",
//   "Dark Blue",
//   "Navy Blue",
//   "Midnight Blue",
//   "Charcoal Blue",
// ];

const colors = [
  "#FFFFFF",
  "#FFFAFA",
  "#F8F8FF",
  "#F0F8FF",
  "#F0FFFF",
  "#E0FFFF",
  "#D3D3D3",
  "#B0E0E6",
  "#AFEEEE",
  "#ADD8E6",
  "#BFEFFF",
  "#87CEEB",
  "#87CEFA",
  "#00BFFF",
  "#C4D8E2 ",
  "#81D8D0 ",
  "#4682B4 ",
  "#1E90FF ",
  "#6495ED ",
  "#26619C ",
  "#56A0D3 ",
  "#0047AB ",
  "#4169E1 ",
  "#0073CF ",
  "#0000CD ",
  "#0F52BA ",
  "#1C39BB ",
  "#00008B ",
  "#000080 ",
  "#191970 ",
  "#36454F ",
  "#A9A9A9 ",
  "#B4C6E7 ",
  "#87AFFF ",
  "#8A2BE2 ",
  "#4682B4 ",
  "#5F9EA0",
  "#7B68EE ",
  "#6A5ACD ",
  "#6A5ACD ",
  "#5D8AA8 ",
  "#4F94CD ",
  "#4169E1 ",
  "#0E4D92 ",
  "#4B0082 ",
  "#2E0854 ",
  "#4C66A4 ",
  "#03256C ",
  "#0C2340 ",
  "#000080 ",
  "#0000CD ",
  "#191970 ",
  "#1D2951 ",
  "#003366 ",
  "#003B5C ",
  "#003153 ",
  "#003366 ",
  "#2A3D66 ",
  "#2C3E50 ",
  "#2A3F54 ",
];

// const colors = ["white", "orange", "green", "red", "black"];
let currentIndex = 0;

function changeBackgroundColor() {
  // Set the background color to the current color
  document.body.style.backgroundColor = colors[currentIndex];

  // Update the index to the next color
  currentIndex = (currentIndex + 1) % colors.length; // Loop back to 0 after the last color
}

// Automatically change background color every second
setInterval(changeBackgroundColor, 1000); // 1000ms = 1 second
// function showDate() {
//     let date = new Date(); // on crée l'objet Date
//     let hours = date.getHours();    //on récupère l'heure dans la variable hours
//     let minutes = date.getMinutes(); //on récupère les minutes dans la variable minutes
//     let seconds = date.getSeconds(); //on récupère les secondes dans la variable seconds

//     if (hours < 10) hours = "0" + hours;           //ajout du zéro si nécessaire
//     if (minutes < 10) minutes = "0" + minutes;
//     if (seconds < 10) seconds = "0" + seconds;

//     timeElement.className = "time";
//     timeElement.innerText = `Il est ${hours}:${minutes}:${seconds}`; // on injecte les heures, minutes et secondes dans la balise

//     if (timeContainer) {
//         timeContainer.appendChild(timeElement); // met à jour l'élement timeElement
//     }

//     refresh(); // rafraichit après 1 seconde
// }

// function refresh() {
//     setTimeout(showDate, 1000); //fonction setTimeOut qui execute la fonction showDate toutes les 1000 millisecondes
//     moveObject();
// }
