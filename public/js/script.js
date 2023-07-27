console.log("Hello World!");

let seconds = 0;
let minutes = 0;

const screen = {
    w: window.innerWidth,
    h: window.innerHeight,
}

const canvas = document.getElementById("canvasEve").getContext("2d");
function draw () {
    let secondsToAngle = seconds / 30 ;
    canvas.beginPath();
    canvas.fillStyle = 'white';
    canvas.arc(95, 50, 40, 0, Math.PI * secondsToAngle);
    canvas.stroke();
}
const clockLine = {}

let ul = document.querySelector('ul');
let lis = document.querySelectorAll(`li`);

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener(`click`, function () {
        removeActive()
        lis[i].classList.add(`active`);
        ul.style = `--left: ${(i * 120) + 8}px`;
    });
};

function removeActive() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove(`active`);
    }
}

function desenhaSegundos() {
}

let config = document.querySelector(`.configs`);

settings.onclick = function () {
    config.classList.add(`active`);
}

fecharSettings.onclick = function () {
    config.classList.remove(`active`);
}

let tempo1 = Number(localStorage.getItem(`tempo1`)) || 0;
let tempo2 = Number(localStorage.getItem(`tempo2`)) || 0;
let tempo3 = Number(localStorage.getItem(`tempo3`)) || 0;

confirm.onclick = function () {
    tempo1 = pomodoroTime.value;
    tempo2 = shortTime.value;
    tempo3 = longTime.value;

    localStorage.setItem(`tempo1`, tempo1);
    localStorage.setItem(`tempo2`, tempo2);
    localStorage.setItem(`tempo3`, tempo3);
}

state.onclick = function () {
    contaSegundos();
}

function contaSegundos() {
    setInterval(function () {
        if (seconds < 59) {
            seconds++;
            hora.innerHTML = seconds;
        } else {
            seconds = 0;
        }
        draw();
        console.log(seconds);
    }, 1000)
}
