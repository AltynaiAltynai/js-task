/*  Составьте программу, которая принимает с клавиатуры числа, пока не будет
   введено значение 0.
   Для каждого введенного с клавиатуры положительного числа, программа должна
   выводить на экран "плюс", для каждого отрицательного – "минус".
   Например: ввод: 7, 14, -18, 0 ⇒ вывод: плюс, плюс, минус
 */

let newValue;
while (newValue != 0) {
    newValue = prompt('Введите число');
    if (newValue > 0) {
        alert('плюс');
    } else if(newValue < 0){
        alert('минус');
    }
}


/*  Дан массив с числами: -5,  10,  5, 55,  -1, 22,  -4 , 36, -45:
   Оставьте в нем только отрицательные числа.
 */
const rowOfNumbers = [-5, 10, 5, 55, -1, 22, -4, 36, -45];
const negativeNumbers = rowOfNumbers.filter(function (chosenNumber) {
    return chosenNumber < 0;
})
console.log(negativeNumbers);


/*  Напишите функцию, которая принимает 2 числа и возвращает:
   1 - если первое число больше, чем второе;
   -1 -  если первое число меньше, чем второе;
   и 0 - если числа равны.
   Попробуйте реализовать эту функцию не только с помощью if...else,
   но и с помощью тернарного оператора, и в виде стрелочной функции
 */

/**** IF, ELSE ****/

function myFunc(a, b) {
    if(a === b){
        return 0;
    } else if(a > b){
        return 1;
    } else {
        return -1;
    }
}
let result = myFunc(8, 90);
function conclusion(result) {
    console.log(result);
}
conclusion(result);


/**** ТЕРНАРНЫЙ ОПЕРАТОР ****/
/*let a, b;
function secondFunc(a, b){
    return (a === b) ? 0: (a > b ) ? 1 : -1;
}
let res = secondFunc(12, 10);
console.log(res);*/


/******* СТРЕЛОЧНАЯ ФУНКЦИЯ *******/
const thirdFunc = (a, b) => {
    return (a === b) ? 0: (a > b ) ? 1 : -1
}
const newResult = thirdFunc(4, 4);
console.log(newResult);