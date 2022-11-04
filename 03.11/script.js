// 1
const calcMultiply = data => data.map(item => item * 2)
console.log(calcMultiply([1, 2, 3]));
console.log(calcMultiply([4, 1, 1, 1, 4]));
console.log(calcMultiply([2, 2, 2, 2, 2, 2]));


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
const data = [1, 2, 3];
function newFunc(numb) {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
        newData[i] =data[(data.length - 1) - i];
    }
    return newData;
}

console.log(newFunc(data));
