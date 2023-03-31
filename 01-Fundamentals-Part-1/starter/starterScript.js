// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall

const markMass = 78;
const jhonMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
let bmiMark, bmiJhon;
const markHigherBMI = bmiMark > bmiJhon;
bmiMark = markMass / markHeight ** 2;
bmiJhon = jhonMass / johnHeight ** 2;
console.log("Mark BMI", bmiMark);
console.log("jhon BMI", bmiJhon);
console.log("markHigherBMI", markHigherBMI);

// 17 lecture String

const firstName = "Akshay";
const birthYear = 1996;
const job = "Web Developer";
const info =
  "I'm " + firstName + ",a " + (2023 - birthYear) + " years old " + job;
console.log(info);
// ES6 invent templet litral for avoiding multiple string use
const newInfo = `Hi I'm ${firstName} a ${2023 - birthYear} years old ${job}`;
console.log(newInfo);

// 18 lecture Taking Decision making if else statment emoji formula (windows + .)

const age = 17;
const firstNamee = "Riddhi";
const oldEnough = age >= 18;
console.log(`She is ${firstNamee}  ${age} old`);
if (oldEnough) {
  console.log(`${firstNamee} can drive a car😊🚗 `);
} else {
  console.log(`${firstNamee} is under age to drive a car `);
}
console.log(`${firstNamee} has left ${18 - age} years to drive a car`);

const birthYears = 2001;
let century;
if (birthYears >= 2000) {
  century = 21;
  console.log(`${firstNamee} is ${century}st century girl `);
} else {
  century = 20;
  console.log(`${firstNamee} is ${century}th century girl`);
}

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement
if (bmiMark > bmiJhon) {
  console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJhon}!`);
} else {
  console.log(`Jhon's BMI ${bmiJhon} is higher than Mark's BMI ${bmiMark}!`);
}

// 20 lecture type Conversion and Coercion
//type Conversion
const inputYear = "1992";
console.log(inputYear + 19);
console.log(Number(inputYear) + 19); //type conversion we can manually convert this we used number function
//type Coercion
console.log("I am Akshay " + 28 + " years old"); // It + convert all the value into string
console.log("23" - "10" - 3); // not all the operator convert to string ans= 10
console.log("23" + "10" + 3); // ans= 23103
console.log("23" * "2"); // ans=46
let n = "1" + 1; // '11' string
n = n - 1; // '11' - 1 here it convert into number
console.log(n); // 10

// 21 lecture Truthy and Falsy Values
// 5 falsy value 0 , undefined, NaN, '', null
console.log(Boolean(0)); //ans=false
console.log(Boolean(undefined)); //ans=false
console.log(Boolean("")); //ans=false
console.log(Boolean("hello")); //ans=true
console.log(Boolean({})); //ans=true

const money = 0;
if (money) {
  console.log("Do not spend all money");
} else {
  console.log("You should get a job");
}

let height1;
if (height1) {
  console.log("yey height is defined");
} else {
  console.log("Height is unddefined"); // thsi is the ans
}

// Lecture 22. Equality Operators: == vs. ===
const num = prompt("What is your fev number");
console.log(num);
console.log(typeof num);
if (num == 22) {
  // this is type coercion
  console.log("you enter right number");
} else {
  console.log("Please type 22 number");
}

const num1 = Number(prompt("Enter the number"));
console.log(num1);
console.log(`this is ${typeof num1} type of variable`);
if (num1 === 23) {
  console.log(" Right number you enter ");
} else if (num1 === 7) {
  console.log(" 7 is also a good number");
} else if (num1 === 44) {
  console.log(" 44 is also a good number");
} else {
  console.log("try 23, 7 or 44 number");
}

if (num1 !== 23) console.log("Why not 23");

// Lecture 23. Boolean Logic

// Lecture 24. Logical Operators
const hasDrivingLicense = true;
const hasGoodVision = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

if (hasDrivingLicense && hasGoodVision) {
  console.log("serha is drive");
} else {
  console.log("some one else shoud drive..."); // ans is this
}

const tierd = true;
if (hasDrivingLicense && !hasGoodVision && tierd) {
  console.log("serha is able to drive");
} else {
  console.log("some one else shoud drive..."); // ans is this
}

//25. Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times.
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for 
that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. HINT: Use a logical operator to 
test for minimum score, as well as multiple else-if blocks 😉

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both 
teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// First Test data
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

console.log(`Average score of Dolphins ${averageDolphins} 
              Average score of Koalas ${averageKoalas}`);
if (averageDolphins > averageKoalas) {
  console.log("Dolphin win the match");
} else if (averageDolphins < averageKoalas) {
  console.log("Koalas win the match");
} else if (averageDolphins === averageKoalas) {
  console.log("Match  draw");
}

// Second Test data
console.log(`**** This is Second Test data ****`);
const averageDolphins1 = (97 + 112 + 101) / 3;
const averageKoalas1 = (109 + 95 + 123) / 3;

console.log(`Average score of Dolphins ${averageDolphins1} 
              Average score of Koalas ${averageKoalas1}`);
if (averageDolphins1 > averageKoalas1) {
  console.log("Dolphin win the match");
} else if (averageDolphins1 < averageKoalas1) {
  console.log("Koalas win the match");
} else if (averageDolphins1 === averageKoalas1) {
  console.log("Match  draw");
}

// Third Test data
console.log(`**** This is Third Test data ****`);
const averageDolphins2 = (97 + 112 + 101) / 3;
const averageKoalas2 = (109 + 95 + 106) / 3;

console.log(`Average score of Dolphins ${averageDolphins2} 
              Average score of Koalas ${averageKoalas2}`);
if (averageDolphins2 > averageKoalas2) {
  console.log("Dolphin win the match");
} else if (averageDolphins2 < averageKoalas2) {
  console.log("Koalas win the match");
} else if (averageDolphins2 === averageKoalas2) {
  console.log("Match  draw");
}

// Lecture 26. The switch Statement
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

// Lecture 27. Statements and Expressions
// Expression: Expression is a piece of code that produce value

// Ex:  3 +4 is an expression that produces a value and even 1992 is an expression 
//even though it is just a simple value or even ( true && false && !false ) all of
// this is an expression because, in the end, it produces a boolean value.

// Statements :  statement is a bigger piece of code that is executed and which does
// not produce a value on it self and we can compare it with normal spoken language.


//28. The Conditional (Ternary) Operator
//The concept of an operator like (ternary etc) and expression will produce value.
//The ternary operator is used to take quick decision
const myAge = 29;
myAge >= 18 ? console.log('I like to drink wine 🍷') 
: console.log('I like to drink water 🚰');
//Remember operator always produce value in another word operator is an expression it 
// means if we have a value we can asign that value to a variable so with this
// we can make Ternary operator really usefull to conditionally declare variables
// for example
const result = myAge >= 24 ? 'wine 🍷' : 'water 🚰';
console.log(result);


//29. Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable 
called 'tip' for this. It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement, and then try to 
convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final 
value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 
316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
const bill = 275;
const tip = bill >= 300 && bill <= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, 
and the total value ${bill + tip}`);

//30. JavaScript Releases: ES5, ES6+ and ESNext

//31. Section Intro