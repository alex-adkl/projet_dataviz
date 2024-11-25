const timeContainer = document.getElementById("time-Container");
const timeElement = document.createElement("div");

const soleil = document.getElementById("soleil");
soleil.style.position = "absolute";

let x = -150; // initial x-coordinate
let speed = 150; // pixels par seconde

//TO DO : à optimiser (refresh 1 x par minute et non plus 1 x par seconde)
function refresh() {
    setTimeout(showDate, 1000); //fonction setTimeOut qui execute la fonction showDate toutes les 1000 millisecondes
    moveObject();
}

function showDate() {
    let date = new Date(); // on crée l'objet Date
    let hours = date.getHours();    //on récupère l'heure dans la variable hours
    let minutes = date.getMinutes(); //on récupère les minutes dans la variable minutes
    let seconds = date.getSeconds(); //on récupère les secondes dans la variable seconds
 
    if (hours < 10) hours = "0" + hours;           //ajout du zéro si nécessaire
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timeElement.className = "time";
    timeElement.innerText = `Il est ${hours}:${minutes}:${seconds}`; // on injecte les heures, minutes et secondes dans la balise

    if (timeContainer) {
        timeContainer.appendChild(timeElement); // met à jour l'élement timeElement
    }

    refresh(); // rafraichit après 1 seconde
}

function moveObject() { //fonction qui déplace l'objet sur l'axe horizontal
    x += speed;
    soleil.style.left = x + "px";
}

showDate();






