const number = [1, 2, 5, 6, 88, 5];
let result = 0;
for(let i = 0; i < number.length; i++){
    result += number[i];
}
console.log(result);

const numbers = [1, 2,  3, 4, 5, 6, 7, 8, 9, 10];
let multiply = 0;
let fold = 0;
for(let a = 0; a < numbers.length; a++){
    multiply = numbers[a] ** 2;
    fold += multiply;
}
console.log(fold);


const all_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const even_numbers = [];
for(let b = 2; b <= 20; b++){
    if(b % 2 === 0){
    even_numbers.push(b);
    }
}
console.log(even_numbers);

