const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 30];
const sort = ages.sort();

console.log(sort);
console.log(Math.min(...ages));
console.log(Math.max(...ages));

let median = ages.length / 2;
let ans = parseInt(sort[median]);
console.log(Math.round(ans));
