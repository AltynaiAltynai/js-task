/******* && ******/
let price = '200';
let name = 'tomato';
let result1 = price >= 201 && name === 'tomato';
console.log(result1); /* false + true = false */

let user_amount = 1000;
let user_male = 'female';
let result2 = user_amount >= 1000 && user_male === 'male';
console.log(result2); /*true + false = false*/

let adress = "Tsum";
let shops_count = 395;
let result3 = adress === 'Tsum' && shops_count === 395;
console.log(result3); /*true + true = true */

let game_name = 'football';
let players = 24;
let result4 = game_name === 'volleyball' && players < 24;
console.log(result4); /*false + false = false*/

/******* || ******/
let my_name = 'Altynai';
let my_age = 23;
console.log(my_name === 'Altynai' || my_age <= 20); /*true + false = true*/
console.log(my_name === "altyn" || my_age > 20); /*false + true = true*/
console.log(my_name === 'Altynai' || my_age === 23); /*true +true = true*/
console.log(my_name === "altynai" || my_age === 22); /*false + false = false*/

/******* task1 *******/
let num1 = 10;
++num1;
++num1;
--num1;
console.log(num1);

/******* task2 *******/
let num2 = 47;
num2 += 7;
num2 -= 18;
num2 *= 10;
num2 /= 15;
alert(num2);

/****** task3 ******/
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
++num;
--num;
alert(num);