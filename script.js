const spacingInput = document.getElementById("spacing");
const blurInput = document.getElementById("blur");
const colorInput = document.getElementById("color");
const imgContainer = document.querySelector(".image-container");
const img = document.querySelector("img");

blurInput.addEventListener("input", (e) => {
  const blurValue = e.target.value + "px";
  document.documentElement.style.setProperty(`--blur`, blurValue);
});
