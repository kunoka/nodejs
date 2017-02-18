/**
 * Created by harry on 18/02/2017.
 */
// send image to client

var http = require('http');
var readImage = require('./modules/readImage');
var port  = 3000;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'image/png'});
    if (res.url !== '/favicon.ico') {
        // readImage.readImage('/Users/gary/git/nodejs/public/img/1.png', res); //绝对路径(absolute path)
        readImage.readImage('../../public/img/1.png', res); //相当路径(relative path)
        console.log('继续执行');
    }
    // res.end('server running on ' + port);
}).listen(port);
console.log('server running on ' + port);