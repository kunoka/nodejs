/**
 * Created by harry on 25/03/2017.
 */

var _res, _req;
var querystring = require('querystring');
var crypto = require('crypto')
var fs = require('fs');
var jade = require('jade');
var http_param = require('./http_param');


exports.init = function(res, req) {
    _res = res;
    _req = req;
}

exports.index = function(res, req) {
    res.render = function(){

        var template = arguments[0]; // Users/gary/git/nodejs/3/7/view/index.jade
        var options = arguments[1]; // option
        var str = fs.readFileSync(template, 'utf8');
        var fn = jade.compile(str, { filename: template, pretty: true });   // jade module 功能
        var page = fn(options);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page);
    }

    var filepath = __dirname + '/view/index.jade';
    res.render(filepath);
}

exports.encrypt = function() {
        var key = http_param.GET('key')
        , plaintext = http_param.GET('plaintext')
        //创建一个 cipher 加密对象，第一个参数算法类型，第二个需要加密的私钥
        , cipher = crypto.createCipher('aes-256-cbc', key)
        // 第一个参数是要加密的内容，第二个参数编码方式(utf8,ascii,binary)，第三个参数已加密内容的输出编码方式
    cipher.update(plaintext, 'utf8', 'hex');
    var encryptedPassword = cipher.final('hex'); //返回所有剩余的加密内容
    _res.writeHead(200, {'Content-Type': 'text/plain'});
    _res.end(encryptedPassword);
}

exports.decrypt = function() {
    var key = http_param.GET('key')
        , plaintext = http_param.GET('plaintext')
        //创建一个 decipher 解密对象，第一个参数算法类型，第二个需要解密的私钥
        , decipher = crypto.createDecipher('aes-256-cbc', key);	//获取 Decipher 解密对象
    decipher.update(plaintext, 'hex', 'utf8');
    var decryptedPassword = decipher.final('utf8');
    _res.writeHead(200, {'Content-Type': 'text/plain'});
    _res.end(decryptedPassword);
}