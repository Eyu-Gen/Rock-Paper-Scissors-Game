const rulesBtn = document.getElementById("rulesBtn");
const crossBtn = document.getElementById("crossBtn");
const rulesContainer = document.getElementById("rulesContainer");


//Rules container Display when rulesBtn is chlicked...
rulesBtn.addEventListener("click", () => {
    rulesContainer.style.display = "flex";
});

//Rules container closed when rulesBtn is chlicked...
crossBtn.addEventListener("click", () => {
    rulesContainer.style.display = "none";
});