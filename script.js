// 🎨 Part 2: Functions, Scope, Parameters, Return Values

// Global variable
let animationCount = 0;

// Function with parameters & return value
function calculateArea(width, height) {
  return width * height;
}

// Function showing scope difference
function localScopeExample() {
  let message = "I am local to this function!";
  console.log(message);
}

// 🎬 Part 3: Combining CSS + JS

// Toggle box animation
const jsBox = document.getElementById("jsBox");
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  animationCount++;
  jsBox.classList.toggle("active");
  console.log(`Box animation triggered ${animationCount} times`);
});

// Modal control with reusable functions
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function showModal() {
  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

showModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", hideModal);

// Test reusable function
console.log("Area of 5x10:", calculateArea(5, 10));
localScopeExample();