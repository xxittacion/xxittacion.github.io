let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1, btn2, btn3, btn4, btn5, btn6;


btn1 = document.getElementById("btn1").addEventListener("click", () => {
	if (tg.MainButton.isVisible) { // нижняя кнопка видна
		tg.MainButton.hide(); // нижнюю кнопка скрыта
	}
	else { // если нижняя кнопка скрыта
		tg.MainButton.setText("Перейти в раздел: Кисти"); // текст изменён
		item = "1";
		tg.MainButton.show(); // видна нижняя кнопка, с изменённым текстом

		// при клике на нижнюю кнопку
		tg.MainButton.onClick(() => {
			window.location.href='brushes.html'; // переход в выбранный раздел
			tg.BackButton.isVisible // кнопка назад, в шапке интерфейса телеграмма
		})
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
