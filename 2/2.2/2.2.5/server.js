/**
 * Created by harry on 10/15/16.
 */
/* 方法1： 用http,fs的方式也可以 */
//var app = require('http').createServer(handler),
//    io = require('socket.io').listen(app),
//    fs = require('fs');
//
//app.listen(8080);
//
// function handler (req, res) {
//     fs.readFile(__dirname + '/index.html',function (err, data) {
//         if (err) {
//             res.writeHead(500);
//             return res.end('Error loading index.html');
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(data);
//     });
// }

/* 方法2： 只用socket.io模块 */
//var io = require('socket.io').listen(8080);

/* 方法3：使用http和socket.io模块*/
//var server = require('http').createServer();
//var io = require('socket.io')(server);
//server.listen(8080);

/* 方法4：使用express,http和socket.io 模块*/
//var app = require('express')();
//var server = require('http').createServer(app);
//var io = require('socket.io')(server);
//server.listen(8080);

io.set('log level', 1);//将socket.io中的debug信息关闭

io.sockets.on('connection', function (socket) { //io.sockets.on和io.on都可以使用
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});