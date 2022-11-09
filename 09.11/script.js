// 1
const myFunc = (text) => {
    alert(text);
}
setTimeout(myFunc, 4000, '“Hello after 4 seconds”');
setTimeout(myFunc, 8000, '“Hello after 8 seconds”');


// 2
/*let bornYear = +prompt('Введите ваш год рождения');
let currentYear = +prompt('Введите текущий год');
let userAge = currentYear - bornYear;
alert(`Вам ${userAge} лет`);*/