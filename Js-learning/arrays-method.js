                                    //Arrays Method in Javascript


// A callback is a function passed into another function to be executed later.
call(consoleMe, 3, 5);

function call(callback, x, y) {
    let result = x + y;
    callback(result);
}

function consoleMe(result) {
    console.log(result);
}

// forEach() Method
// forEach() runs a function on every item in an array.
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(displayNumber);

function displayNumber(element) {
    console.log(element);
}

// forEach() to Convert to Lowercase
let fruitsUpper = ["APPLE", "MANGOE", "BANANA"];

fruitsUpper.forEach(toLowerCase);

function toLowerCase(element, index, array) {
    array[index] = element.toLowerCase();
    console.log(array[index]);
}

// map() Method
// map() creates a new array by transforming each item.
const dates = ["2024-1-10", "2025-3-20", "2026-2-14"];

const formattedDates = dates.map(formatDate);
console.log(formattedDates);

function formatDate(element) {
    const part = element.split("-");
    return `${part[1]}/${part[2]}/${part[0]}`;
}

// filter() Method
// filter() creates a new array with items that pass a condition.
const ages = [16, 17, 18, 35, 25, 70];

const children = ages.filter(isChild);
console.log(children);

function isChild(element) {
    return element < 18;
}

// filter() to Get Short Fruit Names
const fruits = ["babana", "corn", "apple", "pomegranate", "coconut"];

const shortFruits = fruits.filter(shortWords);
console.log(shortFruits);

function shortWords(element) {
    return element.length < 6;
}

// reduce() Method
// reduce() combines all items into a single value.
const scores = [20, 68, 45, 70, 90, 87];

const total = scores.reduce(sum);

function sum(accumulate, element) {
    return accumulate + element;
}

// reduce() to Find Maximum Value
const highestScore = scores.reduce(maximum);
console.log(highestScore);

function maximum(accumulate, element) {
    return Math.max(accumulate, element);
}