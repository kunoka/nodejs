/**
 * Created by harry on 22/02/2017.
 */
// var https = require('https');
// var fs = require('fs');
//
// var options = {
//     key: fs.readFileSync('./server-key.pem'),
//     ca: [fs.readFileSync('./ca-cert.pem')],
//     cert: fs.readFileSync('./server-cert.pem')
// };
//
// https.createServer(options,function(req,res){
//     res.writeHead(200);
//     res.end('hello world wkwkwkw\n');
// }).listen(3000,'127.0.0.1');

    //打包服务器证书
var https = require('https');
var fs = require('fs');

var options = {
    pfx:fs.readFileSync('./keys/server.pfx'),
    passphrase:'1111'
};

https.createServer(options,function(req,res){
    res.writeHead(200);
    res.end('hello world\n');
}).listen(3000,'127.0.0.1');