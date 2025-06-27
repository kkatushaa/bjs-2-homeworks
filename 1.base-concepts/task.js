"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let const1;
  let const2;
  let d = b ** 2 - 4* a * c


  if (d  < 0) { 
    arr = [] 
  }
  else if (d  === 0) {
    const1 = -b/(2*a)
    arr = [const1];
  }
  else if (d > 0) {
    const1 = [(-b + Math.sqrt(d) )/(2*a)]
    const2 = [(-b - Math.sqrt(d) )/(2*a)]
    arr = [const1, const2]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}