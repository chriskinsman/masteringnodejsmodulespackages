function Logger(options) {
	options = options || {};	
	this.loggingLevel = options.loggingLevel || 1;
}

Logger.prototype.log = function log(logLevel, message) {
	if(logLevel <= this.loggingLevel) {
		console.log(message);	
	}		
}

module.exports = Logger;