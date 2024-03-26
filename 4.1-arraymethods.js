// merging arrays

// 1) push -- this doesnot merge two array but it merge array in an existing array

// example
/*
const oddNum = [1, 3, 5, 7, 9];
const evenNum = [2, 4, 6, 8];

oddNum.push(evenNum);

console.log(oddNum);  // array of even number is merge inside odd number array
*/

/*

//Using concat
const oddNum = [1, 3, 5, 7, 9];
const evenNum = [2, 4, 6, 8];
const wholeNum = oddNum.concat(evenNum);
console.log(wholeNum); // merging two array
 */

/*
using spread operator we can merge the array
*/

const oddNum = [1, 3, 5, 7, 9];
const evenNum = [2, 4, 6, 8];

const wholeNum = [...oddNum, ...evenNum];
console.log(wholeNum);
