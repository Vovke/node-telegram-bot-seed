var TelegramBot = require('node-telegram-bot-api');

var config;

try {
	config = JSON.parse(require("fs").readFileSync("config.json", "utf8"));
} catch (e) {
	console.log("Error reading config.json!");
}

var bot = new TelegramBot(config.token, { polling: true });

bot.on('message', function (msg) {
	var text = msg.text ? msg.text : null,
	chatId = msg.chat.id;

	switch(text) {
		case null:
		case "/start":
		case "/help":
			bot.sendMessage(chatId, "Help information here");
			break;
	}
});
