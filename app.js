const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const dot1 = document.querySelector(".dotOne");
const dot2 = document.querySelector(".dotTwo");
const dot3 = document.querySelector(".dotThree");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

const tab1 = document.querySelector(".section6");
const tab2 = document.querySelector(".section7");

const blankSectionSmooth = document.querySelector(".section2half");
const dropDownButton = document.getElementById("dropdownButton");
const dropDownContent = document.querySelector(".dropdown-content");

dot1.addEventListener('click', () => {
  slide1.style.display = "block";
  slide2.style.display = "none";
  slide3.style.display = "none";

  dot1.style.backgroundColor = "#A8A8A8";
  dot2.style.backgroundColor = "#ffffff";
  dot3.style.backgroundColor = "#ffffff";
});

dot2.addEventListener('click', () => {
  slide1.style.display = "none";
  slide2.style.display = "block";
  slide3.style.display = "none";

  dot1.style.backgroundColor = "#ffffff";
  dot2.style.backgroundColor = "#A8A8A8";
  dot3.style.backgroundColor = "#ffffff";
});

dot3.addEventListener('click', () => {
  slide1.style.display = "none";
  slide2.style.display = "none";
  slide3.style.display = "block";

  dot1.style.backgroundColor = "#ffffff";
  dot2.style.backgroundColor = "#ffffff";
  dot3.style.backgroundColor = "#A8A8A8";
});


button1.addEventListener('click', () => {
  button1.style.color = "#414f6b";
  button1.style.backgroundColor = "#b0b4be";
  button1.style.textDecoration = "underline";

  button2.style.color = "#b0b4be";
  button2.style.backgroundColor = "#414f6b";
  button2.style.textDecoration = "none";

  tab1.style.display = "flex";
  tab2.style.display = "none";
});

button2.addEventListener('click', () => {
  button2.style.color = "#414f6b";
  button2.style.backgroundColor = "#b0b4be";
  button1.style.color = "#b0b4be";
  button1.style.backgroundColor = "#414f6b";

  button1.style.textDecoration = "none";
  button2.style.textDecoration = "underline";
  tab1.style.display = "none";
  tab2.style.display = "flex";
});

button3.addEventListener('click', () => {
  button3.style.color = "#414f6b";
  button3.style.backgroundColor = "#b0b4be";
  button4.style.color = "#b0b4be";
  button4.style.backgroundColor = "#414f6b";

  button3.style.textDecoration = "underline";
  button4.style.textDecoration = "none";
  tab1.style.display = "flex";
  tab2.style.display = "none";
});

button4.addEventListener('click', () => {
  button4.style.color = "#414f6b";
  button4.style.backgroundColor = "#b0b4be";
  button3.style.color = "#b0b4be";
  button3.style.backgroundColor = "#414f6b";

  button4.style.textDecoration = "none";
  button3.style.textDecoration = "underline";
  tab1.style.display = "none";
  tab2.style.display = "flex";
});

window.onscroll = () => { pageSet() };
var navbar = document.querySelector(".section2");
var sticky = navbar.offsetTop;
const pageSet = () => {
  if (window.pageYOffset >= sticky) {
    blankSectionSmooth.style.display = "block";
    navbar.classList.add("sticky");
  } else {
    blankSectionSmooth.style.display = "none";
    navbar.classList.remove("sticky");
  }
}

dropDownButton.addEventListener('click', () => {
  dropDownContent.style.display === "none"
  ? dropDownContent.style.display = "block"
  : dropDownContent.style.display = "none";
});