/**
 * Created by harry on 24/02/2017.
 */
var BASE_DIR = __dirname;
var fs = require('fs');

fs.rename(BASE_DIR + '/dan.txt', BASE_DIR + '/dan.txt', function(err){
    if (err) throw err;
    console.log('rename completed');
});

console.log('Stop here.');