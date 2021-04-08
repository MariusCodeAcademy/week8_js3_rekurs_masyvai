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

// pasitiktinti ar skaicius yra daugiau uz min
// ir ar jis yra maziau uz max
// jei taip tai grazinam true

// jei ne grazinam false
console.clear();
function isInRange(needle, minMaxObj) {
  // min reiksme minMaxObj.min
  if (needle > minMaxObj.min && needle < minMaxObj.max) {
    console.log("daugiau uz min, ir maziau uz max");
    return true;
  }
  return false;
}
console.log("isInRange(4, { min: 10, max: 5 });", isInRange(4, { min: 10, max: 5 }));
console.log("isInRange(4, { min: 0, max: 5 });", isInRange(4, { min: 0, max: 5 }));

isInRange(4, { min: 10, max: 5 });
console.clear();
// 4obj  isrikiuoti sarasa pagal kaina
const drinks = [
  { name: "aemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "zuice", price: 15 },
  { name: "orange", price: 25 },
];

console.table(drinks);
drinks.sort((a, b) => {
  return a.price - b.price;
});
console.table(drinks);

// isrikiuoti pagal name
drinks.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
});
console.table(drinks);
console.clear();
// 5obj Parasyti funkcija kuri gauna studentu objekta ir grazina masyva su studentu vardais
// isrikiuotais abeceles tvarka
let studs = [{ student: "Steve" }, { student: "Becky" }, { student: "John" }]; // ➞ ["Becky", "John", "Steve"]
let studs2 = {
  Student_1: "Steve",
  Student_2: "Becky",
  Student_3: "John",
}; // ➞ ["Becky", "John", "Steve"]

console.log("studs", studs);
console.log("studs2", studs2);

function sortNamesMap(arr) {
  let valueOnly = arr.map((stud) => stud.student).sort();
  // valueOnly.sort();
  console.log("valueOnly", valueOnly);
  return valueOnly;
}
// sortNamesMap(studs);

function sortNamesIn(myObj) {
  let names = [];
  for (let key in myObj) {
    names.push(myObj[key]);
  }
  names.sort();
  console.log("names", names);
}
sortNamesIn(studs2);

// 6 Parasyti funkcija kuri grazina kiek puslapiu galima atspausdinti kol pasibaigs
// dazai kazkuriai is spalvu kaseciu
let inkLevel1 = {
  cyan: 23,
  magenta: 12,
  yellow: 10,
};
// inkLevels(inkLevel1); // ➞ 10

// psiaudo kodas
// norim gauti visu triju spalvu likusiu puslapiu skaicius

// tas skaiciu kuris yra maziausias tiek lapu mes galesim atspausdinti

// Math.min(n1, n2, n3 ...) grazina pati maziausia skaiciu

function inkLevels({ cyan, magenta, yellow }) {
  // let pirmaSpalvaLikutis = cartrige.cyan;
  // let minPsl = Math.min(cartrige.cyan, cartrige.magenta, cartrige.yellow);
  let minPsl = Math.min(cyan, magenta, yellow);
  console.log("minPsl", minPsl);
  return minPsl;
}
inkLevels(inkLevel1);

inkLevels({
  cyan: 432,
  magenta: 543,
  yellow: 777,
}); //  ➞ 432

inkLevels({
  cyan: 700,
  magenta: 700,
  yellow: 0,
}); //  ➞ 0

let preke = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  category: "men clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

// 7obj parasyti funkicja kuri grazina is paduoto objekto visus raktus (keys)
// masyvo pavidalu
console.clear();
function getObjKeys(obj) {
  let keysArr = [];
  for (let raktas in obj) {
    // console.log(raktas);
    keysArr.push(raktas);
  }
  console.log("keysArr", keysArr);
  return keysArr;
}
getObjKeys(preke);

// 8obj parasyti funkicja kuri grazina is paduoto objekto visas vertes
// masyvo pavidalu

// 9obj parasyti funkcija kuri paima objekta ir grazina masyvu masyvo pavidalu objekta
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

//10obj parasyti funkcijakuri suskaiciuoja ir grazina epitetus gautus objekto pavidalu
// totalAmountAdjectives({ a: "moron" }) ➞ 1
// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3
// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4

// 11obj parasyti funkcija nustatyti ar objektas turi nurodyta key reiksme
// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
