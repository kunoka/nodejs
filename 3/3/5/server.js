/**
 * Created by harry on 26/02/2017.
 */
// 2.2.5 socket
function defaultIndex(res, req) {
    res.render('index.jade',{msg:'1111'});
}

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    querystring = require('querystring'),
    // httpParam = require('./http_param'),
    staticModule = require('./static_module.js'),
    jade = require('jade'),
    socket = require('socket.io');
var BASE_DIR = __dirname,
    filePath = BASE_DIR + '/test.txt';

var app = http.createServer(function(req, res){

    //自定义render 加载jade模板
    res.render = function(template, options){
        var str = fs.readFileSync(template, 'utf-8');
        var fn = jade.compile(str, {filename: template, pretty: true});
        var page = fn(options);
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(page);
    }
    var pathname = url.parse(req.url).pathname;
    switch (pathname) {
        case '/':
            defaultIndex(res, req);
            break;
        case '/index':
            defaultIndex(res, req);
            break;
        case '/favicon.ico':
            return;
        // case '/socket.io':
        //     return;

        default:
            staticModule.getStaticFile(pathname, res);
            break;
    }
    });

var io = socket.listen(app);
app.listen(8080);

console.log('server is running on localhost:8080');

// io.set('log level', 1);//将socket.io中的debug信息关闭

io.sockets.on('connection', function (socket) { //io.sockets.on和io.on都可以使用
    console.log('filePath: ' + filePath);
    var message = fs.readFileSync(filePath,'utf-8');
    // 监听 change_from_server 消息
    socket.emit('change_from_server', { msg: message });
    socket.on('success', function(data){
        console.log(data.msg);
    });
    socket.on('data', function (data) {
        writeFile(data.msg, function(){
            socket.emit('change_from_server', {msg: data.msg});
        });
    });
});

function writeFile(msg, callback){
    fs.writeFile(filePath, msg, function(err){
        if(err){
            console.log('write file error');
        }
        callback();
    });
}
