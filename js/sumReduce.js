// [1, 3, 6].reduce((total, num) => total + num,0)
// //10

// [1, 3, 6].reduce((total, num) => total + num)
// //10

// [{b: 4}, {b: 5}, {b: 7}].reduce((total, num) => total + num.b, 0)
// 16

// [{b: 4}, {b: 5}, {b: 7}].reduce((total, num) => {
// total + num.b
// }, 0)
// //undefined

// [{b: 4}, {b: 5}, {b: 7}].reduce((total, num) => {
// return total + num.b
// }, 0)
// //16
