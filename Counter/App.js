let count = 0;

const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

decrease.addEventListener("click", function () {
  count--;
  value.textContent = count;
  if (count < 0) {
    value.style.color = "red";
  } else if (count > 0) {
    value.style.color = "green";
  } else if (count === 0) {
    value.style.color = "hsl(209, 61%, 16%)";
  }
});
reset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
  value.style.color = "hsl(209, 61%, 16%)";
});
increase.addEventListener("click", function () {
  count++;
  value.textContent = count;
  if (count < 0) {
    value.style.color = "red";
  } else if (count > 0) {
    value.style.color = "green";
  } else if (count === 0) {
    value.style.color = "hsl(209, 61%, 16%)";
  }
});
