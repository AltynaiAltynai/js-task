/*1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
на картинку алертом выводился ее описание.*/
const images = document.querySelectorAll('#images-block');
for(let i = 0; i < images.length; i++){
    images[i].onclick = () => {
        alert(images[i].alt);
    }
}


/*2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите
куда данная ссылка ссылается.*/
const first_link = document.querySelector('#first_link');
const second_link = document.querySelector('#second_link');

const linkByHover1 = () => {
    alert('Instagram.com');
}
const linkByHover2 = () => {
    alert('Facebook.com');
}
first_link.onmouseover = linkByHover1;
second_link.onmouseover = linkByHover2;


/*3) Напишите функцию, которая объединяет несколько строк и возвращает их.
    Используйте глобальный массив arguments.*/
function getString() {
    let str = '';
    for(let i = 0; i < arguments.length; i++){
        str += arguments[i] + ' ';
    }
    return str;
}
const result = getString('hello', 'world', 'good', 'job');
console.log(result);























