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
