"use strict";
console.log("for in of");

// key tai yra objekto key, arba rakto dalis, object tai objektas per kuri iteruojame
// for (key in object) {
//     // code block to be executed
//   }

let person = {
  name: "James",
  age: 24,
  town: "Kaunas",
  q1: 14,
  q2: 35,
  q3: 4,
  q4: 10,
};

// gauti amziu
person.age;
person["age"];

// ciklas per objekta
let arrayOfObjValues = [];
for (let key in person) {
  // key - objekto raktas
  // person[key] - objekto rakto reiksme

  //   console.log(key);
  console.log(person[key]);
  arrayOfObjValues.push(person[key]);
}

console.log("arrayOfObjValues", arrayOfObjValues);
console.clear();

let numberArr = [2, 3, 5];

for (let num of numberArr) {
  console.log("num", num);
}

let stringName = "James";
for (let val of stringName) {
  console.log("val", val);
}

let preke = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  category: "men clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

// gauti visus objekto raktus masyvo pavidalu
Object.keys(preke); // ["id", "title", "price", "category", "image"]

// gauti visas objeko savybiu reiksmes
Object.values(preke); // [1, "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 109.95, "men clothing", "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"]

// abu sie metodai yra Chainable, (juos galima jungti su kitais jungiamais metodais sort(), map() ir tt.)

// gauti masyvu masyva su pirma reiksme raktas antra reiksme yra reiksme
Object.defineProperties(preke); // [Array(2), Array(2), Array(2), Array(2), Array(2)]
