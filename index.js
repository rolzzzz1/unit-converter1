/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.getElementById("input_num");
const msg = document.getElementById("msg");
const convertBtn = document.getElementById("convert_btn");
const meterP = document.getElementById("meter_feet_p");
const literP = document.getElementById("liter_gallon_p");
const kilogramsP = document.getElementById("kilograms_pounds_p");

convertBtn.addEventListener("click", function () {
  const input = inputNum.value;

  checkInput(input);

  meterP.textContent = `
    ${input} meters = ${(input * 3.28084).toFixed(3)} feet | 
    ${input} feet = ${(input * 0.3048).toFixed(3)} meters
  `;
  literP.textContent = `
    ${input} liters = ${(input * 0.264172).toFixed(3)} gallons | 
    ${input} gallons = ${(input * 3.78541).toFixed(3)} liters
  `;
  kilogramsP.textContent = `
    ${input} kilograms = ${(input * 2.20462).toFixed(3)} pounds | 
    ${input} pounds = ${(input * 0.453592).toFixed(3)} kilograms
  `;

  inputNum.value = "";
});

function checkInput(input) {
  if (input === "") {
    if (msg.classList.contains("hiddenMsg")) {
      msg.classList.remove("hiddenMsg");
    }

    msg.textContent = "Please enter a value";
  } else {
    msg.textContent = "";

    if (!msg.classList.contains("hiddenMsg")) {
      msg.classList.add("hiddenMsg");
    }
  }
}
