var messageCount = 0;

module.exports.log = function(message) {
	messageCount++;
	console.log('Message ' + messageCount + ": " + message);
}