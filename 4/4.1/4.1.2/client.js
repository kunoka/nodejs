/**
 * Created by harry on 25/03/2017.
 */

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer("hi danhuang, node.js is waiting for you");

client.send(message, 3, message.length-8, 41234, "localhost");

client.on("message", function(msg, rinfo) {
    console.log("client: " + msg);
})
// client.close();
// client.bind(8009);

// var dgram = require('dgram');
// var clientSocket = dgram.createSocket('udp4');
// var messages = [
//     'Hello, Echo Server.',
//     'Are you OK?',
//     'I am happy.',
//     'A little panda found a pumpkin.'
// ];
//
// var index = 0;
// function sendMsg(){//send to server
//     var msg = messages[index];
//     index = index + 1;
//     if(index == messages.length){
//         index = 0;
//     }
//     clientSocket.send(msg, 0, msg.length, 7001, "localhost");
// }
//
// //start a timer to send message to echoServer
// setInterval(sendMsg, 1000);
//
// clientSocket.on('message', function(msg, rinfo){
//     console.log('recv %s(%d) from server\n', msg, msg.length);
// });
//
// clientSocket.on('error', function(err){
//     console.log('error, msg - %s, stack - %s\n', err.message, err.stack);
// });
//
// clientSocket.bind(54321);
