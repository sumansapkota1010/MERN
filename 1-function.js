/*let num1 = 1;
let num2 = 2;
let sum = a + b;

console.log(`${num1}+ ${num2} = ${sum}`);


let input1 = 1;
let input2 = 2;
let sum1= input1 + input2;

console.log(`${input1}+ ${input2} = ${sum1}`);
let input3 = 1;
let input4 = 2;
let sum2= input3 + input4;

console.log(`${input3}+ ${input4} = ${sum2}`);  */

// function to add to number

/* function addTwo(firstNum, secondNum) {
  let sum = firstNum + secondNum;
  console.log(`The sum of ${firstNum} + ${secondNum} is ${sum}`);
}
addTwo(3, 5);
addTwo(5, 5);
addTwo(10, 10);
 */

//another exapmle

/* let todos = [
  {
      title: "html",
      status: "complted",
  },
  {
      title: "css",
      status: "complted",
  },
  {
      title: "js",
      status: "complted",
  },
  {
      title: "react",
      status: "pending",
  },
  {
      title: "express",
      status: "pending",
  },
] */

/* 
  html is completed
  css is completed
  js is completed
  react is pending
  express is pending 
*/
/* 
let todos = [
  {
    title: "html",
    status: "completed",
  },
  {
    title: "css",
    status: "completed",
  },
  {
    title: "js",
    status: "completed",
  },
  {
    title: "react",
    status: "pending",
  },
  {
    title: "express",
    status: "pending",
  },
];

let todoS = (title) => {
 for (let i = 0; i < todos.length; i++) {
    if (todos[i].title === title) {
      console.log(`${todos[i].title} is ${todos[i].status}`);
      return;
    }
  }
    }
  }
  console.log(`${title} not found`);
};

todoS("html");
todoS("css");
todoS("js");
todoS("react");
todoS("express");
 */ /* 
let todos = [
  {
    title: "html",
    status: "completed",
  },
  {
    title: "css",
    status: "completed",
  },
  {
    title: "js",
    status: "completed",
  },
  {
    title: "react",
    status: "pending",
  },
  {
    title: "express",
    status: "pending",
  },
];

let todoS = () => {
  console.log(`${todos[0].title} is ${todos[0].status}`);
  console.log(`${todos[1].title} is ${todos[1].status}`);
  console.log(`${todos[2].title} is ${todos[2].status}`);
  console.log(`${todos[3].title} is ${todos[3].status}`);
  console.log(`${todos[4].title} is ${todos[4].status}`);
};

todoS();
 */
//rest operator
/* let sum = (...rest) => {
  let total = 0;
  for (i = 0; i < rest.length; i++) {
    total = total + rest[i];
  }
  return total;
};
console.log(sum(5, 5, 2)); */

//arrow function and return keyword
const add = (a, b) => {
  return a + b;
};
let total = add(10, 20);
console.log(total);