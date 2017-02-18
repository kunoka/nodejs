/**
 * Created by harry on 18/02/2017.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var dns = require('dns');

http.createServer(function(req, res){
    // console.log('req.url: ' + req.url);
    var pathname = url.parse(req.url).pathname;
    // console.log('pathname: ' + pathname);
    req.setEncoding('utf8');
    res.writeHead(200, {'Content-Type':'text/html'});
    // console.log(pathname);
    router(res, req, pathname);
    /*
    //Async读取
    // fs.readFile(readPath, function(err, file){
    //     res.end(file);
    // })
    */
    /*
    //Sync读取
    // var file = fs.readFileSync(readPath);
    // res.end(file);
    */
}).listen(3000);
console.log('server running on 3000');

function router(res, req, pathname){
    switch (pathname) {
        case 'index.html':
            goIndex(res, req);
            break;
        case '/parse':
            parseDNS(res, req);
            break;
        default:
            goIndex(res, req);
    }
}

function goIndex(res, req){
    var pathname = url.parse('index.html').pathname;
    var readPath = __dirname + '/' + pathname;
    var file = fs.readFileSync(readPath);
    res.end(file);
}
function parseDNS(res, req){
    var postData = '';
    req.addListener('data', function (postDataChunk) {
        postData += postDataChunk;
    });

    req.addListener('end', function(){
        // console.log('end: ' + postData);
        var retData = getDns(postData, function(domain, address){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end('<html><div style="text-align: center">Domain: <span style="text-align: center">' + domain + '</span>IP: <span style="color: red">'+address.join(',') + '</span></div></html>')
            
        });
        return;
    })
}

function getDns(postData, callback) {
    var domain = querystring.parse(postData).search_dns; //postData -> search_dns=www.qq.com
    dns.resolve(postData, function(err, address){ //address是数组
        if(!address){
            address = ['!不存在域名'+postData];
        }
        callback(domain, address);
    })
}