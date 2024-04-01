// conditional statements

/* if else

    syntax
    if( condition  ){
        //  for truthy condition
    } else {
        // for false condition
    }
*/

//for example

/* let willRain = true;

if (willRain) {
  console.log("Take umbrella");
} else {
  console.log("no need to take ");
} */

// nested if else

/* let willRain1 = false;

let hasProbability = false;

 if (willRain1) {
  console.log("Take umbrella");
  } else {
  if (hasProbability) {
    console.log("You may need it");
  } else {
    console.log("no need to take it");
  }
  }  */

//using ternary operator
//console.log(willRain1 ? "Take Umbrella" : "no need to take it");

let topics = [
  {
    title: "html",
    status: true,
  },
  {
    title: "css",
    status: true,
  },
  {
    title: "react",
    status: false,
  },
];
let course = (topics) => {
  for (let i = 0; i < topics.length; i++)
    if (topics[i].status ) {
      console.log(topics[i].title + "is" + topics[i].status);
    } else {
      console.log(topics[i].title + "is" + topics[i].status);
    }
};
course(topics);
/* 
    html is complted 
    css is complted
    react is pending 
*/
