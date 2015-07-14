var logger = require('./logger')();
var logger2 = require('./logger')({loggingLevel: 4});

logger.log(1, "Logging level 1");
logger.log(2, "logging level 2");
logger.log(3, "logging level 3");
logger.log(4, "logging level 4");

logger2.log(1, "Logging level 1");
logger2.log(2, "logging level 2");
logger2.log(3, "logging level 3");
logger2.log(4, "logging level 4");

//logger.logMessage(4, "Will fail");