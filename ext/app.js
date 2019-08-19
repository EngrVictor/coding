// console.log('hi');

// let x = 8;
// let y = 2;
// let z = x + y;
// console.log('Answer: ' + z);


// let firstName = victor;
// let lastName = okpara;
// let zipcode = '11111';

// let zipcode = '22222'
// var m = 10 % 3;
// console.log(m);

// var a = 4;
// a++;
// console.log(a++); 
// console.log(a);

// var  b = (1 + 2) * 3;
// console.log(b);

// let a = [1, 2, 3, 4, 45, 65];
// let b = ['david', 'faruq', 'alex', 'micheal' ];

// console.log(a[0]);
// console.log(a[1]);
// console.log(a);

// a[0] = 7;
// console.log(a);
// console.log(typeof a);

// let c = [4, 'alex', true];
// console.log(c);

// console.log(b[4]);

// console.log(a.length);

// a[10] = 77;
// console.log(a);
// console.log(a.length);

// a.push(77);
// console.log(a);
// console.log(a.length);


// a.pop();
// a.pop();
// console.log(a);
// console.log(a.length);
// let counter = 0;
// function timeout(){
// setTimeout(function () { console.log('hi ');
//    timeout();
//   }, 2000);
// // }

// timeout();

// function hello(username, password) {
//     console.log(username, password);
// }
// hello('victor444', 'default0090');

// (function() {
//     console.log('hello victor welcome');
// })();

// var victor = 'okpara';
// var victor = 'junior';
// var victor = 'okpara';
// console.log(victor);

// var fruit = ['pineapple', 'apple', 'orange', 'banana'];
// console.log(fruit);
// console.log(fruit.length);
// var book = ['story', 'fiction', 'non-fiction', 'science']
// console.log(fruit.concat(book));
// fruit.forEach[1] = ('grapes');
// fruit.shift();
// console.log(fruit);

// let x = 4;
// let y = '7';
// let d = parseInt(y, 10);
// let z = x + d;
// setTimeout (function() {
//     console.log('i counted two seconds straith down');
// }, 2000);
// setTimeout (function() {
//     console.log('i counted four seconds straith down');
// }, 4000);
// setTimeout (function() {
//     console.log('i counted six seconds straith down');
// }, 6000);

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let y = x.reduce(function(prev, current){
//     return prev + current;
// });
// console.log(y);

var x = [10, 2, 3, 4, 5]

function sorting(a, b){
    if (a < b) {
        return 1
    }else if(a > b){
        return -1
    }else{
        return 0
    }
};
var v = x.sort(sorting);
console.log(v);