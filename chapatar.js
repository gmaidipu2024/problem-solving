
// // 2.Answer:

let name1 ="Bob";
let greeting  ="Hello";

function greet (name1="Hello Alice") {
console.log(name1);
};

greet(); //  This is output default value.
greet("Good morning, "+ name1); // Thi is output custom massage.


// // 3.Answer:

function sum(a, ...argu) {
  console.log(a, ...argu);
};

sum(5);
sum(1,2,3,4,5,6);
sum(10,20,30,40,50);


// // 4.Answer:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray =[...array1, ...array2, ...array3] // Using spread operator;

// The Result is;
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 5.Answer:

  const name2 = "John";
  const age2 = 30; 

let person = {
  name2,
  age2,

 greet() {

  return `Hi,I'm ${name2} and I'm ${age2} years old`;
  
}
};
console.log(person.greet());// "Hi, I'm John and I'm 30 years old."


// 5.Answer:
const fruits = ["apple", "banana", "cherry"];

for (let frutslist of fruits) {
  console.log(frutslist);
}


// // 7.Answer:

const name = "Alice";
const age = 25;



const message = `My name is ${(name) + `I am `+ (age) + ` years old `} `;
console.log(message); // "My name is Alice and I am 25 years old."

// 8.Answer:

const studentsList = [
  { name: "Dipu", grade: 90 },
  { name: "Shimul", grade: 85 },
  { name: "Rakib", grade: 92 }
];

// Your code here
for (let list of studentsList) {
  console.log(` Student Name is  ${list.name}, Great is ${list.grade}`);
}



// // 10.Answer:
const a = 5;
const b = 10;

//  Here is my code
const sum2 = `Using  literals template and sum of a and b is: ${a+ b}`;
console.log(sum2); // "The sum of 5 and 10 is 15, "