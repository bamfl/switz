<?php
	//Получаем данные из html формы

	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$number = $_POST['number'];
	$date = $_POST['date'];


	// Обработка данных

	$name = htmlspecialchars($name);
	$tel = htmlspecialchars($tel);
	$number = htmlspecialchars($number);
	$date = htmlspecialchars($date);

	$name = urldecode($name);
	$tel = urldecode($tel);
	$number = urldecode($number);
	$date = urldecode($date);

	$name = trim($name);
	$tel = trim($tel);
	$number = trim($number);
	$date = trim($date);


	//Отправка на почту

	if (mail("petukhovrabota@mail.ru",
				"Новое письмо с сайта Швейцария",
				"Имя: ".$name."\n".
				"Телефон: ".$tel."\n".
				"Кол-во человек: ".$number."\n".
				"Дата: ".$date,
				"From: no-reply@mydomain.ru \r\n")

	) {
		echo "<script>alert(\"Письмо успешно отправлено!\");</script>"; 
		echo "<script>document.location.href='https://pdnsite.ru/switz/';</script>";
	}

	else {
		echo "<script>alert(\"Есть ошибки! Проверьте данные...\");</script>";
		echo "<script>document.location.href='https://pdnsite.ru/switz/';</script>";
	}
?>