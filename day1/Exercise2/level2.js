let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const usingSplit = text.split(" ");
console.log(usingSplit);
console.log(usingSplit.length);
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart[3] = "Green Tea";

console.log(shoppingCart);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

console.log(fullStack.length);
