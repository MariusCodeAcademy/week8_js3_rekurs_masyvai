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

// funkcija kuri atspausdina pirma ir antra masyvo reiksme
numberArr2 = [11, -25, -15, 48, 16];

function printFirstTwo([first, second]) {
  console.log("first", first, "second", second);
}
printFirstTwo(numberArr2);

console.clear();
//  Objects Destruct ====================================================
let person = {
  name: "Bob",
  age: 23,
  town: "Vilnius",
  isStudent: true,
};
let person2 = {
  name: "James",
  age: 20,
  town: "Vilnius",
  isStudent: false,
};
console.log(person);
// pasiimam reikiamas reiksmes is masyvo
let { name, town } = person;
// galim persivasinti reiksmes jei reikia
let { name: vardas, town: miestas } = person;

console.log("vardas", vardas);
console.log("vardas", miestas);

// parasyti funkcija kuri atspausdina paduoto studento varda metus ir ar jis studentas
function studInfo({ name, age, isStudent }) {
  console.log(name, age, isStudent);
  let studStatus;

  if (isStudent) {
    studStatus = "a student";
  } else {
    studStatus = "not a student";
  }
  console.log(`${name} is ${age} years old and he is ${studStatus}`);
}
studInfo(person);
studInfo(person2);
