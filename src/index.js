import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import DateCalculator from "./js/date.js";

function handleFormSubmission(e) {
  e.preventDefault();
  const dateString = document.querySelector("#dateID").value;
  const dateCalculator = new DateCalculator(dateString);
  const dayOfWeek = dateCalculator.getDayOfWeek(dateString);
  document.querySelector(".outcome").innerHTML = dayOfWeek;
  console.log(dayOfWeek);
}

window.addEventListener("load", () => {
  document
    .querySelector("form")
    .addEventListener("submit", handleFormSubmission);
});
