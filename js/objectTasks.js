"use strict";
console.log("Object tasks");

// 1obj. parasyti funkcija kur apskaiciuoja gauto objekto turi
let box1 = { width: 2, length: 5, height: 1 }; // 10
let box2 = { width: 4, length: 2, height: 2 }; // ➞ 16
let box3 = { width: 2, length: 3, height: 5 }; // ➞ 30

// gauti visus skaicius
// gauti ploti, gauti ilgi gauti auksti
// sudauginti
// grazinti rez

function measureVolume(obj) {
  console.log("obj", obj);
  //   let width = obj.width;
  //   let length = obj.length;
  //   let height = obj.height;
  let volume = obj.width * obj.length * obj.height;

  let { width, length, height } = obj;
  volume = width * length * height;
  console.log("volume", volume);
}
// measureVolume(box1);
// measureVolume(box2);

// 2obj nukopijuoti masyva / patikrinti ar veikia pakeitus kopijos reiksme
let items = { piano: 100, tv: 50 };
let itemsHarder = { piano: 100, tv: 50, coins: { quarter: 4, penny: 5 } };

// taip negaunam kopijos o gaunam du kintamuosius rodancius i ta pavia vieta atmintyje
let itemsCopy = items;
// seklia kopija - naudoti spread operatoriu
itemsCopy = { ...items };
itemsCopy.boardGame = 20;
console.log("itemsCopy", itemsCopy);
console.log("items", items);

console.log("itemsHarder pries", itemsHarder);
console.log("itemsHarder.coins pries", itemsHarder.coins);

// shalow copy - kopijuoja tik viena lygi
let itemsHarderCopy = { ...itemsHarder };
// JSON.stringify(itemsHarder) - pavercia objekta i string
// JSON.parse() - convertuoja JSON formata i js objekta
let itemsHarderDeepCopy = JSON.parse(JSON.stringify(itemsHarder));
// console.log("itemsHarderDeepCopy", itemsHarderDeepCopy);
itemsHarderDeepCopy.coins.quarter = 10;

console.log("itemsHarderDeepCopy", itemsHarderDeepCopy);
console.log("itemsHarder po", itemsHarder);
console.log("itemsHarder.coins po", itemsHarder.coins);

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
let studs = [{ student: "Steve" }, { student: "Becky" }, { student: "John" }]; // ➞ ["Becky", "John", "Steve"]
let studs2 = {
  Student_1: "Steve",
  Student_2: "Becky",
  Student_3: "John",
}; // ➞ ["Becky", "John", "Steve"]
