/*
1 meter = 3.281 feet   (value * 3.281 )
1 liter = 0.264 gallon ( Gallons = 0.264172 × liters.)
1 kilogram = 2.204 pound
*/

const inputValue = document.getElementById("input-box");
let lengthCard = document.getElementById("length");
let convertBtn = document.getElementById("convert-btn");

inputValue.addEventListener("keydown", function (event) {
  // Check if it's a number or backspace key
  if (isNaN(event.key) && event.key !== "Backspace") {
    event.preventDefault(); // Prevent character from being entered
  }
});

convertBtn.addEventListener("click", () => {
  convertMeterToFeet();
  convertLiterToGallon();
  convertKgToPound();
});

function convertMeterToFeet() {
  //.value is a property in JavaScript that retrieves the current value of an input field in a form.
  /*const userInput = document.getElementById("userInput");
    const value = userInput.value;  
    */
  const feetToMeter = 0.3048;
  const meterToFeet = 3.281;
  let valueOfMeter = document.getElementById("Val1");
  let inputval = inputValue.value;
  valueOfMeter.innerHTML = `${inputval} meters = ${(
    inputValue.value * meterToFeet
  ).toFixed(2)} Feet | ${inputval} feet = ${(inputval * feetToMeter).toFixed(
    2
  )}  meters`;
}

function convertLiterToGallon() {
  const literToGallon = 0.264;
  const gallonToLiter = 3.785;
  let valueOfLiter = document.getElementById("Val2");
  let inputval = inputValue.value;
  valueOfLiter.innerHTML = `${inputval} liters = ${(
    inputval * literToGallon
  ).toFixed(2)} Gallons | ${inputval} gallons = ${(
    inputval * gallonToLiter
  ).toFixed(2)} liters`;
}

function convertKgToPound() {
  const kilogramToPound = 2.204;
  const poundToKg = 0.453;
  let valueOfKg = document.getElementById("Val3");
  let inputval = inputValue.value;
  valueOfKg.innerHTML = `${inputval} kilos = ${(
    inputval * kilogramToPound
  ).toFixed(2)} ${inputval} | ${inputval} pounds = ${(
    inputval * poundToKg
  ).toFixed(2)} kilos`;
}
