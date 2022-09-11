/* eslint-disable */
import "./style.css";

let counter = 0;

setInterval(() => {
  if (counter == 10) {
    changeCard();
    counter = 0;
  } else {
    counter++;
  }
  document.getElementById("demo").innerHTML = counter;
}, 1000);

function changeCard() {
  function random_item(figura) {
    let random = figura[Math.floor(Math.random() * figura.length)];

    return random;
  }

  let figures = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let figTop = document.getElementById("topFig");
  let figBottom = document.getElementById("bottomFig");
  let figNumber = document.getElementById("numberFig");
  //let num = Math.floor(Math.random() * 9 + 2);

  let actual = random_item(figures);
  let num = random_item(number);

  if (actual === "&hearts;" || actual === "&diams;") {
    figBottom.style.color = "red";
    figTop.style.color = "red";
    figNumber.style.color = "red";
  } else {
    figBottom.style.color = "black";
    figTop.style.color = "black";
    figNumber.style.color = "black";
  }

  figBottom.innerHTML = actual;
  figTop.innerHTML = actual;
  figNumber.innerHTML = num;
}

window.onload = () => {
  //document.querySelector(".card").classList.add("heart");
  //setTimeout(() => {
  //document.querySelector(".card").classList.remove("heart");
  //document.querySelector(".card").classList.add("spade");
  //}, 2000); // 2 segundos

  changeCard();
};

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
  changeCard();
  clearInterval(interval);
  setInterval(() => {
    if (counter == 10) {
      changeCard();
      counter = 0;
    } else {
      counter++;
    }
    document.getElementById("demo").innerHTML = counter;
  }, 1000);
});

let input = document.querySelectorAll("input");

input.forEach(element => {
  if (element.className == "casillaB") {
    element.addEventListener("input", updateValue);
  } else if (element.className == "casillaA") {
    element.addEventListener("input", updateHeightValue);
  }
});

function updateValue(e) {
  let widthC = document.getElementById("carta");
  console.log(e.target.value);
  let size = e.target.value + "px";
  widthC.style.width = size;
}

function updateHeightValue(e) {
  let heightC = document.getElementById("carta");
  console.log(e.target.value);
  let size = e.target.value + "px";
  heightC.style.height = size;
}
