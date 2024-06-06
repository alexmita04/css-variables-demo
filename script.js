const spacingInput = document.getElementById("spacing");
const blurInput = document.getElementById("blur");
const colorInput = document.getElementById("color");
const imgContainer = document.querySelector(".image-container");
const img = document.querySelector("img");

blurInput.addEventListener("input", (e) => {
  const blurValue = e.target.value + "px";
  document.documentElement.style.setProperty(`--${e.target.name}`, blurValue);
});

spacingInput.addEventListener("input", (e) => {
  const spacingValue = e.target.value + "px";
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    spacingValue
  );
});

colorInput.addEventListener("input", (e) => {
  const colorValue = e.target.value;
  console.log(colorValue);
  document.documentElement.style.setProperty(`--base`, colorValue);
});
