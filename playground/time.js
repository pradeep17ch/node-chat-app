var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// // date.add(1, 'y');
// // date.subtract(9, 'months');
// console.log(date.format('Do MMM YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
console.log(date.format('h:mm a'));