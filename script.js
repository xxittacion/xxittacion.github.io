let tg = window.Telegram.WebApp; // объект webapp телеграмма 

tg.expand(); // страница на все окно расширенна

// tg.MainButton.text = "Text"; // текст кнопки изменён 
// tg.MainButton.setText("Text1"); // текст кнопки изменён иначе
// tg.MainButton.setParams({"color": "#143F6B"}); // параметры измененны

tg.MainButton.textColor = "#FFFFFF"; // цвет текста кнопки изменён
tg.MainButton.color = "#2cab37"; // цвет бэкграунда кнопки изменён

let item = "";

let btn1, btn2, btn3, btn4, btn5, btn6;


// При клике на кнопку назад
tg.BackButton.onClick(() => {
	window.location.href='index.html'; // главная страница
	tg.BackButton.hide(); // кнопка назад скрыта
});

// При клике на кнопку выбрать
btn1 = document.getElementById("btn1").addEventListener("click", () => {
	tg.HapticFeedback.impactOccurred(medium); // тактильный сигнал
	
	// Нижняя кнопка видна
	if (tg.MainButton.isVisible) { 
		tg.MainButton.hide(); // главная кнопка скрыта
	}
	// Нижняя кнопка скрыта
	else { 
		tg.MainButton.setText("Перейти в раздел: Кисти"); // текст изменён
		item = "1";
		tg.MainButton.show(); // главная кнопка видна

		// При клике на нижнюю кнопку
		tg.MainButton.onClick(() => {
			window.location.href='brushes.html'; // выбранный раздел
			tg.BackButton.show(); // кнопка назад видна
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
