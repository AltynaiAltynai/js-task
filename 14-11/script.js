/*Напишите функцию showNotification(options), которая создаёт уведомление:
    <div class="notification"> с заданным содержимым.
    Уведомление должно автоматически исчезнуть через 1,5 секунды.

    Пример объекта options:
// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
    showNotification({
        html: "Hello!", // HTML-уведомление
        className: "welcome" // дополнительный класс для div (необязательно)
    });*/


let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const thisNotification = document.getElementsByClassName('notification');


const showNotification = (options) => {
    thisNotification.classList.add(options.class);
    setTimeout(stopTime, 1500)
}
btn1.addEventListener('click', () => {
    showNotification({
        class:'welcome',
        text:'A simple primary alert—check it out!',
    })
})













