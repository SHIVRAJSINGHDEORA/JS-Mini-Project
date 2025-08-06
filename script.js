let h4 = document.querySelector("h4");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let p = document.querySelector("p");

let gameSq = [];
let userSq = [];
let list = [blue,yellow,green,red];
let started = false;
let level = 0;
let highScore = 0;
p.innerText = `High Score : ${highScore}`;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true ;
        levelUp();
    }
});

let levelUp = function (){
    userSq = [];
    level++ ;
    h4.innerText = `Level ${level}`;
    flash(random());
}

let flash = function (fall) {
     fall.classList.add("flash");
    setTimeout(function(){
        fall.classList.remove("flash");
    },200);
}

let Uflash = function (fall) {
     fall.classList.add("Uflash");
    setTimeout(function(){
        fall.classList.remove("Uflash");
    },100);
}

let random = function () {
    let pick = Math.floor(Math.random()*4);
    let game = list[pick].getAttribute("id");
    gameSq.push(game);
    console.log(gameSq);
    return list[pick];
}

function check (idx) {
    if(userSq[idx] === gameSq[idx]){
        if (userSq.length == gameSq.length){
            setTimeout(levelUp(),5000);
        }
    } else {
        if (highScore < ((level-1)*10)){
            highScore = (level-1)*10;
            p.innerText = `High Score : ${highScore}`;
        }
        h4.innerHTML = `Game Over ! <b>Your Score : ${(level-1)*10} <b> <br> Press Any Key to Start With New`;
        reset();
    }
}

function buttonPress () {
    let btn = this;
    let user = btn.getAttribute("id");
    userSq.push(user);
    Uflash(btn);
    check(userSq.length - 1);
}

let btns = document.querySelectorAll(".btns")
for (b of btns) {
    b.addEventListener("click" , buttonPress);
}
 
function reset () {
    started = false;
    userSq = [];
    gameSq = [];
    level = 0;
}