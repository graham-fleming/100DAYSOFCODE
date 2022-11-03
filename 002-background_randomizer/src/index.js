import "./styles.css";

// Initialize Random HEX Color Code
const hexColorCode = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// Initialize All Required DOM Elements
const mainSection = document.getElementById("mainSection");
const pickColor = document.getElementById("pickColor");
const pickButton = document.getElementById("pickButton");
// const copyButton = document.getElementById("copyButton");

// Initialize the Random HEX Color Picker
pickButton.addEventListener("click", () => {
  let hexColorName = "#";

  for (let i = 0; i < 6; i++) {
    hexColorName += hexColorCode[getRandomArray()];
  }

  pickColor.style.color = hexColorName;
  pickColor.textContent = hexColorName;
  mainSection.style.backgroundColor = hexColorName;
});

const getRandomArray = () => {
  return Math.floor(Math.random() * hexColorCode.length);
};
