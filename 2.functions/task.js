function getArrayParams(...arr) {
let min = Infinity;
let max = -Infinity;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  
if ( num > max ) {
   max = num;
} else if ( num < min) {
   min = num;
}
sum += num;
}
  
let avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
