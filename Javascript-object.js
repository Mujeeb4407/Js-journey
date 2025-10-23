// 👤 Object Literal — a simple way to group related data and behavior into one object
const person1 = {
  firstName: 'Babatunde',
  lastName: 'ibrahim',
  age: 35,
  islicense: true,
  sayHi: () => console.log('Hi everyone nice to meet you')
};
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.islicense);
person1.sayHi();


// 👤 Object Literal — another example with a different method
const person2 = {
  firstName: 'jamiu',
  lastName: 'basit',
  age: 35,
  islicense: false,
  greet: () => console.log('Good evening everyone')
};
person2.greet();


// 👤 Object Literal with Regular Functions — uses `this` to refer to object properties
const person3 = {
  name: 'Sung jin woo',
  favFood: 'burger',
  sayHello: function() {
    console.log(`My name is ${this.name}, nice to meet you all`);
  },
  again: function() {
    console.log(`${this.name} like ${this.favFood}`);
  }
};
person3.sayHello();
person3.again();


// 🚗 Constructor Function — a blueprint for creating multiple similar objects
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function() {
    console.log(`you drive a ${this.make}`);
  };
}
const reviewCar = new Car('ford', 'mustang', 2024, 'black');
const newCar = new Car('honda', 'discussion continue', 2007, 'white');
console.log(reviewCar.make);
console.log(reviewCar.model);
console.log(reviewCar.year);
console.log(reviewCar.color);
console.log(newCar.make);
console.log(newCar.model);
console.log(newCar.year);
console.log(newCar.color);
newCar.drive();


// 🛍️ Class — modern syntax for creating object templates with methods
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`product: ${this.name}`);
    console.log(`price: ${this.price}`);
  }
}
const product1 = new Product('shirt', 19.10);
const product2 = new Product('trouser', 22.50);
product1.displayProduct();
product2.displayProduct();


// 👤 Class with Static Property — tracks shared data across all instances
class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  static getUserCount() {
    return User.count;
  }
}
const user1 = new User('Abdul');
const user2 = new User('Mujeeb');
user1.greet();
user2.greet();
console.log(User.getUserCount());


// 🐾 Inheritance — subclasses (Rabbit, Fish, Hawk) inherit behavior from Animal
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal {
  name = 'rabbit';
}
class Fish extends Animal {
  name = 'fish';
}
class Hawk extends Animal {
  name = 'hawk';
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.eat();


// 🐾 Inheritance with Constructor — subclasses extend Animal and add custom behavior
class MovingAnimal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`This ${this.name} can move at a speed of ${speed}mph`);
  }
}
class Rabbit2 extends MovingAnimal {
  constructor(name, age, runSpeeds) {
    super(name, age);
    this.runSpeeds = runSpeeds;
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeeds);
  }
}
class Fish2 extends MovingAnimal {
  constructor(name, age, swimSpeeds) {
    super(name, age);
    this.swimSpeeds = swimSpeeds;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeeds);
  }
}
class Hawk2 extends MovingAnimal {
  constructor(name, age, flySpeeds) {
    super(name, age);
    this.flySpeeds = flySpeeds;
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeeds);
  }
}
const rabbit2 = new Rabbit2('rabbit', 1, 20);
const fish2 = new Fish2('fish', 2, 30);
const hawk2 = new Hawk2('hawk', 2, 50);
fish2.swim();


// 🎨 Array Destructuring — extracts values from an array into variables
const color = ['green', 'red', 'blue', 'black', 'white'];
const [firstColor, secondColor, thirdColor, ...extraColor] = color;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// 🧑‍💼 Object Destructuring in Function — extracts properties from an object
function displayPerson({firstName, lastName, age, job="unemployed"}) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}
const personA = {
  firstName: 'jinwoo',
  lastName: 'sung',
  age: 20,
  job: 'hunter',
};
const personB = {
  firstName: 'ismail',
  lastName: 'Abdulahi',
  age: 22,
};
displayPerson(personA);
displayPerson(personB);


// 🧽 Nested Object — contains arrays and another object inside
const personC = {
  fullName: 'Spongebob squarepant',
  age: 30,
  hobbies: ['Cooking', 'karate', 'jellyfishing'],
  address: {
    city: 'Bikini Bottom',
    country: 'International water'
  }
};
console.log(personC.fullName);
console.log(personC.age);
console.log(personC.hobbies);
for(const property in personC.address) {
  console.log(personC.address[property]);
}


// 🔢 Array Sorting — sorts numbers and objects by custom rules
let number = [1, 10, 2, 4, 7, 6, 3, 9, 8, 5];
number.sort((a, b) => b - a);
console.log(number);

const people = [
  {name: 'spongebob squarepant', age: 30, gpa: 4.0},
  {name: 'patrick star', age: 37, gpa: 1.0},
  {name: 'squidward', age: 51, gpa: 3.0},
  {name: 'sandy', age: 26, gpa: 3.5}
];
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);


// 📅 Date Object — built-in JavaScript object for handling dates and times
const now = new Date(); // Current date and time
console.log(now);


console.log(now.getFullYear());    // Year
console.log(now.getMonth());       // Month (0–11)
console.log(now.getDate());        // Day of the month
console.log(now.getDay());         // Day of the week (0–6)
console.log(now.getHours());       // Hour
console.log(now.getMinutes());     // Minutes
console.log(now.getSeconds());     // Seconds

now.setFullYear(2025);             // Set year
now.setMonth(9);                   // Set month (October)
now.setDate(23);                   // Set day
console.log(now);

const birthday = new Date('2003-10-23');
const today = new Date();

if (today > birthday) {
  console.log("Today is after your birthday.");
}

// 🔁 Closure — functions that remember variables from their outer scope
function createCounter() {
  let count = 0;

  function increament() {
    count++;
    console.log(`Count is ${count}`);
  }

  function getCount() {
    return count;
  }

  return {increament, getCount};
}
const counter = createCounter();
counter.increament();
counter.increament();


// 🎮 Closure with Parameters — tracks score privately using closure
function createScore() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return {increaseScore, decreaseScore, getScore};
}
const game = createScore();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}`);