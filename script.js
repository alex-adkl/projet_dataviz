const timeContainer = document.getElementById("time-Container");
const timeElement = document.createElement("div");
const background = document.getElementById('body');
background.style.backgroundColor = "rgb(250, 170, 0)";
/*background.style.background ='linear-gradient(blue, green)';*/

const soleil = document.getElementById("soleil");
soleil.style.position = "absolute";

let x = -150; //position de départ de l'objet soleil
let speed = 150 ; //pixels par minute
let counter = 0; //compteur 

let hours;
let minutes;
let seconds;

function initTime(){        //fonction qui récupère la vraie heure et l'affiche à chaque minute
    
    let date = new Date();        //on crée l'objet Date
    hours = date.getHours();      //on récupère l'heure dans la variable hours
    minutes = date.getMinutes();  //on récupère les minutes dans la variable minutes
    seconds = date.getSeconds();  //on récupère les secondes dans la variable seconds

    showTime();                 //on appelle la fonction qui injecte l'heure dans la page html 

    setTimeout(initTime, (60 - seconds) * 1000); // On re-synchronise toutes les minutes
}

 
function incrementSeconds() { //Fonction qui incrémente les secondes et déplace le soleil
    
    seconds++; //on incremente les secondes

    if (seconds >= 60) { // si 60 secondes, on incrémente minutes de 1
        seconds = 0;
        minutes++;
        
        if (minutes >= 60) { // si 60 minutes, on incrémente hours de 1
            minutes = 0;
            hours++;
            
            if (hours >= 24) hours = 0; // si 24 heures, on revient à 0
        }
    }

    showTime(); // on met à jour l'affichage de l'heure
    moveObject(); // on déplace le soleil
}


function showTime() { //fonction qui injecte l'heure dans la page html
    
    let formatHours = hours;                                 //on ajoute un zéro sur les heures, minutes et secondes si nécessaire
    if (formatHours < 10) {formatHours = "0" + hours};     
    let formatMinutes = minutes;
    if (formatMinutes < 10) {formatMinutes = "0" + minutes};
    let formatSeconds = seconds;
    if (formatSeconds < 10) {formatSeconds = "0" + seconds};

    timeElement.className = "time";
    timeElement.innerText = `Il est ${formatHours}:${formatMinutes}:${formatSeconds}`; // on injecte les heures, minutes et secondes dans la balise

    if (timeContainer) {
        timeContainer.appendChild(timeElement); // met à jour l'élement timeElement
    }
}

function moveObject() { //fonction qui déplace le soleil 1 fois par seconde
    x += speed; //on ajoute 150 à la position de l'objet soleil
    soleil.style.left = x + "px";

    counter++;
  if (counter == 15) {
    x = "";
  }
}

initTime();
setInterval(incrementSeconds, 1000);


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
