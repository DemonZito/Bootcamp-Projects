let rounds = parseInt(document.querySelector("#rounds").value);

let player1 = {
    score: 0,
    display: document.querySelector("#scoreP1"),
    plus: document.querySelector("#plusP1")
}

let player2 = {
    score: 0,
    display: document.querySelector("#scoreP2"),
    plus: document.querySelector("#plusP2")
}

let players = [player1, player2];

function incrementScore(playerIdx) {
    players[playerIdx].score++;
    players[playerIdx].display.innerText=players[playerIdx].score;
    if(players[playerIdx].score == rounds) {
        players[playerIdx].display.classList.toggle("text-success")
        players[1 - playerIdx].display.classList.toggle("text-danger")
        toggleButtons(1);
    }
}

// Reset game state
function reset() {
    for(let p of players){
        p.score = 0;
        p.display.innerText=p.score;
        p.display.classList.remove("text-success", "text-danger");
    }
    rounds = parseInt(document.querySelector("#rounds").value);
    toggleButtons(0);
}

// Toggle enabled/disabled of buttons
toggleButtons = (disabled) => {
    for(let p of players){
        p.plus.disabled = disabled;
    }
}

// Bind changing of rounds selector to reset function
document.querySelector("#rounds").addEventListener("input", () => {
    reset();
});

// Player score events
players[0].plus.addEventListener("click", () => {incrementScore(0)});
players[1].plus.addEventListener("click", () => {incrementScore(1)});

// Reset binding
document.querySelector("#reset").addEventListener("click", reset);