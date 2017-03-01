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

mmieConf = getUrlConf();

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

exports.getStaticFile = function(pathname, res){
    var extname = path.extname(pathname);
    extname = extname ? extname.slice(1) : '';
    // console.log('extname: ' + extname);
    var realPath = STATIC + pathname;
    // console.log('realPath: ' + realPath);

    // console.log('mmieConf: ' + mmieConf[extname]);
    var mmieType = mmieConf[extname] ? mmieConf[extname]: 'text/plain';

    fs.exists(realPath, function(exists){
        if(!exists){
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('could not find resource ' + pathname.substr(1));
        }else{
            fs.readFile(realPath, 'binary', function(err, file){
                if (err) {
                    res.writeHead(500, {'Content-Type' : 'text/plain'});
                    res.end(err);
                } else {
                    // console.log('mmieType: ' + mmieType);
                    res.writeHead(200, {'Content-Type':mmieType});
                    res.write(file, 'binary');
                    res.end();
                }

            })

        }
    });
}

