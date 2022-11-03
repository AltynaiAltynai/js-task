// 1
function hello() {
    return 'Привет, Javascript';
}
console.log(hello());

// 2
function mathAction() {
    let number = prompt('Введите число');
    let multiply = number * number;
    console.log(multiply);
}
mathAction();

// 3
function getName(name = ' гость') {
    console.log(`привет ${name}`);
}
getName('василий');