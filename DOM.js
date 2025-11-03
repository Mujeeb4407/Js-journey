// ==========================================
//      SECTION 1: ELEMENT SELECTORS
// ==========================================

// Set the title of the webpage and change the background color of the body
document.title = 'website';
document.body.style.backgroundColor = 'aqua';

// Log the entire document object and its structure to the console
console.log(document);
console.dir(document);

// Add a personalized greeting to the <h1> element using the userName variable
let userName = 'Abdul Mujeeb';
let message = document.getElementById('myH1');
message.textContent += " " + (userName === "" ? 'guest' : userName);
console.log(message.textContent);

// Style the <h1> element with background, alignment, border, and spacing
const display = document.getElementById('myH1');
myH1.style.backgroundColor = 'yellow';
myH1.style.textAlign = 'center';
myH1.style.border = '1px solid';
myH1.style.width = '100%';
myH1.style.height = '100%';
myH1.style.padding = '30px';

// Select all elements with class "fruits" and style them with color and background
const fruits = document.getElementsByClassName('fruits');
Array.from(fruits).forEach(fruit => {
  fruit.style.color = 'blue';
  fruit.style.backgroundColor = 'grey';
});

// Select all elements with class "fruits" using querySelectorAll and change background color
const element = document.querySelectorAll(".fruits");
element.forEach(elements => {
  elements.style.backgroundColor = "yellow";
});

// Select all <h4> elements and style them with font size and background color
const h4Elements = document.getElementsByTagName("h4");
Array.from(h4Elements).forEach(h4Element => {
  h4Element.style.fontSize = "30px";
  h4Element.style.backgroundColor = "yellow";
});

// Select all <li> elements and style them with background color and remove bullet points
const liElements = document.getElementsByTagName("li");
Array.from(liElements).forEach(liElement => {
  liElement.style.backgroundColor = "lightgreen";
  liElement.style.listStyle = "none";
});

// Select all <ul> elements and style the first <li> child of each with yellow background
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

// Select all <ul> elements and style the last <li> child of each with yellow background
const ulItems = document.querySelectorAll("ul");
ulItems.forEach(ulItem => {
  const lastChild = ulItem.lastElementChild;
  lastChild.style.backgroundColor = "yellow";
});


// ==========================================
//       SECTION 2: DOM NAVIGATION
// ==========================================

// Select the <ul> with ID "firstFruits" and style its next sibling with yellow background
const elements = document.getElementById("firstFruits");
const nextSibling = elements.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// Select the <ul> with ID "firstFruits" and style its previous sibling with light green background
const elementsTwo = document.getElementById("firstFruits");
const previousSibling = elements.previousElementSibling;
previousSibling.style.backgroundColor = "lightgreen";

// Select the <ul> with ID "desserts" and style each of its children with blue background
const item = document.getElementById("desserts");
const children = desserts.children;
Array.from(children).forEach(child => {
  child.style.backgroundColor = "blue";
});