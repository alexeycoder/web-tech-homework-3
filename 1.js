const ASK_CENTIGRADE_PROMPT = "Пожалуйста, введите значение температуры" +
	" в градусах Цельсия";
const REPEAT_PROMPT = "Желаете повторить?";
const ERROR_MSG = "Что-то пошло не так \uD83D\uDE40";
const PRECISION = 1;
const formatResult = (centigrade, fahrenheit, precision) =>
	"Значение температуры:\n"
	+ `${Number(centigrade.toFixed(precision))}\u2103`
	+ ` = ${Number(fahrenheit.toFixed(precision))}\u2109`;

main();

function main() {
	do {
		const centigrade = getUserInputFloat(ASK_CENTIGRADE_PROMPT);

		// если на первоначальное предложение ввода нажато Отмена - просто выходим
		if (centigrade == null) {
			return;
		}

		const fahrenheit = toFahrenheit(centigrade);
		alert(getResultView(centigrade, fahrenheit));
	}
	while (confirm(REPEAT_PROMPT))
}

function getResultView(centigrade, fahrenheit) {
	if (Number.isNaN(fahrenheit))
		return ERROR_MSG;
	return formatResult(centigrade, fahrenheit, PRECISION);
}

function getUserInputFloat(promptMsg) {
	const rawValue = prompt(promptMsg);
	if (rawValue == null)
		return null;
	return Number.parseFloat(rawValue);
}

function toFahrenheit(centigrade) {
	return 32 + centigrade * 9 / 5;
}
