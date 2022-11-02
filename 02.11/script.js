// 1
function hello(text) {
    console.log(text);
}
hello('Привет, Javascript!');

// 2
let number = prompt('Введите число');
let result = number * number;
function mathAction(result) {
    console.log(result);
}
mathAction(result);

// 3
function getName(name = ' гость') {
    console.log(`привет ${name}`);
}
getName('Василий');