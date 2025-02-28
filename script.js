const display=document.getElementById("display");

function appendToDisplay(a) {
    display.value += a;
}
function clearDisplay() {
  display.value = "";
}
function calculate(){
  display.value = eval(display.value);
}