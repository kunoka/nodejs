/**
 * Created by harry on 18/02/2017.
 */
var app = require('http').createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var filename = __dirname + '/index_client.html';
    console.log(filename);
    var fs = require('fs');
    fs.readFile(filename,function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(8080);
console.log('server is running on localhost:3000');

var io = require('socket.io').listen(app);
io.sockets.on('connection', function(socket){
    socket.emit('news', {'hello':'world'});
    socket.on('my other event', function(data){
        console.log(data);
    })
})