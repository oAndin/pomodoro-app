console.log("Hello World!");

let ul = document.querySelector('ul');
let lis = document.querySelectorAll(`li`);

for(let i = 0 ; i < lis.length; i++){
    lis[i].addEventListener(`click`, function(){
      removeActive()
      lis[i].classList.add(`active`);
      ul.style = `--left: ${(i * 120) + 8}px`;
    });
};

function removeActive() {
    for(let i = 0; i < lis.length; i++) {
        lis[i].classList.remove(`active`);
    }
}

function desenhaSegundos() {
    
}