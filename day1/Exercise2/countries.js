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

const compare = "Ethiopia";

if (countries.includes(compare)) {
  console.log("ETHIOPIA");
} else if (!countries.includes(compare)) {
  countries.push(compare);
  console.log(countries);
}

console.log(countries.slice(0, 10));
console.log(countries[Math.round((countries.length - 1) / 2)]);

if (countries.length % 2 === 0) {
  console.log(countries.slice(0, countries.length / 2));
  console.log(countries.slice(countries.length / 2, countries.length));
} else {
  console.log(countries.slice(0, countries.length / 2 + 1));
  console.log(countries.slice(countries.length / 2 + 1, countries.length));
}
