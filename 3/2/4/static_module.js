/**
 * Created by harry on 22/02/2017.
 */

var sys = require('util');
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var BASE_DIR = __dirname,
    CONF = BASE_DIR + '/',
    STATIC = BASE_DIR,
    mmieConf;



function getUrlConf(){
    var routerMsg = {};
    try {
        var str = fs.readFileSync(CONF + 'mmie_type.json', 'utf-8');
        routerMsg = JSON.parse(str);
    }catch(e) {
        console.error("JSON parse fails")
    }
    return routerMsg;
}

exports.getStaticFile = function(pathname, req, res){
    var extname = path.extname(pathname);
    extname = extname ? extname.slice(1) : '';
    var realPath = STATIC + pathname;
    console.log('extname: ' + extname);
    mmieConf = getUrlConf();
    console.log(mmieConf[extname]);
    var mmieType = mmieConf[extname] ? mmieConf[extname] : 'text/plain';


    // 静态资源使用缓存机制
    // var CACHE_TIME = 60*60*24*365;
    var CACHE_TIME = 20;

    fs.exists(realPath, function(exists){
        if(!exists){
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write('This request URL ' + pathname + " was not found on this server.");
            res.end();
        }else{
            var fileInfo = fs.statSync(realPath); //返回数组对象
            var lastModified = fileInfo.mtime.toUTCString();
            /*设置缓存*/
            if (mmieConf[extname]) {
                var date = new Date();
                date.setTime(date.getTime() + CACHE_TIME * 1000);
                res.setHeader("Expires", date.toUTCString());
                res.setHeader("Cache-Control", "max-age=" + CACHE_TIME);
            }
            // console.log(req.headers['if-modified-since']);
            // console.log("lastModified: " + lastModified);

            if (req.headers['if-modified-since'] && lastModified == req.headers['if-modified-since']) {
                res.writeHead(304, "Not Modified");
                res.end();
            } else {
                fs.readFile(realPath, 'binary', function(err, file){
                    if (err) {
                        res.writeHead(500, {'Content-Type' : 'text/plain'});
                        res.end(err);
                    } else {
                        // console.log('mmieType: ' + mmieType);
                        res.setHeader("Last-Modified", lastModified);
                        res.writeHead(200, {'Content-Type':mmieType});
                        res.write(file, 'binary');
                        res.end();
                    }
                });
            }
        }
    });
}

