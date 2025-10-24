let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbours.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color today.";


function showFortune() {
  const selectFortune = parseInt(document.getElementById("fortuneSelect").value);
  const fortuneOutput = document.getElementById("fortuneOutput");
  let selectedFortune;

  if (selectFortune === 1) {
    selectedFortune = fortune1;
  } 
  else if (selectFortune === 2) {
    selectedFortune = fortune2;
  } 
  else if (selectFortune === 3) {
    selectedFortune = fortune3;
  } 
  else if (selectFortune === 4) {
    selectedFortune = fortune4;
  } 
  else if (selectFortune === 5) {
    selectedFortune = fortune5;
  } 
  else {
    fortuneOutput.textContent = "Please select a number between 1 and 5.";
    return;
  }

  fortuneOutput.textContent = selectedFortune;
}