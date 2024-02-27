const darkBtn = document.querySelector(".info-mode");
const darkPath = document.querySelector(".mode");
const body = document.querySelector(".body");

//Body Dark Mode
darkBtn.addEventListener('click', () => {
    darkBtn.classList.toggle("move");
    darkPath.classList.toggle("change");
    body.classList.toggle("black");
});

// Signup Dropdown
const accArrow = document.querySelector(".account-arrow");
const accDrop = document.querySelector(".options");

accArrow.addEventListener('click', () => {
    accDrop.classList.toggle("see");
})