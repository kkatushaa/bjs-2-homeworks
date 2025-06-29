function getArrayParams(...arr) {
let min = Infinity;
let max = -Infinity;
let sum = min+max;
for (let i=0; i < arr.length; i++) {
  const num = arr[i];
if ( num > max ) {
  let max = num;
} else if ( num < min) {
  let min = num;
}
}
  sum += num;
const avg = (sum/arr.length).toFixed(2);
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
