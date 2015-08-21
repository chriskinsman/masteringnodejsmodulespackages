var ratelimit = require('redis-ratelimit');
var async = require('async');

var count = 0;
async.doWhilst(function(done) {
    ratelimit.check('counter', 10, 2, function(err, limited) {
        if(limited)
        {
            // Don't do anything, wait some amount of time 
            // and check rate limit again 
            setTimeout(done, 1000*5);
        }
        else
        {
            // Do work 
            count++;
            done();
        }
    })
}, function() {
    return count < 10;
}, function(err) {
    // Done 
    process.exit(0);
});