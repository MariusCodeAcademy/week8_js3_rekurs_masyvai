"use strict";

console.log("helpersWorks");

// funkcija grazina reiksme su return
// jei nera return grazina undefined
// jei norim panaudoti funkcijo rezultata, daziniausiai ji grazinam.

let num1 = 10;
let num2 = 11;
let num3 = 5;

// funkciju pagalba
// 1 gauti pirmu divieju kintamuju sudeti padalinta is trecio

//1a sukurti funkcija sudeciai
function sumNums(n1, n2) {
  console.log("sumNums start");

  return n1 + n2;
}

//1b sukurti funcji dalybai
function divide(n1, n2) {
  console.log("divide start");
  return n1 / n2;
}

function calculate(n1, n2, n3) {
  console.log("calculate start ");

  // gautis suma
  let sum = sumNums(n1, n2);
  console.log("sum", sum);

  // padalinti suma is 3 argumento
  let padalinus = divide(sum, n3);
  console.log("padalinus", padalinus);
  return padalinus;
}

calculate(num1, num2, num3);
