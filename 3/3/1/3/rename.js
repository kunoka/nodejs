/**
 * Created by harry on 24/02/2017.
 */
var BASE_DIR = __dirname;
var fs = require('fs');

fs.stat(BASE_DIR + '/dan.txt', function(err, stats){
    if (err) throw err;
    console.log(stats);
});

console.log('Stop here.');