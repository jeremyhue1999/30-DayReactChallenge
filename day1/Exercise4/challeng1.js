// const age = prompt("Enter your age: ");

// if (age > 18) {
//   console.log("you are old enough to drive ");
// } else {
//   console.log(`You are left with ${18 - age} years to drives`);
// }

// const myAge = 22;

// const yourAge = prompt("What is your age? ");

// if (myAge > yourAge) {
//   console.log(`I am ${myAge - yourAge} years older than you`);
// } else if (myAge < yourAge) {
//   console.log(`You are ${yourAge - myAge} years older than me`);
// } else if (myAge === parseInt(yourAge)) {
//   console.log(`We have the same age of ${myAge}`);
// }

// let a = 4;
// let b = 3;

// if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else if (a < b) {
//   console.log(`${a} is less than ${b}`);
// }

// const greater = a > b ? `${a} is greater than ${b} ` : `${a} is less than ${b}`;
// console.log(greater);

const oddOrEven = prompt("Enter a Number: ");

if (oddOrEven % 2 === 0) {
  console.log(`${oddOrEven} is an even number`);
} else {
  console.log(`${oddOrEven} is an odd number`);
}
