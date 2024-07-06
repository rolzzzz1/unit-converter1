/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.getElementById("input_num");
const convertBtn = document.getElementById("convert_btn");
const meterP = document.getElementById("meter_feet_p");
const literP = document.getElementById("liter_gallon_p");
const kilogramsP = document.getElementById("kilograms_pounds_p");

convertBtn.addEventListener("click", function () {
  const input = inputNum.value;

  meterP.textContent = `
    ${input} meters = ${(input * 3.281).toFixed(3)} feet | 
    ${input} feet = ${(input * 0.3048).toFixed(3)} meters
  `;
  literP.textContent = `
    ${input} liters = ${(input * 0.264).toFixed(3)} gallons | 
    ${input} gallons = ${(input * 3.785412).toFixed(3)} liters
  `;
  kilogramsP.textContent = `
    ${input} kilograms = ${(input * 2.204).toFixed(3)} pounds | 
    ${input} pounds = ${(input * 0.454).toFixed(3)} kilograms
  `;
});
