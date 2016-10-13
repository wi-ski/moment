moment = require('./min/moment.min.js');

var m = moment.parseZone('2016-05-04T00:00:00Z');
var mformat = m.format('M D YYYY HH:mm:ss ZZ');


console.log(mformat, mformat == '5 4 2016 00:00:00 +0000')
