/**
 * Created by harry on 24/02/2017.
 */
var BASE_DIR = __dirname;
var fs = require('fs');

fs.exists(BASE_DIR + '/dan.txt', function(existBool){
    if (existBool) {
        console.log('danhuang.txt exist');
    }else{
        console.log('danhuang.txt not exist');
    }
});
//可以验证本身文件的存在
fs.exists(BASE_DIR + '/rename.js', function(existBool){
    if (existBool) {
        console.log('rename.js exist');
    }else{
        console.log('rename.js not exist');
    }
});