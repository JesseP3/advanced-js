// Fundamental data types

/*
boolean 
string
integer
float
*/


// Typeof
alert(typeof true)

// Let vs Const vs Var
var x = 10;

let age = 15;
age = 20;

const name = "John";

// Reassignment (no let)
age = 30;
age = 40; 
age = 50;

//alert(age);

// Essential Operations

let sum = age + 2; ///42
console.log(sum);
sum = sum -5;
console.log(sum);
sum = sum / 2;
console.log(sum);
sum = sum + 10;
sum += 10;
console.log(sum);
sum -= 4;
console.log(sum);
sum *= 5;
console.log(sum);

// User Input

let friend = prompt("who is your best friend?")


// Concatenation v. templates
//Method 1
console.log("You best friend is " + friend)

//Method 2
console.log("Your best friend is ",friend);

//Method 3
console.log(`Your best friend is ${friend}`);


// Additional operations
//equal to
console.log(34 == 72)
//less than
console.log(34 < 72)
//great than
console.log(34 > 72);
//less than or equal to
console.log(34 <= 72);
//greater than or equal to
console.log(34 >= 72);
//not equal to
console.log(34 != 72);

console.log( "becky g" == "becky g")

// String methods (uppercase, lowercase, includes)
const name1 = "jesse"
console.log(name1.toUpperCase())
//toLowerCase and other string methods
const tax = "fanum tax"
console.log(tax.includes("fan"))

//Math Method
console.log(Math.random() * 100);

console.log(Math.floor(9.3));
//Math methods - https://www.w3schools.com/js/js_math.asp

// Comparison operators - true or false?


// Conditional statements;



// Functions

// Returns half the number if it can be halved; otherwise returns false


// Functions can also be written as arrows. Body of function doesn't change, just the signature.

