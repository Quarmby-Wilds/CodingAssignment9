// showSection and hideSection function

function showSection(section) {
    const sections = document.querySelectorAll(".collection-section");
    sections.forEach((s) => (s.style.display = "none"));
    document.getElementById(section).style.display = "block";
}
function hideSection(section) {
    const element = document.getElementById(section);
    if (element) {
        element.style.display = "none";
    }
}

// scoreClear function

let userWins = 0;
let compWins = 0;

function scoreClear() {
    userWins = 0;
    compWins = 0
}

//// Main BNJ function

const answers = ["bear", "ninja", "hunter"];

function bnj(choice) {
    // Generate computer answer

    let compChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        compChoice = "Bear";
    } else if (randomNumber === 2) {
        compChoice = "Ninja";
    } else {
        compChoice = "Hunter";
    }

    // Calculate who wins

    let results;

    switch (compChoice) {
        case "Bear":
            if (choice === "ninja") {
                results = "You picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins.";
                compWins++;
            }
            if (choice === "hunter") {
                results = "You picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!";
                userWins++;
            }
            break;
        case "Ninja":
            if (choice === "hunter") {
                results = "You picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins.";
                compWins++;
            }
            if (choice === "bear") {
                results = "You picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!";
                userWins++;
            }
            break;
        case "Hunter":
            if (choice === "bear") {
                results = "You picked " + choice + ".\nThe computer picked " + compChoice + ".\nComputer wins.";
                compWins++;
            }
            if (choice === "ninja") {
                results = "You picked " + choice + ".\nThe computer picked " + compChoice + ".\nYou win!";
                userWins++;
            }
            break;
    }

    if (compChoice.toLowerCase() === choice) {
        results = "You picked " + choice + ".\nThe computer picked " + compChoice + ".\nIt was a tie.";
    }

    console.log(results);

    document.getElementById("results").innerText = results;
    document.getElementById("userWins").innerText = userWins;
    document.getElementById("compWins").innerText = compWins;
}

document.addEventListener("DOMContentLoaded", bnj);
