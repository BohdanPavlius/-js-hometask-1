
 var userName;
 var userPassword;
 	userName = prompt('Кто пришел', '');
if ( userName == 'Админ') {
	
	userPassword = prompt('Здавстуйте ' + userName + ' введите пароль:', '');
		if (userPassword == 'Черный Властелин') {
				alert('Добро пожаловать!');
			} else if (userPassword == null) {
				alert('Вход отменен');
			} else  {
				alert('Пароль не верен');
			}

} else if (userName == null) {
	alert('Вход отменен!');
} else {
	alert('Я вас не знаю!');
}




	
