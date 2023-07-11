// refactor: comment, remove var, reusable functions, readable and least code possible

// given an array of random integers
// if array length <= 4, should return sum of that array
// else should find the greatest 4 numbers and sum them
// should concatenate the sum with string "summation-"; eg. summation-65
// output should be the reversed 56-noitammus

// GOOD LUCK
// note that google is your friend ;)

// don't update the trials array
const trials = [
  [2, 8, 3, 5, 10, 3], // > 4 => 10+8+5+3 = 26 => summation-26 => output: 62-noitammus
  [2, 7, -1], // <= 4 => 2+7-1 = 8 => summation-8 => output: 8-noitammus
  [-5, 0, -10, 1, 3] // > 4 => 3+1+0-5 = -1 => summation--1 => output: 1--noitammus
];

// expected output:
// output: 62-noitammus
// output: 8-noitammus
// output: 1--noitammus

// reverses string. eg. Rayan > nayaR
function reverse(str) {
  return str.split("").reverse().join("");
}

function summation (arr) {
    return arr.reduce((a,b) => a+b);
}

function calculation(trial) {
    let sumGreatest4 = 0;
    if (trial.length <= 4) {
        sumGreatest4 = summation(trial);
    } else {
        trial.sort((a, b) => a - b);
        sumGreatest4 = summation(trial.slice(-4));
    }
    return reverse("summation-" + sumGreatest4);
}

// don't update the below code
// run the tests

(function () {
    for (const i in trials) {
        console.log("output:", calculation(trials[i]));
    }
})();