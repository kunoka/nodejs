/**
 * Created by harry on 24/02/2017.
 */
var BASE_DIR = __dirname;
var fs = require('fs');

fs.unlink(BASE_DIR + '/dan.txt', function(err){
    if (err) {
        console.log('danhuang.txt exist');
    }else{
        console.log('danhuang.txt not exist');
    }
});