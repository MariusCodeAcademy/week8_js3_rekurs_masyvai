"use strict";
console.log("Object tasks");

// 1obj. parasyti funkcija kur apskaiciuoja gauto objekto turi
let box1 = { width: 2, length: 5, height: 1 }; // 10
let box2 = { width: 4, length: 2, height: 2 }; // ➞ 16
let box3 = { width: 2, length: 3, height: 5 }; // ➞ 30

// 2obj nukopijuoti masyva / patikrinti ar veikia pakeitus kopijos reiksme
let items = { piano: 100, tv: 50 };
let itemsHarder = { piano: 100, tv: 50, coins: { quarter: 4, penny: 5 } };

// 3obj parasyti funkcija kuri patikrina ar verte yra tarp duotu min ir max reiksmiu
// funkcija grazina boolean reiksme true arba false
// isInRange(4, { min: 0, max: 5 }) ➞ true
// isInRange(4, { min: 4, max: 5 }) ➞ true
// isInRange(4, { min: 6, max: 10 }) ➞ false

// 4obj  isrikiuoti sarasa pagal kaina
const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "juice", price: 15 },
  { name: "orange", price: 25 },
];

// 5obj Parasyti funkcija kuri gauna studentu objekta ir grazina masyva su studentu vardais
// isrikiuotais abeceles tvarka
let studs = {
  "Student 1": "Steve",
  "Student 2": "Becky",
  "Student 3": "John",
}; // ➞ ["Becky", "John", "Steve"]
