let player1Score = 0;
let player2Score = 0;
let rounds = parseInt(document.querySelector("#rounds").value);
let scoreDisplayP1 = document.querySelector("#scoreP1");
let scoreDisplayP2 = document.querySelector("#scoreP2");
let plusP1 = document.querySelector("#plusP1");
let plusP2 = document.querySelector("#plusP2");

// Reset game state
function reset() {
    player1Score = 0;
    player2Score = 0;
    rounds = parseInt(document.querySelector("#rounds").value);
    scoreDisplayP1.innerText=player1Score;
    scoreDisplayP2.innerText=player2Score;
    toggleButtons();
    scoreDisplayP1.classList = "";
    scoreDisplayP2.classList = "";
}

// Toggle enabled/disabled of buttons
toggleButtons = () => {
    plusP1.disabled = !plusP1.disabled;
    plusP2.disabled = !plusP2.disabled;
}

// Bind changing of rounds selector to reset function
document.querySelector("#rounds").addEventListener("input", () => {
    reset();
});

// Player score events
plusP1.addEventListener("click", () => {
    player1Score++;
    scoreDisplayP1.innerText=player1Score;
    if(player1Score == rounds) {
        scoreDisplayP1.classList.toggle("text-success");
        scoreDisplayP2.classList.toggle("text-danger");
        toggleButtons();
    }
});
plusP2.addEventListener("click", () => {
    player2Score++;
    scoreDisplayP2.innerText=player2Score;
    if(player2Score == rounds) {
        scoreDisplayP2.classList.toggle("text-success");
        scoreDisplayP1.classList.toggle("text-danger");
        toggleButtons();
    }
});

// Reset binding
document.querySelector("#reset").addEventListener("click", reset);