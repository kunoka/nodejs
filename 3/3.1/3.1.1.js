/**
 * Created by harry on 12/13/16.
 */
var http = require('http');
// 应用Node.js原生模块HTTP来实现Web服务器创建
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(1337,"127.0.0.1");
console.log('Server running at http:\\127.0.0.1:1337');