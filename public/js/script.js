console.log("Hello World!");

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
    let segundos = 0;
    let minutos = 0;
    setInterval(function () {
        if (segundos < 59) {
            segundos++;
            hora.innerHTML = segundos;
        }else{
            segundos = 0;
        }
    }, 1000)
}