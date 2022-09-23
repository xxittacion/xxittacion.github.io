let tg = window.Telegram.WebApp; // получаем объект webapp телеграмма 

tg.expand(); // расширяем на все окно

// tg.MainButton.text = "Text"; // изменяем текст кнопки 
// tg.MainButton.setText("Text1"); // изменяем текст кнопки иначе
// tg.MainButton.setParams({"color": "#143F6B"}); // так изменяются все параметры

tg.MainButton.textColor = "#FFFFFF"; // изменяем цвет текста кнопки
tg.MainButton.color = "#2cab37"; // изменяем цвет бэкграунда кнопки

let item = "";

let btn1, btn2, btn3, btn4, btn5, btn6;


// при клике на кнопку назад, в шапке интерфейса
tg.BackButton.onClick(() => {
	window.location.href='index.html'; // переход назад
	tg.BackButton.hide(); // кнопка назад скрыта
});

btn1 = document.getElementById("btn1").addEventListener("click", () => {
	if (tg.MainButton.isVisible) { // нижняя кнопка видна
		tg.MainButton.hide(); // нижняя кнопка скрыта
	}
	else { // если нижняя кнопка скрыта
		tg.MainButton.setText("Перейти в раздел: Кисти"); // текст изменён
		item = "1";
		tg.MainButton.show(); // видна нижняя кнопка, с изменённым текстом
		// при клике на нижнюю кнопку
		tg.MainButton.onClick(() => {
			tg.impactOccurred(medium)
			window.location.href='brushes.html'; // переход в выбранный раздел
			tg.BackButton.show() // кнопка назад видна, в шапке интерфейса
		});
	}
});

btn2 = document.getElementById("btn2").addEventListener("click", () => {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Перейти в раздел: Пудры");
		item = "2";
		tg.MainButton.show();
	}
});

btn3 = document.getElementById("btn3").addEventListener("click", () => {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Перейти в раздел: Помады");
		item = "3";
		tg.MainButton.show();
	}
});

btn4 = document.getElementById("btn4").addEventListener("click", () => {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Перейти в раздел: Блески");
		item = "4";
		tg.MainButton.show();
	}
});

btn5 = document.getElementById("btn5").addEventListener("click", () => {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Перейти в раздел: Тени");
		item = "5";
		tg.MainButton.show();
	}
});

btn6 = document.getElementById("btn6").addEventListener("click", () => {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Перейти в раздел: Мыло");
		item = "6";
		tg.MainButton.show();
	}
});


// Добавляет имя и фамилию

// Telegram.WebApp.onEvent("mainButtonClicked", ()=> {
// 	tg.sendData(item);
// });

// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// usercard.appendChild(p); 
