var timer = 60;
var score = 0;
var hitNum = 0;

function makeBubble() {
    const element = document.getElementById('blockBottom');

    var clutter = "";

    for (var i = 0; i < 144; i++) {
        var num = Math.floor(Math.random() * 10);

        clutter += `<div class="bubble">${num}</div>`
    }

    element.innerHTML = clutter;
}

function runTimer() {
    var timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#blockBottom").style.flexDirection = "column";
            document.querySelector("#blockBottom").style.backgroundColor = "white";
            document.querySelector("#blockBottom").innerHTML = `<h1>Game Over</h1><h1>Score : ${score}</h1> <button onclick="refreshPage()">Restart</button>`
        }
    }, 1000);
}

function refreshPage() {
    window.location.reload();
}

function hitVal() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitNum;
}

function updateScore() {
    score += 10;

    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#blockBottom").
addEventListener('click', function (details) {
    var hit = Number(details.target.textContent);
    console.log(hit);
        if (hitNum === hit) {
            updateScore();
            hitVal();
            makeBubble();
        }
        else {
            details.target.style.backgroundColor = 'red';
        }
        document.querySelector("#blockBottom").style.backgroundColor = "white";
    })

hitVal();
runTimer();
makeBubble();