const inputs = document.querySelectorAll(".controls input");
const image = document.querySelector("img");

const updateImg = function () {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
};

inputs.forEach((inp) => inp.addEventListener("change", updateImg));
inputs.forEach((inp) => inp.addEventListener("mousemove", updateImg));
