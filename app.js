const bgm = document.getElementById("bgm");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const rulesBtn = document.getElementById("rulesBtn");
const crossBtn = document.getElementById("crossBtn");
const rulesContainer = document.getElementById("rulesContainer");
const chooseOneContainer = document.getElementById("chooseOneContainer");
const choosedContainer = document.getElementById("choosedContainer");
const humanContainer = document.getElementById("humanContainer");
const computerContainer = document.getElementById("computerContainer");
const circle = document.getElementById("circle");
const optionBoxs = document.getElementsByClassName("optionBox");
const playAgainBtns = document.getElementsByClassName("playAgainBtn");
const statusContainer = document.getElementById("statusContainer");
const mobileStatusContainer = document.getElementById("mobileStatusContainer");
const mobileStatus = document.getElementById("mobileStatus");
let clickedOption;
let randomNumber;

//BGM Volume low...
bgm.play();
bgm.volume = 0.5;

//Rules container Display when rulesBtn is chlicked...
rulesBtn.addEventListener("click", () => {
    rulesContainer.style.display = "flex";
});

//Rules container closed when rulesBtn is chlicked...
crossBtn.addEventListener("click", () => {
    rulesContainer.style.display = "none";
});

//Display container-2 after clicking options...
Array.from(optionBoxs).forEach(optionBox => {
    optionBox.addEventListener("click", () => {
        chooseOneContainer.style.display = "none"
        choosedContainer.style.display = "flex";
        clickedOption = Array.from(optionBoxs).indexOf(optionBox);
        clickedFunction(clickedOption);
        setTimeout(() => { randomNumberGenereator(clickedOption) }, 2000);
        setTimeout(() => { winnerDisplay(clickedOption, randomNumber) }, 3000);
    })
})

//Reload when playAgainBtn is clicked...
Array.from(playAgainBtns).forEach(playAgainBtn => {
    playAgainBtn.addEventListener("click", () => {
        chooseOneContainer.style.display = "flex";
        choosedContainer.style.display = "none";
        resetEverything();
    })
});


// .................................................Functions................................................//
//Display Choosed option in container-2...
function clickedFunction(clickedOption) {
    switch (clickedOption) {
        case 0:
            humanContainer.innerHTML =
                `<div class="playerTitle">you picked</div>
                <div class="choosedBox center" id="paperBox">
                    <div class="imageSection">
                        <img src="images/icon-paper.svg" alt="" id="choosedOption">
                    </div>
                </div>`;
            break;

        case 1:
            humanContainer.innerHTML =
                `<div class="playerTitle">you picked</div>
                <div class="choosedBox center" id="scissorsBox">
                    <div class="imageSection">
                        <img src="images/icon-scissors.svg" alt="" id="choosedOption">
                    </div>
                </div>`;
            break;

        case 2:
            humanContainer.innerHTML =
                `<div class="playerTitle">you picked</div>
                <div class="choosedBox center" id="rockBox">
                    <div class="imageSection">
                        <img src="images/icon-rock.svg" alt="" id="choosedOption">
                    </div>
                </div>`;
            break;

        default:
            alert("ERROR!!");
    }
}

// Generate random number and display random optionBox...
function randomNumberGenereator(clickedOption) {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == clickedOption) {
        return randomNumberGenereator(clickedOption);
    }

    circle.style.display = "none";
    switch (randomNumber) {
        case 0:
            computerContainer.innerHTML =
                `<div class="playerTitle">the house picked</div>
                <div class="choosedBox center" id="paperBox">
                    <div class="imageSection">
                        <img src="images/icon-paper.svg" alt="" id="choosedOption">
                    </div>
                </div>`;
            break;

        case 1:
            computerContainer.innerHTML =
                `<div class="playerTitle">the house picked</div>
                <div class="choosedBox center" id="scissorsBox">
                    <div class="imageSection">
                        <img src="images/icon-scissors.svg" alt="" id="choosedOption">
                    </div>
                </div>`;
            break;

        case 2:
            computerContainer.innerHTML =
                `<div class="playerTitle">the house picked</div>
                <div class="choosedBox center" id="rockBox">
                    <div class="imageSection">
                        <img src="images/icon-rock.svg" alt="" id="choosedOption">
                    </div>
                </div>`;
            break;

        default:
            alert("ERROR!!");
    }
}

//Displaying the status of game... 
function winnerDisplay(clickedOption, randomNumber) {
    const status = document.getElementById("status");
    if ((clickedOption == 0 && randomNumber == 1) || (clickedOption == 1 && randomNumber == 2) || (clickedOption == 2 && randomNumber == 0)) {
        if (window.innerWidth >= 550) {
            status.textContent = "you lose";
            statusContainer.style.visibility = "visible";
        } else {
            mobileStatus.textContent = "you lose";
            mobileStatusContainer.style.display = "flex";
        }
        lose.play();
        computerContainer.classList.add("animation");
    }
    else if ((clickedOption == 0 && randomNumber == 2) || (clickedOption == 1 && randomNumber == 0) || clickedOption == 2 && randomNumber == 1) {
        if (window.innerWidth >= 550) {
            status.textContent = "you win";
            statusContainer.style.visibility = "visible";
        } else {
            mobileStatus.textContent = "you win";
            mobileStatusContainer.style.display = "flex";
        }
        win.play();
        humanContainer.classList.add("animation");
    } else {
        alert("ERROR!!");
        statusContainer.style.visibility = "hidden";
    }
}

//Reseting everthing when playAgainBtn is clicked...
function resetEverything() {
    computerContainer.innerHTML =
        `<div class="playerTitle">the house picked</div>
    <div class="animation" id="circle"></div>`;

    statusContainer.style.visibility = "hidden";
    mobileStatusContainer.style.display = "none";
    computerContainer.classList.remove("animation");
    humanContainer.classList.remove("animation");
}

