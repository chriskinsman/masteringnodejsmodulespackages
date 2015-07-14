module.exports = function(options) {
	options = options || {};
	var loggingLevel = options.loggingLevel || 1;
	
	function logMessage(logLevel, message) {
		if(logLevel <= loggingLevel) {
			console.log(message);	
		}		
	}
	
	return {
		log: logMessage
	};
}