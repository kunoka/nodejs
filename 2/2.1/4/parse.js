/**
 * Created by harry on 18/02/2017.
 */
var fs = require('fs');
var dns = require('dns');
var querystring = require('querystring');
var url = require('url');

module.exports.goIndex = function(res, req){
    var path = __dirname + '/index.html';
    var file = fs.readFileSync(path);
    res.end(file);
};

module.exports.parseDns = function(res, req){

    var dataPost = '';
    req.addListener('data', function(dataPostChunk){
        dataPost += dataPostChunk;
        console.log('dataPost-data: ' + dataPost);
    });

    req.addListener('end', function(){ // 【注意】end的回调里没有返回值
        getDns(dataPost,function(domain, address){
            console.log('getDns-callback:' + address);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('<html><div style="text-align: center">Domain: <span style="text-align: center">' + domain + '</span>IP: <span style="color: red">'+address.join(',') + '</span></div></html>')
        });
        return;
    });
};

function getDns(dataPost, callback){
    // var a = url.parse('/index.html');
    // // debugger;
    // console.log(a);
    var domain = querystring.parse(dataPost).search_dns;
    console.log('domain: ' + domain);
    dns.resolve(domain, function(err, address){
        if(!address){
            console.log(['不存在的域名']);
            return;
        }else{
            callback(domain, address);
        }
    })
}