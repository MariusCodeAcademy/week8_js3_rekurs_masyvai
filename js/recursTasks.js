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

// 1 rekusijos
// apsukti string is kitos puses

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

// vienas
// s viena // imam paskutini ir grazinam be paskutinio
// sa vien
// san vie
// sane vi

function reverseArg(str) {}
