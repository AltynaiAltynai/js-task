/*1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
на картинку алертом выводился ее описание.*/
const first_image = document.querySelector('#img1');
const second_image = document.querySelector('#img2');
const showMessage1 = () => {
    alert('Jasper National Park Of Canada, Jasper, AB, Canada');
}
const showMessage2 = () => {
    alert('Moscow, Russia. Published 22 hours ago');
}
first_image.onclick = showMessage1;
second_image.onclick = showMessage2;


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

function myFunc(message) {
    let newText = "";
    for (let i = 0; i < arguments.length; i++) {
        newText += arguments[i];
    }
    return newText;
}
myFunc()





















