//get user input
//const tipForm = document.querySelector("#tip-form");
/* const billAmount = Number(document.querySelector("#bill-amount").value);
const tipPercentage = Number(document.querySelector("#tip-amount").value); */
//console.log(billAmount.value);
// ITS THE ID FOOL
//This didn't quite work, why?
// tipForm.addEventListener("submit", function () {
//   const tipAmount = Math.round(tipPercentage * billAmount);
//   console.log(tipAmount);
// });

const tipForm = document.querySelector("#tip-form");
///init function and default
tipForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const billAmount = Number(document.querySelector("#bill-amount").value);
  const tipPercentage = Number(document.querySelector("#tip-amount").value);
  const tipAmount = (tipPercentage / 100) * billAmount;
  //console.log(tipAmount);
  //lets clear the fields
  const finalTipSelector = document.getElementById("final-tip");
  finalTipSelector.innerHTML = `${tipAmount}`;
  finalTipSelector.style.display = "block";
  document.querySelector("#bill-amount").value = "";
  document.querySelector("#tip-amount").value = "";
});
