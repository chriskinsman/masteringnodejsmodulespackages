console.log('main starting');

var a = require('./a');
var b = require('./b');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);