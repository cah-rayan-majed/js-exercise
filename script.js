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

function rev(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function run(trial) {
  var sumGreatest4;
  if (trial.length <= 4) {
    sumGreatest4 = 0;
    for (var i = 0; i < trial.length; i++) {
      sumGreatest4 = sumGreatest4 + trial[i];
    }
  } else {
    for (var i = 1; i < trial.length; i++) {
      for (var j = 0; j < i; j++) {
        if (trial[i] < trial[j]) {
          var x = trial[i];
          trial[i] = trial[j];
          trial[j] = x;
        }
      }
    }

    arr = trial.slice(-4);
    sumGreatest4 = 0;
    for (var i = 0; i < arr.length; i++) {
      sumGreatest4 = sumGreatest4 + arr[i];
    }
  }
  return rev("summation-" + sumGreatest4);
}

// don't update the below code
// run the tests
(function () {
  for (const i in trials) {
    console.log("output:", run(trials[i]));
  }
})();
