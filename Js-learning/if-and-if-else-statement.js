//let userName = "mujeeb raji";
//userName = userName.slice(0, 3);
//console.log(userName);

/*let userName;

document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myText").value;
    document.getElementById("sentence").textContent = `Hello ${userName}`
};*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age;
mySubmit.onclick = function() {
    age = myText.value;
    age  = Number(age);

    if(age >= 100) {
    result.textContent = `You are too old to enter this site`;
}
else if(age == 0) {
    result.textContent = `you cant enter this site, you were just born`;
}
else if(age >=18) {
    result.textContent = `You are old enough to enter this site`;
}
else if(age < 0) {
    result.textContent = `Your age can't be below 0`;
}
else {
    result.textContent = `You must be 18+ to enter this site`;
}
}
