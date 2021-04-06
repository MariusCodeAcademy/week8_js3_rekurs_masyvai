"use strict";
console.log("Array tasks");

const numberArr = [11, -25, -15, 48, 16];
const numberArr2 = [-12, 4, 6, 20, 9, 8, 5];
const numberArr3 = [-5, -7, 13, -5, 16, 7, -16, 10];

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

// 6. parasyti funkcija kuri pasiima 2 masyvus kaip argumentus ir sujungia juos i viena ir grazina
// pabandyti 2 budais

// 7. funkcija kuri pasiima masyva kaip argumenta ir grazina stringa
// [1, 2, 3, 17, 24, 3, "a", "123b"] => 12317243"a""123b"

// 8. parasyti funkcija kuri paima masyva ir reiksme kaip argumentus ir iesko reiksmes masyve.
// jei randa reiksme grazina indexa, jei neranda grazina -1
// padaryti 2 budais
// findMeAn([2, 3, 6, 7], 3) => 1
// findMeAn([2, 3, 6, 7], 12) => -1
// findMeAn([2, 3, 6, 7, 4 ,11], 7) => 3
