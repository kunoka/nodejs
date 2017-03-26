/**
 * Created by harry on 25/03/2017.
 */
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message', function (msg, rinfo) {
    console.log('server get: ' + msg + " from " + rinfo.address + ':' + rinfo.port);
    // server 端发送消息
    var message = new Buffer("success get message for client");
    server.send(message, 0, message.length, rinfo.port, rinfo.address);
});

server.on('listening', function() {
    var address = server.address();
    console.log("server listening " + address.address + ":" + address.port);

});
server.bind('41234');

// var dgram = require('dgram');
// var serverSocket = dgram.createSocket('udp4');
//
// serverSocket.on('message', function(msg, rinfo){
//     console.log('recv %s(%d bytes) from client %s:%d\n', msg, msg.length, rinfo.address, rinfo.port);
//
//     //echo to client
//     serverSocket.send(msg, 0, msg.length, rinfo.port, rinfo.address);
// });
//
// //    err - Error object, https://nodejs.org/api/errors.html
// serverSocket.on('error', function(err){
//     console.log('error, msg - %s, stack - %s\n', err.message, err.stack);
// });
//
// serverSocket.on('listening', function(){
//     console.log("echo server is listening on port 7.");
// })
//
// serverSocket.bind(7001)
