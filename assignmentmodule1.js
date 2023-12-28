/* 1. String  :- “I am happy to join PW Skills FSWD Course”
2. Number :- 
    i) Integer :- 9, 12
    ii) Floating :- 10.2  
   iii) Infinity :- number. Positive_infinity, number. Negetive_infinity 
   iv) not a number :- NaN
        3. Big int :- 1024n 
        4. Boolean :- true, false
        5. Undefined :- undefined
        6. Null :- null
        7. Symbol :- Symbol(‘pw skills ‘)
        8. Object :- 
           i) Array :- [1, 4, 6]
          ii) Objects :- [name : “PW Skills”, course: “FSWD” ]
*/
// Array

let Array = [ "Iphone", "Mackbook pro", "Flower pot", "Water bottle", "mac studio mini", "Watch", "Tennish ball", "mouse pad", "keyboard", "lens"];
console.log(Array);

// object

let student = {
    1: "Mithun", 2: "Alka", 3: "Anurag", 4: "Prabir", 5: "Shivam",
};
console.log(student);

// 1. String :- 

let var1 = " I am happy to join PW Skills FSWD Course";
console.log("var:- ",var1);

// 2. Number:- 

// i) integer :- 

let var2 = 9;
console.log("var2:- ", var2);

// ii) floting :- 

let var3 = 10.2;
console.log("var3:- ",var3);

// iii) infinity :- 

let var4 = Number.POSTITIVE_INFINITY;
console.log(" typeof var4:- ",typeof var4);

//  iv) Not a number :- 
let var5 = NaN;
console.log('var5:- ', var5);

// 3. Bigint :- 

let var6 = 1024;
console.log("type of var6:- ", typeof var6);

//  4. Boolean:- 

let var7 = true ;
console.log("tyoe of var7:- ", typeof var7);

// Undefined :- 

let var8 = undefined;
console.log("type of var8", typeof var8);

// Nul:- 

let var9 = null;
console.log("type of var9", typeof var9);

//  Symmbol:- 

let var10 = Symbol("Pw Skills");
console.log("type of var10", typeof var10);

// Objects :-
// i) Array:- 

let var11 = [1, 2, "PW"];
console.log("type of var11", typeof var11);

// ii) object

let var12 = { name: "PW  Skills", course: "FSWD" };
console.log("type of var12", typeof var12);


//valid variable

// let name = "PW Skills";
// console.log(name); //output: pw skills
// let iamhappy =true;
// console.log(iamhappy);

// invalid variables

// let 1name = "pwskills";
// console.log(1name); //OUTPUT: SyntaxError: invalid unexpected token
// let var = 13;
// console.log(var); //OUTPUT: SyntaxerError: Unexpected token 'var'


// let number = 6;
// console.log(`${number}* 1 = ${number * 1}`);
// console.log(`${number}* 2 = ${number * 2}`);
// console.log(`${number}* 3 = ${number * 3}`);
// console.log(`${number}* 4 = ${number * 4}`);
// console.log(`${number}* 5 = ${number * 5}`);
// console.log(`${number}* 6 = ${number * 6}`);
// console.log(`${number}* 7 = ${number * 7}`);
// console.log(`${number}* 8 = ${number * 8}`);
// console.log(`${number}* 9 = ${number * 9}`);
// console.log(`${number}* 10 = ${number * 10}`);

// // let num1 = 10;
// // let num2 = 8;

// // Addition (+): Adds two values together.
// console.log(`The addition of num1 and num2 is ${num1 
// + num2}`);

// // Subtraction (-): Substract one value from another.
// console.log(`The subtraction of num1 and num2 is ${num1 - num2}`);

// // Multiplication (*): Multiplies two values together.
// console.log(`The multiplies of num1 and num2 is ${num1 * num2}`);

// // Division (/): Divides one value by another.
// console.log(`The division of num1 and num2 is ${num1 / num2}`);

// // Modulus (%): Returns the reminder of a divsion operation.
// console.log(`The result of moulo operation of num1 and num2 is ${num1 %  num2}`);

// // Exponetiation (**): raise to the power of.
// console.log(`The exponential of num1 and num2 is 
// ${num1 ** num2}`);

// Output
/* 
The addition of num1 and num2 is 18
The subtraction of num1 and num2 is 2
The multiplies of num1 and num2 is 80
The division of num1 and num2 is 1.25
The result of moulo operation of num1 and num2 is 2
The exponential of num1 and num2 is
100000000
*/

let length = 10;
let width = 20;

let perameterofrectangle = 2 * (length * width);

console.log(`The perameter of the rectangle with length: ${length} and width: ${width} is ${perameterofrectangle}`);

// OUTPUT:

// The perameter of the rectangle with length: 10 and width: 20 is 400

// Equal:

// let num1 = 12;
// let num2 = 12;

// console.log( num1 == num2); //True

let num3 = 12;
let num4 = 10;

console.log(num3 == num4);  //False

// Not Equal:
let num11 = 12;
let num12 =  12;

console.log(num11 != num12); //False

let num13 = 12;
let num14 = 10;

console.log(num13 != num14);  //True

// Strictly Equal:

let num21 = 12;
let num22 = 12;
console.log(num21 === num22); //True

let num23 = 12;
let num24 = "12";

console.log(num23 === num24);    //False

//Strictly Not Equal:

let num31 = 12;
let num32 = 12;
console.log(num31 !== num32);   //False

let num33 = 12;
let num34 = "12";
console.log(num33 !== num34);    //True

// Greater than:
let num41 = 13;
let num42 = 12;
console.log(num41 > num42);      //True

let num43 = 10;
let num44 = 12;
console.log(num43 > num44);     //False


// Greter than or equal to:
let num51 = 13;
let num52 = 12;
console.log(num51 >= num52);    // True

let num53 =  10;
let num54 = 12;
console.log(num53 >= num54);     //False

// Lesser than:

let num61 = 12;
let num62 = 10;
console.log(num61 < num62);     //False

let num63 = 12;
let num64 = 10;
console.log(num63 < num64);    //False

// Lesser than or equal to 

let num73 = 12;
let num74 = 10;
console.log(num73 <= num74);    //False

// Traffic signal 
let trafficlight = "orange";
if( trafficlight == "red"){
    console.log("Vehicles must stop");
} 
else if(trafficlight == "orange"){
    console.log("vehicles must wait. The signal is changing to red or green.");
}
else if(trafficlight == "green"){
    console.log("Vehicles may proceed with caution.");
}
else{
    console.log("invalid traffic ligh");
}

// largest number
let num1 = 20;
let num2 = 15;
if(num1 > num2){
    console.log("num is greter than num2");
}
else{
    console.log("num2 is greater than num1");
}

let num = 5;
if (num % 5 == 0 && num % 3 == 0){
    console.log("FizzBuzz");
}
else if( num % 3 == 0){
    console.log("Fizz");
}
else if(num % 5 == 0){
  console.log("Buzz");
}
else{
    console.log("Invalid input");
}

const day = "Tuesday";
let daysuntilweekend;
switch (day){
    case 'Monday':
        console.log(`There are 5 day(s) until the weekend.`);
        break;
    case 'Tuesday':
        console.log(`Today are 4 day(s) until the weekend.`);
        break
    case 'Wednesday':
    console.log(`There are 3 day(s) until the weekend`);
    break;
    case 'Thursday':
        console.log(`There are 2 day(s) until the weekend`);
        break;
    case 'Friday':
        console.log(`There are 1 day(s) until the weekend.`);
    case 'Saturday':
    case 'Sunday':
        console.log(`There are 0 day(s) until the weekend`);
        break;
    default:
        daysuntilweekend = "Invalid day";
        break;
}


const monthnumber = 1;
switch (monthnumber){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}

let number = 0;
number == 0
? console.log("The number is Zero")
: console.log("The number is greter than zero")
? console.log("The number is lesser than zero")
: console.log("The number is lesser than zero");


let num_1 = 10;
let num_2 = 10;
num_1 == num_2
? console.log("Both the numbers are equal")
: num_1 > num_2
? console.log(`The larger number among the two numbers is ${num_1}.`)
: console.log(`The larger numbers among the two numbers is ${num2}.`);


// let _number = 5 ;
// for (let i = 1; i <= 10; i++){
//    console.log(`${_number} * ${i} = ${_number * i}`);
// }
// OUTPUT:
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

let _number = 10;
for( let i = 1; i <= _number; i++ ){
    if(i % 2 ==0 ){
        console.log(i);
    }
}
// OUTPUT:
/* 
2
4
6
8
10
*/

