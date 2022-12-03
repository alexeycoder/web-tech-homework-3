const ASK_USER_NAME_PROMPT = "Пожалуйста, введите ваше имя";
const formatGreeting = (userName) => `Приветствую вас, ${userName}. Добро пожаловать!`;

main();

function main() {
	const userName = askUserName();
	if (userName != null) // иначе - нажато Отмена
		greeting(userName);
}

function askUserName() {
	return prompt(ASK_USER_NAME_PROMPT);
}

function greeting(userName) {
	const welcomeMsg = formatGreeting(userName);
	console.log(welcomeMsg);
}
