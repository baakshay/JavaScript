'use strict';
//31. Section Intro

// Lecture 32. Activating Strict Mode

let hasDrivingsLicense = false;
const passTest = true;
if(passTest) hasDrivingsLicense = true;
if(hasDrivingsLicense) console.log('I can drive a car');
//const interface = 'Audio';


// Lecture 33. Functions

function logger() {
    console.log('My name is Akshay');
}
logger();
logger();
logger();                     // This is simple function

// This is function declaration
function fruitProcessor(apple, orange) {
    //console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,4);
console.log(appleJuice);

const appleOrange = fruitProcessor(10 , 15);
console.log(appleOrange)


//Lecture 34. Function Declarations vs. Expressions
function calcAge1(birthYear1) { // this is function declaration
    return 2023 - birthYear1;
}

const age1 = calcAge1(1992);
console.log(`Your age is ${age1}`);

// other kind of function is also exist i.e. Function Expression
const calcAge2 = function(birthYear1){ // this is function expression 
    return 2023 - birthYear1;
}
const age2 = calcAge2(1985);
console.log(`Your age is ${age2}`);
console.log(age1,age2);


//Lecture 35. Arrow Functions
// birthYear2 is parameter pass in function 
// => this is arrow function
// 2023 - birthYear2 is return value or statment (we wont use return keyword here)
//storeVariable is used to store the function. like in function expression
// finalCallValue varible is used for call the function and their argument  
const storeVariable = birthYear2 => {
    return 2023 - birthYear2;
}
const finalCallValue = storeVariable(1992);
console.log(`Your age is ${finalCallValue}`);


 const juices = oranges => `juice of ${oranges} oranges`; // this is for single parameter
 const fruit = juices(10);
 console.log(fruit); 


const demo = (firstName1, LastName, birthYear3) => { // for multiple parameter 
    console.log(firstName1,LastName,birthYear3);
    let date = new Date();  // latest date
    let latestYear = date.getFullYear();  //operator precsident goes left to right (. is operator presciedent)
    let DOB = latestYear - birthYear3;
    const data = `My name is ${firstName1} and my last name is ${LastName} and I am
    ${DOB} old`;
    return data;
    //console.log("data---",data); // we can call like this also but we have to remove
    //last console i.e. console.log(callDemo);
}
const callDemo = demo('Akshay', 'Bahadurkar', 2001);
console.log(callDemo);  // we can call like this also

// add name retirement and age
const workingYears = (birthYear4, fName, lName) =>{
    const ageNew = 2023 - birthYear4;
    const retire = 65 - ageNew;
    return `Hi my name is ${fName}  ${lName}. I am ${ageNew} years old and 
    for my retirement ${retire} years left.😀`;
} 
console.log(workingYears(1992,'Akshay','Bahadurkar'));
console.log(workingYears(2001,'Riddhi','Papalkar'));

// differne of let 
// let a=10;//globa
// function dinesh(){
// let a=20;//local
//     console.log("a1",a);
// }
//  console.log("a2",a);

// dinesh();

//let a = 10;---correct
// console.log("dinesh",a);
// let a = 10;  wrong a is before initilization


//Lecture 36. Functions Calling Other Functions
const fruitPices = function (fruit1){
    return fruit1 * 4;
}
// const fruitPices = fruit1 => fruit1 * 4;   // we can right like this also by arrow fun
 
const fruitProcessor1 = function(apple1, orange1){
    const applePice = fruitPices(apple1);
    const orangePiece = fruitPices(orange1);

    const juice1 = `Juice with ${applePice} picess of apple and ${orangePiece} picess of orange`;
    return juice1;
};
console.log(fruitProcessor1(10,20));


// Lecture 37. Reviewing Functions

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.Each team competes 3 times, and then 
the average of the 3 scores is calculated (so one average score per team).A team ONLY 
wins if it has at least DOUBLE the average score of the other team. Otherwise, no team 
wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as 
parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: "Koalas win 
(30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// const calcAverage = (a,b,c) =>{
//     return (a+b+c)/3;
// }

// let kolasScore = calcAverage(23,34,27);
// let dolphinScore = calcAverage(850,540,410);    
// console.log(`Kolas total ${kolasScore} and Dolphin total ${dolphinScore}`);

// const checkWinner = function(avgDolhins, avgKoalas){
//       if(avgDolhins >= 2 * avgKoalas){
//         console.log(` Dolphin wins ${dolphinScore} vs  ${kolasScore} `);
//     }
//     else if(avgKoalas >= 2 * avgDolhins){
//         console.log(` kolas wins ${kolasScore} vs ${dolphinScore}`);
//     }
//     else{
//         console.log('No team win');
//     }
   
    
// }
// checkWinner(dolphinScore,kolasScore);

/////////////////////////////////////////////////
const calcAverage = (a,b,c) =>{
    return (a+b+c)/3;
}

const checkWinner = function(avgDolhins, avgKoalas){
    
let kolasScore = calcAverage(850,540,410);
let dolphinScore = calcAverage(23,34,27);    
console.log(`Kolas total ${kolasScore} and Dolphin total ${dolphinScore}`);
avgDolhins=dolphinScore;
avgKoalas=kolasScore;


    if(avgDolhins >= 2 * avgKoalas){
        console.log(` Dolphin wins ${dolphinScore} vs  ${kolasScore} `);
    }
    else if(avgKoalas >= 2 * avgDolhins){
        console.log(` kolas wins ${kolasScore} vs ${dolphinScore}`);
    }
    else{
        console.log('No team win');
    }
      return(dolphinScore,kolasScore);
    
}
checkWinner();


// lecture 39. Introduction to Arrays
//Array is data structure in javascript

const friend1 = 'Akshay';
const friend2 = 'Ravi';
const friend3 = 'Dinesh';   // without array we have to write string like this 

const friends = ['Akshay', 'Ravi', 'Dinesh'];  // We can write array like this
console.log(friends);  // get whole array like this

const year = new Array(1992, 1993, 1994, 1995); // We can write array like this also
console.log(year);

console.log(friends[0]); // get single array like this. To retrive an elenment from the array we use []
console.log(friends[2]);
console.log(friends.length); // check length of array like this
console.log(friends[friends.length - 1]); //to get index of the last element from the 
//array. So we can add expression also in array and you konw expression produce value. and Js cannot produce statment
// friends.lenght is not zero based it strat from 1 and array is zero based index.

friends[1] = 'Navin'; // replace new element to the array
console.log(friends);

//friends[2] = ['Navin', 'akshay']; // We can not do this way

// const value doesent change. only premetive value are emutable. array is not a primitive value

const firstName = 'Ravi';
const nameNew = ['Pawan', firstName, 'Rajshekhar', 2037-2021, friends]; // we can add multiple data, variable, 
//string at a time so no need to create new varible for it  
console.log(nameNew);

///////////////////////Exercise/////////////////////
const calAged = function(birthYears){
    return 2023 - birthYears;
}

const yer = [1990, 1980, 2001, 2010, 2018];
//console.log(calAged(yer)); output NaN wrong way 
const aged1 = calAged(yer[0]);
const aged2 = calAged(yer[1]);
const aged3 = calAged(yer[yer.length - 1]);
console.log(aged1,aged2,aged3); // this is the way

const ages = [calAged(yer[0]), calAged(yer[1]), calAged(yer[yer.length - 1])];
console.log(`final value ${ages}`);
/////////////////////////////////////////////////////

// Lecture 40. Basic Array Operations (Methods)

const friends1 = ['Akshay', 'Ravi', 'Dinesh']; 
console.log(friends1);
friends1.push('Raghuram');  //push method add new element at the end of the array by
                            // using .push() we can call
console.log(friends1);
//console.log(friends.length); // this is wrong way

//Add Elements
const newLength = friends1.push('Raghuram');
console.log(friends1);
console.log('New lenght is '+newLength); //this is right way to find the lenght
friends1.unshift('Pawan'); //This add new element to the begning of the array
console.log("new array adding pawan " +friends1);

//Remove Elements
friends1.pop(); //Remove last element of the array
console.log(friends1)
friends1.shift();//Remove an Element from the front of an Array
console.log("new element delete "+friends1);


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% 
of the bill if the bill value is between 50 and 300, and if the value is different, 
the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the 
corresponding tip, calculated based on the rules above (you can check out the code 
    from first tip calculator challenge if you need to). Use the function type you 
    like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data 
below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the 
function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as 
array values (so don't store the tip values in separate variables first, but right 
in the new array) 😉

GOOD LUCK 😀
*/
const calcTip1 = function(tip){
    if(tip >= 50 && tip <= 300){
        console.log(` if bill is  ${tip} and tip is ${tip * 0.15} `);
        return `${(tip * 0.15)+tip} `
    }
    else{
        console.log(` else bill is  ${tip} and tip is ${tip * 0.2} `);
        return `${(tip * 0.2)+tip} `

    }
}
const bills1 = [125, 555, 44];
const tip1 = calcTip1(bills1[0]);
const tip2 = calcTip1(bills1[1]);
const tip3 = calcTip1(bills1[bills1.length - 1]);
console.log(tip1,tip2,tip3);



// const numbers = [4, 9, 16, 25];
// numbers.map(element=>{                           //just like a for loop
//     console.log(element);
// })

// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }


// Lecture 42. Introduction to Objects
//Objects is data structure in javascript

//We used array as a data structure to basically store multiple related value in 
//the same variable

//just for recap write an array
const akshayArray = [ //(This is basically adata structure store multiple value which all belongs to Akshay entity)
    'Akshay',         //   
    'Bahadurkar',
    2023 - 1996,
    'Devloper',
    ['Ravi', 'Dinesh', 'Pawan', 'Navin Bhaiya', 'NAgaraju Bhaiya']
];
console.log(akshayArray);
//The big difference betn object and array object of the value us that in object the 
//order of the value does not matter at all when we want to retrive them thats 
//important to keep in mind. So in array in order which we specify the element matters
//a lot becasuse thats how we access these element. we can only access the array 
//element using their order number it means we should used array for more order data
//an object for on more unstructure data and data that we actually want to name and then
//retrive from the object based on that name.
const akshay = {
    fName:'Akshay',
    lName:'Bahadurkar',
    age:2023-1995,
    designition:'Developer',
    frds:['Ravi', 'Dinesh', 'Pavan', 'Navin Bhaiya', 'Nagaraju Bhaiya']
    
};
console.log(akshay);


//Lecture 43. Dot vs. Bracket Notation
//How to retrive data from the object and how to change data of the object
// 1st property is .dot notation by using this we can geting the property from 
//.dot notaion or retrive the elment from object

const akshay1 = {
    fName:'Akshay',
    lName:'Bahadurkar',
    age:2023-1995,
    designition:'Developer',
    frds:['Ravi', 'Dinesh', 'Pavan', 'Navin Bhaiya', 'Nagaraju Bhaiya']
    
};
console.log(akshay1);
console.log(akshay1.lName); // dot notation 
//we can do this by []bracket notation also
console.log(akshay1['designition']); //we have to specify string with property name
//which is key. the big difference betn two is that in the bracekt notaion we can put 
//any expression that we like. So we dont explicitly write string.but insted we can 
//computed some operation because remember the operation is besically an expression 
//some thing taht producess a value so we can put inside of the bracket.

//////// NOTE : In dot notation we can use only normal property name not a computed 
//name but in bracket notation we can use normal and computed property name.///////
const nameKey = 'Name';
console.log(akshay1['f' + nameKey]);
console.log(akshay1['l' +nameKey]); // Like this we can computed prperty

//We dont know which property we want to show is that we get this information some 
//user interface. so we that use prompt function
//Lets see the exmaple prompt fun return string so we have to store that string in 
//a variable
const intrstedIn = prompt('What do you want to know about the akshay ? Choose between fName, lname, age, designition, frds');  
if(akshay1[intrstedIn]){
console.log(akshay1[intrstedIn]);
}
else{
    console.log('Wrong request ! Plz Choose between fName, lname, age, designition, frds'); 
}

akshay1.location = 'India';
akshay1['twitter'] = '@baakshay';
console.log(akshay1);

//Akshay has 5 friends, and his bestfriend is called Dinesh
console.log(`${akshay1.fName} has ${akshay1.frds.length} friends, and his bestfriend is called ${akshay1.frds[1]}`);


// Lecture 44. Object Methods start