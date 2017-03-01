/**
 * Created by harry on 24/02/2017.
 */
var BASE_DIR = __dirname;
var fs = require('fs');

fs.chmod(BASE_DIR + '/dan.txt', '777', function(err){
    if (err) throw err;
    console.log('chmod completed');
});

console.log('Stop here.');