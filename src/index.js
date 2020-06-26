//get user input
const tipForm = document.querySelector("#tip-form");

/* const billAmount = Number(document.querySelector("#bill-amount").value);
const tipPercentage = Number(document.querySelector("#tip-amount").value); */
//console.log(billAmount.value);

//This didn't quite work, why?
// tipForm.addEventListener("submit", function () {
//   const tipAmount = Math.round(tipPercentage * billAmount);
//   console.log(tipAmount);
// });

///init function and default
tipForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const billAmount = Number(document.querySelector("#bill-amount").value);

  let tipPercentage;
  if (document.getElementById("bad").checked) {
    tipPercentage = 0.1;
  } else if (document.getElementById("good").checked) {
    tipPercentage = 0.15;
  } else {
    tipPercentage = 0.2;
  }
  const tipAmount = tipPercentage * billAmount;
  //console.log(tipAmount);
  //lets clear the fields
  const finalTipSelector = document.getElementById("final-tip");
  finalTipSelector.innerHTML = `Tip them ${tipAmount} Dollars`;
  finalTipSelector.style.display = "block";
  document.querySelector("#bill-amount").value = "";
  document.querySelector("#tip-amount").value = "";
});
