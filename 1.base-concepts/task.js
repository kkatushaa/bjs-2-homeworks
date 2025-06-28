"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let const1;
  let const2;
  let d = b ** 2 - 4* a * c


  if (d  === 0) {
    arr = [b/(2*a)];
  } else if (d > 0) {
    const1 = (-b + Math.sqrt(d) )/(2*a)
    const2 = (-b - Math.sqrt(d) )/(2*a)
    arr = [const1, const2]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthRate = (percent / 100 ) / 12;
  let body = amount - contribution;
  let monthPay = body * ( monthRate + ( monthRate / (((1 + monthRate ) ** countMonths) - 1)));

  let total = countMonths * monthPay;
  return Math.round( total * 100 ) /100
   
}