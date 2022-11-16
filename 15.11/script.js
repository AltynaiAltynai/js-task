const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const notification = document.querySelector('#notification');
const btn_close = document.querySelector('#btn-close');

const showNotification = (options) => {
    notification.classList.remove('d-none');
    notification.classList.add(options.className);
    setTimeout(function () {
    notification.classList.remove(options.className);
    notification.classList.add('d-none');
    }, 10000);
    btn_close.addEventListener('click', () => {
        notification.classList.remove(options.className);
        notification.classList.add('d-none');
    })
}

primary_btn.addEventListener('click', () => {
    showNotification({className:'notification-primary'})
})
secondary_btn.addEventListener('click', () => {
    showNotification({className:'notification-secondary'})
})
success_btn.addEventListener('click', () => {
    showNotification({className:'notification-success'})
})



/*const primary_btn = document.querySelector('#primary-btn');
primary_btn.style.width = ''; //сбросили , теперь не будет прописываться
primary_btn.style.backgroundColor = 'red';*/
