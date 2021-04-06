"use strict";
console.log("Array tasks");

const numberArr = [11, -25, -15, 48, 16];

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
// for (let i = mas; i < 0; i--) { console.log(mas[i]) }
// console.log(mas[0])
// console.log(mas[1])
// console.log(mas[2])

// 4 parasyti funkcija kuri grazina masyvo paskutini el, // bent 2-3 budus

// 5 parasyti funkcija kuri gauna masyva. Masyve gali buti string ir number tipo el.
// funkcija turi paversti visus el i string tipa ir grazinti nauja masyva su pakeistai el.
// [1, 2, "a", "b"] => ["1", "2", "a", "b"]
// ["abc", 123, "def", 456]
// [1, 2, 3, 17, 24, 3, "a", "123b"]
