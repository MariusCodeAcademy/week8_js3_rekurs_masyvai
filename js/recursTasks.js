"use strict";

console.log("recursija Tasks");

// atspausdini kiekviena raide
function printLetter(str) {
  // aprasyti base case - salyga kada nutrauksim rekusija
  if (str === "") {
    console.log("rekursijos pabaiga");
    return;
  }
  // paimti pirma raide
  let pirmaRaide = str.charAt(0);
  console.log(pirmaRaide);
  // iskviesti funkija rekusiskai ir paduoti viska isskyrus pirma raide
  let likesString = str.slice(1);
  printLetter(likesString);
}
// printLetter("pirmadienis");

// pirmadienis
// p (irmadienis)
// i (rmadienis)
// r (madienis)

// s ()

// parasyti funkcija kuri grazina string paduoto argumento ilgi
// 'abcd'
// total = 0
// a, total++ 'bcd'
// b, total++ 'cd'
// c, total++ 'd'
// d, total++ ''
// d, if str === '' return 0, total

function strLength(str) {
  //   debugger;
  // base case
  if (str === "") return 0;

  let leftOverString = str.slice(1);
  let total = 1 + strLength(leftOverString);
  return total;
}

console.log('strLength("abcd")', strLength("abcd"));

// atspausdinti string paprastai
// abcd
// a (bcd)
// b (cd)
// c (d)
// d ('') jei string yra '' iseiti is fn grazinti ''

function printArg(str) {
  // base case - isejimo salyga
  if (str === "") return "";
  let firstLetter = str.charAt(0);
  let likesString = str.slice(1);
  let printAllString = firstLetter + printArg(likesString);
  return printAllString;
}

// 1 rekusijos
// apsukti string is kitos puses
// vienas
// s viena // imam paskutini ir grazinam be paskutinio
// sa vien
// san vie
// sane vi

function reverseArg(str) {
  // base case - isejimo salyga
  if (str === "") return "";

  let lastLetter = str.slice(-1);
  let likesString = str.slice(0, -1);
  console.log({ lastLetter }, { likesString });

  let reversed = lastLetter + reverseArg(likesString);
  return reversed;
}
console.log('reverseArg("vienas")', reverseArg("vienas"));

// 2 rek
// rekursijos budu sudeti masyvo el skaiciu
// [1, 2 , 3 ] // 6

// paimam 1 ir likutis [2, 3]
// paimam 2 ir likutis [3]
// paimam 3 ir likutis [] - base case

function sumArr(arr) {
  // base case
  if (arr.length === 0) return 0;

  let pirmasEl = arr[0];
  let likutis = arr.slice(1);
  let total = pirmasEl + sumArr(likutis);
  return total;
}
let sum = sumArr([1, 2, 3, 4]);
// console.log({ sum });

// kitas budas su total
function sumArrWithTotal(arr, total = 0) {
  // base case
  if (arr.length === 0) return total;

  let pirmasEl = arr[0];
  let likutis = arr.slice(1);
  return sumArrWithTotal(likutis, total + pirmasEl);
}
let sumTotal = sumArrWithTotal([1, 2, 3, 4]);
// console.log({ sumTotal });

// 3 rek
// parasyti rekursiskai paieskos masyve funkcija
// findMe([1, 2, 3], 2) // true
// findMe([1, 2, 3], 12) // false
// sunkesinsi var grazinti index

// 4 uzd nerekursiskai
// parasyti funkcija kuri pasimima paprasta masyva ir grazina jo el suma
// 4.1 [1, 2, 3] sumArrFor([1, 2, 3])
// 4.2 [1, 2, 3, [5, 6]] sumArrFor([1, 2, 3, [5, 6]])
// 4.3 [1, 2, 3, [5, 6, [7, 8]]] sumArrFor([1, 2, 3, [5, 6, [7, 8]]])
[1, 2, 3, [5, 6, [7, 8]]];

// 4.2 [1, 2, 3, [5, 6]] sumArrFor([1, 2, 3, [5, 6]])
function sumArrFor(arr) {
  let total = 0;
  let innerTotal = 0;
  //   debugger;
  arr.forEach((num) => {
    if (typeof num === "number") {
      total += num;
    } else {
      // num yra masyvas su reiksmem
      // num [5, 6]
      num.forEach((innerArrVal) => {
        innerTotal += innerArrVal;
      });
      total += innerTotal;
    }
  });
  console.log({ total });
  return total;
}
sumArrFor([1, 2, 3, [5, 6]]);

function sumMuliDArr(arr) {
  debugger;
  let total = 0;
  arr.forEach((el) => {
    if (typeof el === "number") {
      total += el;
    } else {
      // kai el yra masyvas
      total += sumMuliDArr(el);
    }
  });
  return total;
}
console.log("sumMuliDArr([1, 2, 3, [5, 6]])", sumMuliDArr([1, 2, [5, 6]]));

function sumArr2d(arr) {
  // base case
  if (arr.length === 0) return 0;

  let pirmasEl = arr[0];
  let likutis = arr.slice(1);
  let total = pirmasEl + sumArr(likutis);
  return total;
}
let sum2d = sumArr2d([1, 2, 3, [5, 6]]);
console.log(sum2d);

// 5 uzd atlikti 4 uzd rekursiskai
