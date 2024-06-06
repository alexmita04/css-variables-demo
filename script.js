const inputs = document.querySelectorAll("input");

inputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    const units = input.dataset.units;
    let value;
    if (units) {
      value = e.target.value + units;
    } else value = e.target.value;

    document.documentElement.style.setProperty(`--${e.target.name}`, value);
  })
);
