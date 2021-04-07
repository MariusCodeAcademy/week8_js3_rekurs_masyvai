"use strict";
console.log("Array tasks");

let numberArr = [11, -25, -15, 48, 16];
let numberArr2 = [-12, 4, 6, 20, 9, 8, 5];
let numberArr3 = [-5, -7, 13, -5, 16, 7, -16, 10];
// for (pradine reiksme; salyga kol true tol vyksta ciklas; zigsnis kuris pakeicia index)

// debugger;
for (let index = 0; index < numberArr.length; index = index + 1) {
  console.log("numberArr[index]", numberArr[index]);
}

numberArr.forEach(function (number) {
  console.log("number forEach", number);
});

let grazinaMap = numberArr.map(function (number) {
  console.log("number map", number);
  return number;
});

console.log("grazinaMap", grazinaMap);

// 1. parasyti funkcija kuri gauna 2 argumentus ir grazina masyva kuriame yra tie du argumentai
function getArray(num1, num2) {
  let res = [num1, num2];
  return res;
}
console.group("makeArry");
console.log("getArray(2, 5)", getArray(2, 5));
console.log("getArray(23, 500)", getArray(23, 500));
console.log("getArray(13, -344)", getArray(13, -344));
console.groupEnd("");
console.log("");

// 2. funkcija gauna objekta
let balsai = { balsaiUz: 50, balsaiPries: 45 };
let balsai2 = { balsaiUz: 2, balsaiPries: 33 };
let balsai3 = { balsaiUz: 132, balsaiPries: 132 };
// suskaiciuoti balsu skirtuma ir ji grazinti

// gaunam objekta
// gauti balsaiUz
// gauti balsaiPries
// suskaiciuoti skirtuma
// atimti is balsaiUz balsaiPries
// grazinam skirtuma

function countVotes(votesObj) {
  let uz = votesObj.balsaiUz;
  //   console.log("uz", uz);
  let pries = votesObj.balsaiPries;
  //   console.log("pries", pries);
  let skirtumas = uz - pries;
  //   console.log("skirtumas", skirtumas);
  return skirtumas;

  // trumpiau
  return votesObj.balsaiUz - votesObj.balsaiPries;
}
console.group("countVotes");
console.log("countVotes({ balsaiUz: 50, balsaiPries: 45 })", countVotes({ balsaiUz: 50, balsaiPries: 45 }));
console.log("countVotes({ balsaiUz: 2, balsaiPries: 33 })", countVotes({ balsaiUz: 2, balsaiPries: 33 }));
console.log("countVotes({ balsaiUz: 132, balsaiPries: 132 })", countVotes({ balsaiUz: 132, balsaiPries: 132 }));
console.groupEnd();
console.log("");

// 3 Parasyti funkcija kuri apsuka masyva is kitos puses // 2 varijantus
// index     0   1   2      2  1   0
//          [2, 5, -3] -> [-3, 5, 2]

// rankiniu budu
// for (let i = mas.length - 1; i <= 0; i--) { console.log(mas[i]) }
// console.log(mas[0])
// console.log(mas[1])
// console.log(mas[2])
// 2, 1, 0

function ourReverse(arr) {
  return arr.reverse();
  // rankinis budas
  let arrLenth = arr.length;
  console.log("arrLenth", arrLenth);
  // tuscias masyvas kuriame mes padesim paduoto masyvo reiksmes is priesingos puses
  let reversedArr = [];
  for (let index = arrLenth - 1; index >= 0; index--) {
    // console.log("index", index);
    console.log(arr[index]);
    reversedArr.push(arr[index]);
  }
  console.log("reversedArr", reversedArr);
  //   console.log(arr[2]);
  //   console.log(arr[1]);
  //   console.log(arr[0]);

  return reversedArr;
}
console.group("array reverse");
console.log("ourReverse([2, 5, -3])", ourReverse([2, 5, -3]));
console.log("ourReverse([11, -25, -15, 48, 16])", ourReverse(numberArr));
console.groupEnd();
console.log("");

console.log("numberArr pries", numberArr);
// 4 parasyti funkcija kuri grazina masyvo paskutini el, // bent 2-3 budus
function getLastEl(arr) {
  let lastEl;
  // pop() - grazina pask el ir nukerpa nuo orginalaus masyvo
  //   lastEl = arr.pop();
  lastEl = arr[arr.length - 1];
  //   lastEl = arr.slice(arr.length - 1).toString();
  //   lastEl = arr.slice(-1).toString();
  //   console.log("lastEl", lastEl);
  return lastEl;
}
console.group("getLastEl");
console.log("getLastEl([-15, 48, 16])", getLastEl([-15, 48, 16]));
console.log("getLastEl([16, 48, -15, -25, 11])", getLastEl(numberArr));
console.groupEnd();
console.log("");

// 5 parasyti funkcija kuri gauna masyva. Masyve gali buti string ir number tipo el.
// funkcija turi paversti visus el i string tipa ir grazinti nauja masyva su pakeistai el.
// [1, 2, "a", "b"] => ["1", "2", "a", "b"]
// ["abc", 123, "def", 456]
// [1, 2, 3, 17, 24, 3, "a", "123b"]
// makeStringTypeArr([1, 2, "a", "b"]); // ["1", "2", "a", "b"]

// sukti kazkoki cikla per masyva
// pasiziureti ar einama reiksme yra string ar ne string tipo
// jei reiksmes tipas yra ne string tai pakeisti tipa i string
// grazinta pakeista masyva
function makeStringArrayType(arr) {
  let stirngArr = arr.map((arrValue) => {
    // console.log("arrValue", typeof arrValue);
    // kai arrValue yra ne string tipo mes norim pakeisti i string ir grazinti
    if (typeof arrValue !== "string") {
      // paversti i string
      return arrValue.toString();
      return String(arrValue);
    }
    return arrValue;
  });
  let mapShort = arr.map((value) => value.toString());
  //   console.log("stirngArr", stirngArr);
  //   console.log("mapShort", mapShort);

  return stirngArr;
}
// makeStringArrayType([1, 2, "a", "b"]);
console.group("make string array");
console.log('makeStringArrayType([1, 2, "a", "b", "false"])', makeStringArrayType([1, 2, "a", "b", false]));
console.log(
  'makeStringArrayType([1, 2, 3, 17, 24, 3, "a", "123b"])',
  makeStringArrayType([1, 2, 3, 17, 24, 3, "a", "123b"])
);
console.groupEnd();
console.log("");

numberArr = [11, -25, -15, 48, 16];
numberArr2 = [-12, 4, 6, 20, 9, 8, 5];
// 6. parasyti funkcija kuri pasiima 2 masyvus kaip argumentus ir sujungia juos i viena ir grazina
// pabandyti 2 budais
function joinArr(arr1, arr2) {
  // concat() - sujungia du ir daugiau masyvu
  let joinded = arr1.concat(arr2);
  //  ... spread operator
  joinded = [...arr1, ...arr2];
  // splice
  //   joinded = arr1.splice(arr1.length, 0, ...arr2);
  //   console.log("joinded", joinded);
  //   console.log("arr1", arr1);
  return joinded;
}
console.group("Joined arrays");
console.log("joinArr(numberArr, numberArr2)", joinArr(numberArr, numberArr2));
console.groupEnd();
console.log("");

// 7. funkcija kuri pasiima masyva kaip argumenta ir grazina stringa
// [1, 2, 3, 17, 24, 3, "a", "123b"] => 12317243a123b
console.clear();
function arrToString(arr) {
  // manual way
  // susikuriam prie ko pridesim reiksmes
  let stringFromAray = "";
  arr.forEach((value) => (stringFromAray += value));
  //   console.log("stringFromAray", stringFromAray);

  // reduce
  stringFromAray = arr.reduce((finalString, value) => finalString + value, "");

  return stringFromAray;
  // easy way
  //   return arr.join("");
}
// arrToString([1, 2, 3, 17, 24, 3, "a", "123b"]);
console.group("arrToString");
console.log('[1, 2, 3, 17, 24, 3, "a", "123b"]', arrToString([1, 2, 3, 17, 24, 3, "a", "123b"]));

console.groupEnd();
console.log("");

// 8. parasyti funkcija kuri paima masyva ir reiksme kaip argumentus ir iesko reiksmes masyve.
// jei randa reiksme grazina indexa, jei neranda grazina -1
// padaryti 2 budais
// findMeAn([2, 3, 6, 7], 3) => 1
// findMeAn([2, 3, 6, 7], 12) => -1
// findMeAn([2, 3, 6, 7, 4 ,11], 7) => 3

// sukti cikla per masyva
// ciklo metu patikrinti ar einama masyvo reiksme yra lygi ieskomam argumentui
// jeigu lygi tai grazinam index
// po ciklo jei neradom reiksmes grazinam -1

function findMeAn(arr, needle) {
  let foundNumber = -1;
  arr.forEach((number, index) => {
    // patikrinti ar numbe lygu needle
    if (number === needle) {
      console.log(`found ${number} at index ${index}`);
      foundNumber = index;
    }
  });
  console.log(foundNumber);
  // incindexOf yra js metodas kuris iesko reiksmes masyve ir grazina pirma indexa arba -1 jei neranda
  console.log(arr.indexOf(needle));
  // includes - grazina true jei randa ir false jei ne.
  console.log(arr.includes(needle));
}
findMeAn([2, 3, 6, 7], 123);
// findMeAn([2, 3, 6, 7, 4, 7], 7);
// 9 Parasyti funkcija kuri ima masyva argumentu ir grazina ar masyvo el
// suma yra lygine ar nelygine

// gauti suma
// patikrinti ar suma yra lygine ar nelygine

function sumEvenOdd(arr) {
  let total = 0;
  arr.forEach((value) => {
    total += value;
  });

  let sum = arr.reduce((total, value) => {
    return total + value;
  }, 0);

  console.log("total", total);
  console.log("sum", sum);

  if (total % 2 === 0) return "lyginis";
  return "nelyginis";
  // terenary operator
  return total % 2 === 0 ? "lyginis" : "nelyginis";
}
console.log("sumEvenOdd([2, 3, 6, 7]);", sumEvenOdd([2, 3, 6, 7]));

// sumEvenOdd([2, 3, 6, 7]);

// 10 Parasyti funkcija kuri ima masyva argumentu ir grazina masyva su paduoto masyvo tipais
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// pasunkintas var

// sukti cikla
// kiekvienos iteracijos metu patiktinti tipa
// grazinti tipa i reiksmes vieta

[
  {
    value: 1,
    type: "number",
  },
  {
    value: 2,
    type: "number",
  },
  {
    value: "null",
    type: "sring",
  },
];

// 11 Parasyti funkcija kuri ima 2 argumentus ir grazina masyva sukurta is tarpiniu skaiciu
// rangeOfNum(2, 4) ➞ [3]
// rangeOfNum(5, 9) ➞ [6, 7, 8]
// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]

// sukurti skaiciu seka 0 - 10
// sukurti skaiciu seka -5 - 15
// sukurti skaiciu seka 5 - 9
// padaryti skaiciu sekos pradiza ir pabaiga dinaminem

function rangeOfNum(nuo, iki) {
  console.log("rangeOfNum");
  // console.log("0");
  // console.log("1");
  // console.log("2");
  // sukurti masyva
  let range = [];
  // i masyva sudeti reiksmes
  // range.push(0);
  // range.push(1);
  // range.push(2);

  for (let index = nuo + 1; index < iki; index++) {
    // console.log(index);
    range.push(index);
  }

  console.log("range", range);
}
rangeOfNum(5, 9);
rangeOfNum(10, -11);

// 12 Parasyti funkcija kuri pasiima argumentu masyva ir susumuoja didesnes nei 5 reiksmes
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77
// sumFive([1, 2, 3, 4]) ➞ 0
// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252

// sukam cikla
// jei ienama reiksme daugiau uz 5 mes ja sumuojam
// jei ne praleidziam
// grazinam suma

//2 budas
// isfiltruoti masyva jame paliekan reiksmes didesnes uz 5
// susumuoti likusi masyva
//grazinti rez

// 13 parasyti funkicja kuri grazina koks skaicius padavus skaitine reiksme
// easy 0 - 10
// skaicius(5) -> 'penki'
// skaicius(10) -> 'desimt'

// medium 11 - 100

// medium - harder 101 - 1000

// 1001 - 10000 i tt
arr.reduce((acc, cuer) => {}, 0);
