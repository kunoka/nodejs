/**
 * Created by harry on 18/02/2017.
 */

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.end('you are so good'); //'Content-Type':'text/plain'
    //'Content-Type':'text/html'
    res.end('<http><head><body><div style="width:500px;height:300px;background: yellow;">我是一个返回页面</div></body></head></http>');
}).listen(3000);
console.log('you are running on port 3000');