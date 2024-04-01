/* global scope */
let brand = "apple";

console.log(double(2));
function double(input) {
  let result = input * 2;
  return result;
}

const triple = (input) => {
  let result = input * 3;
  return result;
};
console.log(triple(111));

if (true) {
  let data = "api data";
  console.log({ data });
}

if (true) {
  const data = "api data 2";
  console.log({ data });
}

if (true) {
  /* this data variable is a block scope varirable   */
  const data = "api data 3";
}

/* we cannot access block scope varialbe outside the scope */
console.log({ data });
