const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const empt = [];
const five = [1, 2, 3, 4, 5];
const get = [five[0], five[2], five[4]];
const mixedDataTypes = [1, "hello", true, 4, false, "jeremy", 5];
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
const fb = ["Facebook"];
console.log(itCompanies.includes(fb[0]));
itCompanies.sort();
itCompanies.reverse();

console.log(empt.length);
console.log(five.length);
console.log(get);
console.log(itCompanies);
console.log(itCompanies.length);

const upper = itCompanies.map((e) => {
  console.log(e.toUpperCase());
});

console.log(`${itCompanies} are big IT companies`);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 8));
console.log(itCompanies.slice(3, 4));

console.log(itCompanies.shift());
console.log(itCompanies.splice(4, 1));
console.log(itCompanies.pop());

itCompanies = [];
console.log(itCompanies);
