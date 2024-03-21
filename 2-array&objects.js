/* variables
    -simply a keyword where we cam store some values
    */

/*greeting = "namaste";

console.log(greeting, "Suman");
console.log(greeting, "Sujan");
console.log(greeting, "Saujan");
console.log(greeting, "Sauman");
*/

/*
// let and const
let age = 20;
age = 30;
console.log(age);
// let le redeclare garna mildaina tara reassigned garna milxa

const name = "Suman"; // const ma dubai redeclare and reassigned garna mildaina
*/

// array

/* Array
    - elements // each item in array is known as element
    - index
        - always starts with 0
    - usually its collection of similar data types

*/

/*
let brands = ["apple", "samsung", "lg", "soni"]; // change name soni to sony
//accessing soni
console.log("previous name " + brands[3]);

brands[3] = "Sony";
console.log("Changed name " + brands[3]);

*/

/*
// objects

let Person = {
  name: "Suman",
  rollNo: 43,
  address: "Raniban",
};
Person.name = "Sujan"; // Person.name le access garxa .. person.name = "Sujan" le reinitialized garxa

console.log(Person.name);

/* object
    let <variableName> = {
        <key>:<value>,
        <attribute>:<value>,
        <propertry>:<value>,
        <filed>:<value>,
    }
*/

/*
let projectorBrand = "viewsonic"
let projectorColor = "white"
let projectorPrice = 50000

let projector = {
  brand: "viewsonic",
  color: "white",
  price: 50000,
}

console.log("company", company)
console.log("projector", projector)

*/

// accessing and modifying object

/*
let course = "web";
course = {
  title: "web",
  title: "mern",
  duration: 1, // change this to 3
  durationUnit: "months",
  startTime: 0, // chnage this to 3
  endTime: 4,
};

console.log("prev-duration", course.duration);
console.log("prev-starttime", course["startTime"]);

course.duration = 3;
course["startTime"] = 3;

console.log("after", course.duration);
console.log("after-starttime", course["startTime"]);

console.log("prev-course-fee", course.fee); // undefined
course.fee = 15000; // sets new key/property called fee
console.log("after-course-fee", course.fee);

*/

// nested object
/*
let user = {
  firstName: "Suman",
  lastName: "Sapkota",
  permanentAddress: {
    ward: 2,
    district: "Gorkha",
    provisionState: 4,
  },
  temporaryAddress: {
    ward: 1,
    district: "Kathmandu",
    provisionState: 3,
  },
};
console.log(user);
console.log(user.permanentAddress);


*/

// object inside array ..

/*
let Person = {
  firstName: "Sujan",
  lastName: "Sapkota",
  phone: [
    {
      number: 981000832,
      type: "NCELL",
    },
    {
      number: 9860673217,
      type: "NTC",
    },
    {
      number: 981234567,
      type: "NCELL",
    },
  ],
};

console.log(Person.phone);


*/

// tasks
/*
let brand = {
  name: "Apple",
  website: "https://www.apple.com/",
  founders: [
    {
      name: "Steve Jobs",
    },
    {
      name: "Steve Wozniak",
    },
    {
      name: "Ronald Wayne",
    },
  ],
  CEO: {
    name: "Tim Cook",
  },
};
console.log(brand.founders);



*/
// working with multiple brands

let brands = [
  {
    name: "Apple",
    website: "https://www.apple.com/",
    founders: [
      {
        name: "wrong-ceo",
        phone: 111,
      },
    ],
  },
];

brands[0].founders[0].name = "right-ceo";

brands[0].founders[0].address = {
  address: "Raniban",
};
console.log(brands[0]);
