const timeContainer = document.getElementById("time-Container");
const timeElement = document.createElement("div");

function refresh() {
    setTimeout(showDate, 1000); //fonction setTimeOut qui execute la fonction showDate toutes les 1000 millisecondes
}

function showDate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
 
    if (hours < 10) hours = '0' + hours;            //ajout du zéro si nécessaire
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    timeElement.className = "time";
    timeElement.innerText = `Il est ${hours}:${minutes}:${seconds}`;

    if (timeContainer) {
        timeContainer.appendChild(timeElement); // met à jour l'élement timeElement
    }

    refresh(); // rafraichit après 1 seconde
}

showDate();


