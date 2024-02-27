const featuresRow = document.querySelector(".first-row");
const bestSellersRow = document.querySelector(".second-row");
const popularRow = document.querySelector(".third-row");

// Tab Change
function Features() {
    const featuresRow = document.querySelector(".first-row");
    featuresRow.style.display = "flex";
    const bestSellersRow = document.querySelector(".second-row");
    bestSellersRow.style.display = "none";
    const popularRow = document.querySelector(".third-row");
    popularRow.style.display = "none";
}
function BestSellers() {
    const featuresRow = document.querySelector(".first-row");
    featuresRow.style.display = "none";
    const bestSellersRow = document.querySelector(".second-row");
    bestSellersRow.style.display = "flex";
    const popularRow = document.querySelector(".third-row");
    popularRow.style.display = "none";
}
function Populars() {
    const featuresRow = document.querySelector(".first-row");
    featuresRow.style.display = "none";
    const bestSellersRow = document.querySelector(".second-row");
    bestSellersRow.style.display = "none";
    const popularRow = document.querySelector(".third-row");
    popularRow.style.display = "flex";
}

// Tab Style

const tab1 = document.querySelector(".bookmark-word1");
const tab2 = document.querySelector(".bookmark-word2");
const tab3 = document.querySelector(".bookmark-word3");

tab1.addEventListener('click', () => {
    tab1.classList.add("clicked");
    tab1.classList.remove("unclicked");
    tab2.classList.remove("clicked");
    tab3.classList.remove("clicked");
})
tab2.addEventListener('click', () => {
    tab1.classList.add("unclicked");
    tab2.classList.add("clicked");
    tab3.classList.remove("clicked");
})
tab3.addEventListener('click', () => {
    tab1.classList.add("unclicked");
    tab2.classList.remove("clicked");
    tab3.classList.add("clicked");
})

// Likes
const likes = document.querySelectorAll(".like");

likes.forEach((like) => {
    like.addEventListener('click', () => {
        like.classList.toggle("color");
    })
});


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