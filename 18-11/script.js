const primary_btn = document.querySelector('#primary-btn');
const modal = document.querySelector('#modal');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');

const showNotification = (options) => {
    modal.innerHTML = '<div class="notification ">кнопка<button id="close-btn">x</button></div>'

    setTimeout(() => {modal.innerHTML = ""}, 3000)
    }


primary_btn.addEventListener('click', () => {
    showNotification()
    document.querySelector('#close-btn').addEventListener('click', () => {
        modal.innerHTML = '';
    })
})

secondary_btn.addEventListener('click', () => {
    showNotification()
    document.querySelector('#close-btn').addEventListener('click', () => {
        modal.innerHTML = '';
    })
})

success_btn.addEventListener('click', () => {
    showNotification()
    document.querySelector('#close-btn').addEventListener('click', () => {
        modal.innerHTML = '';
    })

})
