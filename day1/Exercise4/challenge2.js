// const grade = prompt("Please enter your grade: ");
// const gradeInt = parseInt(grade);

// if (gradeInt >= 90 && gradeInt <= 100) {
//   console.log("Your grade is A ");
// } else if (gradeInt >= 70 && gradeInt <= 89) {
//   console.log("Your grade is B");
// } else if (gradeInt >= 60 && gradeInt <= 69) {
//   console.log("Your grade is C");
// } else if (gradeInt >= 50 && gradeInt <= 59) {
//   console.log("Your grade is D");
// } else if (gradeInt >= 0 && gradeInt <= 49) {
//   console.log("Your grade is F");
// } else {
//   console.log("Invalid Grade");
// }

// const month1 = prompt("Please enter month");
// const month = month1.toLowerCase();

// if (month === "september" || month === "october" || month === "november") {
//   console.log("Autumn");
// } else if (
//   month === "december" ||
//   month === "january" ||
//   month === "februray"
// ) {
//   console.log("Winter");
// } else if (month === "march" || month === "april" || month === "may") {
//   console.log("Spring");
// } else if (month === "june" || month === "july" || month === "august") {
//   console.log("Summer");
// } else {
//   console.log("Please try again");
// }

// const day = prompt("What is the day today?");
// const dayLower = day.toLowerCase();

// if (dayLower === "saturday" || dayLower === "sunday") {
//   console.log(`${dayLower} is a Weekend`);
// } else {
//   console.log(`${dayLower} is a Weekday`);
// }

const month = prompt("PleaseEnter month");
const monthLower = month.toLowerCase();

const getDays = (month) => {
  console.log(`${monthLower} has ${new Date(2022, month, 0).getDate()} day`);
};

if (monthLower === "january") {
  getDays(1);
} else if (monthLower === "february") {
  getDays(2);
} else if (monthLower === "march") {
  getDays(3);
} else if (monthLower === "april") {
  getDays(4);
} else if (monthLower === "may") {
  getDays(5);
} else if (monthLower === "june") {
  getDays(6);
} else if (monthLower === "july") {
  getDays(7);
} else if (monthLower === "august") {
  getDays(8);
} else if (monthLower === "september") {
  getDays(9);
} else if (monthLower === "october") {
  getDays(10);
} else if (monthLower === "november") {
  getDays(11);
} else if (monthLower === "december") {
  getDays(12);
} else {
  console.log("Please try again");
}
