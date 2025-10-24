const myCheckedBox = document.getElementById('myCheckBox');
const masterCardBtn = document.getElementById('masterCardBtn');
const visaBtn = document.getElementById('visaBtn');
const paypalBtn = document.getElementById('paypalBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');
const mySubmit = document.getElementById('mySubmit');

mySubmit.onclick = function() {
    if (myCheckedBox.checked) {
        subResult.textContent = `You are subscribed!`;
    } 
    else {
        subResult.textContent = `You are not subscribed!`;
    }

    if (paypalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal!`;
    } 
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard!`;
    } 
    else if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa!`;
    } 
    else {
        paymentResult.textContent = `You did not select a payment method!`;
    }
}