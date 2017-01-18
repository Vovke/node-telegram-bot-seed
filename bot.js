var TelegramBot = require('node-telegram-bot-api');

var config;

try {
	config = JSON.parse(require("fs").readFileSync("config.json", "utf8"));
} catch (e) {
	console.log("Error reading config.json!");
}

var bot = new TelegramBot(config.token, { polling: true });

bot.on('message', function (msg) {
	var text = msg.text,
	chatId = msg.chat.id;

	switch(text) {
		default:
			bot.sendMessage(chatId, "Help information here");
			break;
	}
});
