let x = 7;
let y = "Верно";
let z = "Неверно";
if (x === 7){
    console.log(y);
} else{
    console.log(z);
}

let a = 2;
let b = 4;
if (a <= 1 && b >= 3){
    let c = a + b;
    console.log(c);
} else{
    let d = a - b;
    console.log(d);
}

let time = +prompt('Введите число');
if (time <= 15){
    alert('значение попадает в первую четверть');
} else if(time >= 16 && time <= 30){
    alert('значение попадает во вторую четверть');
} else if(time >= 31 && time <= 45){
    alert('значение попадает в третью четверть');
} else if(time >= 46 && time <= 59){
    alert('значение попадает в четвертую четверть');
} else{
    alert('значение не попадает в диапазон от 0 до 59');
}