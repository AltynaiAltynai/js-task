let capital = prompt('Столица кыргызстана?', '');
if(capital === 'Бишкек'){
    alert('Верно!');
} else{
    alert('Не знаете?');
}

let new_visitor = prompt('Кто пришел?');
if(new_visitor === 'Админ'){
    let password = prompt('Пароль');
    if(password === 'Черный властелин'){
        alert('Добро пожаловать');
    } else if(password ?= "Черный властелин"){
        alert('Я вас не знаю');
    } else if(password === ''){
        alert('Введите пароль');
    } else{
        alert('Вход отменен');
    }
} else if(new_visitor ?= 'Админ'){
    alert('Я вас не знаю');
} else if(new_visitor === ''){
    alert('Введите пароль');
} else{
    alert('Вход отменен');
}