// .checked = is a boolean property in JavaScript.
// It tells you: Is this checkbox or radio button selected?
// It returns: true → selected, false → not selected

const checkBoxBtn = document.getElementById("checkBoxBtn");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

submitBtn.onclick = function () {
  if (checkBoxBtn.checked) {
    subResult.textContent = `You're subscribed!`;
  } else {
    subResult.textContent = `You're not subscribed!`;
  }

  if (visaBtn.checked) {
    payResult.textContent = `You're paying with Visa`;
  } else if (masterCardBtn.checked) {
    payResult.textContent = `You're paying with Master Card`;
  } else if (payPalBtn.checked) {
    payResult.textContent = `You're paying with PayPal`;
  } else {
    payResult.textContent = `You must select a payment type`;
  }
};
