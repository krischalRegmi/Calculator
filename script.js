function display(value) {
  document.getElementById("screen").value += value;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function calculate() {
  document.getElementById("screen").value = eval(document.getElementById("screen").value);
}
