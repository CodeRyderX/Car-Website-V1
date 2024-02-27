const mainPic1 = document.querySelector(".main-pic1");
const mainPic2 = document.querySelector(".main-pic2");
const mainPic3 = document.querySelector(".main-pic3");
const diamond1 = document.querySelector(".diamond1");
const diamond2 = document.querySelector(".diamond2");
const diamond3 = document.querySelector(".diamond3");

function Show1 () {
    const mainPic1 = document.querySelector(".main-pic1");
    mainPic1.style.display = "flex";
    const mainPic2 = document.querySelector(".main-pic2");
    mainPic2.style.display = "none";
    const mainPic3 = document.querySelector(".main-pic3");
    mainPic3.style.display = "none";
}
function Show2 () {
    const mainPic1 = document.querySelector(".main-pic1");
    mainPic1.style.display = "none";
    const mainPic2 = document.querySelector(".main-pic2");
    mainPic2.style.display = "flex";
    const mainPic3 = document.querySelector(".main-pic3");
    mainPic3.style.display = "none";
}
function Show3 () {
    const mainPic1 = document.querySelector(".main-pic1");
    mainPic1.style.display = "none";
    const mainPic2 = document.querySelector(".main-pic2");
    mainPic2.style.display = "none";
    const mainPic3 = document.querySelector(".main-pic3");
    mainPic3.style.display = "flex";
}

const click1 = document.querySelector(".click1");
const click2 = document.querySelector(".click2");
const click3 = document.querySelector(".click3");


click1.addEventListener('click', () => {
    diamond1.classList.add("enlarge");
    diamond2.classList.remove("enlarge");
    diamond3.classList.remove("enlarge");
});
click2.addEventListener('click', () => {
    diamond1.classList.remove("enlarge");
    diamond2.classList.add("enlarge");
    diamond3.classList.remove("enlarge");
});
click3.addEventListener('click', () => {
    diamond1.classList.remove("enlarge");
    diamond2.classList.remove("enlarge");
    diamond3.classList.add("enlarge");
});

diamond1.classList.add("clicked");
diamond1.addEventListener('click', () => {
    diamond1.classList.add("clicked");
    diamond1.classList.remove("unclicked");
    diamond2.classList.remove("clicked");
    diamond3.classList.remove("clicked");
})
diamond2.addEventListener('click', () => {
    diamond1.classList.add("unclicked");
    diamond2.classList.add("clicked");
    diamond3.classList.remove("clicked");
})
diamond3.addEventListener('click', () => {
    diamond1.classList.add("unclicked");
    diamond2.classList.remove("clicked");
    diamond3.classList.add("clicked");
})

const suvBtn = document.querySelector(".suv-btn");
const jeepBtn = document.querySelector(".jeep-btn");
const luxuryBtn = document.querySelector(".luxury-btn");
const sportscarBtn = document.querySelector(".sportscar-btn");
const navRow = document.querySelector(".nav-row");
const navRow2 = document.querySelector(".nav-row2");
const navRow3 = document.querySelector(".nav-row3");
const navRow4 = document.querySelector(".nav-row4");

function Tab1 () {
    const navRow = document.querySelector(".nav-row");
    navRow.style.display = "flex";
    const navRow2 = document.querySelector(".nav-row2");
    navRow2.style.display = "none";
    const navRow3 = document.querySelector(".nav-row3");
    navRow3.style.display = "none";
    const navRow4 = document.querySelector(".nav-row4");
    navRow4.style.display = "none";
}
function Tab2 () {
    const navRow = document.querySelector(".nav-row");
    navRow.style.display = "none";
    const navRow2 = document.querySelector(".nav-row2");
    navRow2.style.display = "flex";
    const navRow3 = document.querySelector(".nav-row3");
    navRow3.style.display = "none";
    const navRow4 = document.querySelector(".nav-row4");
    navRow4.style.display = "none";
}
function Tab3 () {
    const navRow = document.querySelector(".nav-row");
    navRow.style.display = "none";
    const navRow2 = document.querySelector(".nav-row2");
    navRow2.style.display = "none";
    const navRow3 = document.querySelector(".nav-row3");
    navRow3.style.display = "flex";
    const navRow4 = document.querySelector(".nav-row4");
    navRow4.style.display = "none";
}
function Tab4 () {
    const navRow = document.querySelector(".nav-row");
    navRow.style.display = "none";
    const navRow2 = document.querySelector(".nav-row2");
    navRow2.style.display = "none";
    const navRow3 = document.querySelector(".nav-row3");
    navRow3.style.display = "none";
    const navRow4 = document.querySelector(".nav-row4");
    navRow4.style.display = "flex";
}

suvBtn.classList.add("clicked");

suvBtn.addEventListener('click', () => {
    suvBtn.classList.remove("unclicked");
    jeepBtn.classList.remove("clicked");
    luxuryBtn.classList.remove("clicked");
    sportscarBtn.classList.remove("clicked");
})
jeepBtn.addEventListener('click', () => {
    suvBtn.classList.add("unclicked");
    jeepBtn.classList.add("clicked");
    luxuryBtn.classList.remove("clicked");
    sportscarBtn.classList.remove("clicked");
})
luxuryBtn.addEventListener('click', () => {
    suvBtn.classList.add("unclicked");
    jeepBtn.classList.remove("clicked");
    luxuryBtn.classList.add("clicked");
    sportscarBtn.classList.remove("clicked");
})
sportscarBtn.addEventListener('click', () => {
    suvBtn.classList.add("unclicked");
    jeepBtn.classList.remove("clicked");
    luxuryBtn.classList.remove("clicked");
    sportscarBtn.classList.add("clicked");
})

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

function Validate() {
    var code = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    const error = document.querySelector(".error");

    const feild = document.querySelector(".email").value;

    if (code.test(feild)) {
        error.classList.remove("display");
        return true
    } else{
        error.classList.add("display");
        return false
    };
}