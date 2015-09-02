var ratelimit = require('redis-ratelimit');
var async = require('async');

var count = 0;
async.doWhilst(function(done) {
    ratelimit.check('counter', 10, 2, function(err, limited) {
        if(limited)
        {
			console.info('Limited');
            // Don't do anything, wait some amount of time 
            // and check rate limit again 
            setTimeout(done, 1000*5);
        }
        else
        {
			
            // Do work 
            count++;
			console.info('Working count: ' + count);
            done();
        }
    })
}, function() {
    return count < 10;
}, function(err) {
	console.info("Done");
    // Done 
    process.exit(0);
});