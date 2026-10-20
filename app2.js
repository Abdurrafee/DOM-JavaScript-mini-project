let Btn = document.getElementById("Btn");

Btn.addEventListener("click", generateNumber);

function generateNumber() {
  let number = Math.floor(Math.random() * 100) + 1;

  let result = document.getElementById("result");
  let message = document.getElementById("message");

  result.innerHTML = "Random Number: " + number;

  if (number > 50) {
    message.innerHTML = "High Number";
  } else {
    message.innerHTML = "Low Number";
  }
}

let marks = document.getElementById("marks");
let checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", checkResult);

function checkResult() {
  let studentMarks = Number(marks.value);

  let studentResult = document.getElementById("studentResult");

  if (marks.value === "" || studentMarks < 0 || studentMarks > 100) {
    studentResult.innerHTML = "Enter valid marks!";
  } else if (studentMarks >= 80) {
    studentResult.innerHTML = "Excellent";
  } else if (studentMarks >= 60) {
    studentResult.innerHTML = "Good";
  } else if (studentMarks >= 40) {
    studentResult.innerHTML = "Pass";
  } else {
    studentResult.innerHTML = "Fail";
  }
}
