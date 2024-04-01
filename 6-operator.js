/*
    function 
    arrow function
    return in function 
    if else 
        nested  if else. 
    scope
    object destructuring
 */

/* 
operators
    arthematic 
        + -
        * - multiply
        / - division
        % - modolus // gives remainder

        
    post increment 
        it updates the value, but we cannot  access the updated value immedeately
    pre increment 
        it updates the value, but we can also access the updated value immedeately

    assignment 
        = 

    comparision 
         < 
         >
         <=
         >=
         ==  // equality operator
         ===   // strict equality operator

    
    logical operators
        AND   &&
        OR   ||
        NOT   !

*/

/* console.log(10 / 3);
console.log(10 % 2);

let count = 100; */
// count = 101
// count = count  + 1
// count += 1
// count++
// ++count

// console.log(count++,count);

/* const double = (input) => {
  return input * 2;
}; */

// let output = double(count++)
/* let output = double(++count);
console.log({ output });
console.log({ count });

console.log(100 < 100); // false
console.log(100 <= 100); // true
console.log(100 == 100); // true
console.log("ram" == "Ram");
console.log("ram" == "ram ");
console.log("1" == 1); // typecast : data type conversion

console.log("hello" + "world");
console.log("1" + 1); // numberical 1 is converted to string
console.log("1" + "1"); // 11
console.log("1" - 1); // - is only i numerical operators // "1" is converted to number
console.log("one" - 1); // NaN

console.log("1" === 1); // false // no typecast // check for data types too. */

/* reserach
    ternary operators
    reference data types 
        - object 
        - arry 
*/

// console.log([] == []) // false
// console.log({} == {}) // false

/* let product = {
  price: "100.50",
  vat: 15,
}; */

// let totalPrice = product.price + product.vat
// let totalPrice = parseFloat(product.price) + product.vat
// console.log(totalPrice);

let student = {
  name: "Ram",
  paid: false,
  hasScholoarship: true,
  hasMetAttendance: true,
};

/* if ((student.paid || student.hasScholoarship) && student.hasMetAttendance) {
  console.log(student.name + " " + "can give exam");
} else {
  console.log("cannot give exam");
}
 */
/* ram cant give exam   // if none of the condition is true   */
/* ram can give exam    // if any one of the condition is true  */

/* let student = {
  name: "Ram",
  paid: false,
  hasScholarship: true,
};
if (student.paid && student.hasScholarship === true) {
  console.log(student.name + "Can give exam");
} else if (student.paid === true && student.hasScholarship === false) {
  console.log(student.name + "can give exam");
} else if (student.paid === false && student.hasScholarship === true) {
  console.log(student.name + "Can give exam");
} else {
  console.log(student.name + "Cannot give exam");
}
 */

//using ternary operator

let exam =
  (student.paid || student.hasScholoarship) && student.hasMetAttendance
    ? "can give exam"
    : "cannot give exan";
console.log(exam);

//object destructurinig garera

let student1 = {
  name: "Ram",
  paid: false,
  hasScholoarship: true,
  hasMetAttendance: true,
};

let { paid, hasScholoarship, hasMetAttendance } = student1;

let exam1 =
  (paid || hasScholoarship) && hasMetAttendance
    ? "can give exam"
    : "cannot give exam";

console.log(exam1);

//OR
/* console.log("ram" || "hari"); // ram
console.log("" || "hari"); // hari
console.log("suman" || ""); // suman
 */
//AND
//console.log("ram" && "hari");
console.log("" && "hari");
