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
    } else if(password === null){
        alert('Вход отменен');
    } else{
        alert('Я вас не знаю')
    }
} else if(new_visitor === null){
    alert('Вход отменен')
} else {
    alert('Я вас не знаю')
}