// 1
const numbers = [1, 2, 3, 4, 5];
const multiplyNumbers = numbers.map(function (item ) {
    return item * 2;
})
console.log(multiplyNumbers);


// 2
function myFunc(letter, amount) {
    let newValue = [];
    for (let a = 0; a < amount; a++){
        newValue.push(letter);
    }
    return newValue;
}
console.log(myFunc('a', 3));


// 3
const rightNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function newReverse(numbers) {
    const leftNumbers = [];
    for (let i = 0; i < rightNumbers.length; i++) {
        leftNumbers[i] =rightNumbers[(rightNumbers.length - 1) - i];
    }
    return leftNumbers;
}
console.log(newReverse());
