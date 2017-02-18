/**
 * Created by harry on 11/9/16.
 */

var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.listen(3001);
// io.set('log level',1); //将 socket.io 中的debug信息关闭

function handler (req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return  res.end('Error loading index.html');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}
io.sockets.on('connection', function(socket){
    socket.on('msg', function(data){
        console.log(data)
        if(data.state){
            if(data.state === 'success'){
                socket.emit('msg',{me:'very good'});
            }else{
                socket.emit('msg',{other:'that is all'});
            }
        }else{
            socket.emit('msg',{other:'that is all'});
        }
    });
});