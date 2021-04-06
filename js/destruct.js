"use strict";
console.log("destruct");
// Masyvu destrukturizavimas

let numberArr2 = [11, -25, -15, 48, 16];
let numberArr = [2, 5, 8];

// let pirmaReiksme = numberArr[0];
// let antraReiksme = numberArr[1];
let [pirmaReiksme, antraReiksme, treciaReiksme] = [2, 5, 8];
console.log("pirmaReiksme", pirmaReiksme);
console.log("antraReiksme", antraReiksme);
console.log("treciaReiksme", treciaReiksme);

// gauti pirma numberArr2 reiksme
// let firstVal = numberArr2[0]
let [firstVal, , thrid] = numberArr2;
console.log("pirma numberArr2, third", firstVal, thrid);
