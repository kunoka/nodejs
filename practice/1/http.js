/**
 * Created by harry on 22/02/2017.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var jade = require('jade');

global.BASE_DIR = __dirname;

http.createServer(function(req, res){

    res.render = function(template, options){
        console.log(template);
        var str = fs.readFileSync(template, 'utf-8');
        var fn = jade.compile(str, {filename: template, pretty: true});
        var page = fn(options);
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(page);

        //新建文件
        var filePath = BASE_DIR + '/live_data.txt';
        fs.exists(filePath, function(existBool){
            if(existBool) {
                console.log('exist');
            } else {
                fs.writeFile(filePath, '', function(err){
                    if(err) {
                        return console.log(err);
                    }
                    console.log('The file was save!');
                })
            }
        })
    }


    var pathname = url.parse(req.url).pathname;
    var realPath = __dirname + pathname;

    console.log(pathname);
    switch (pathname) {
        case '/index.html':
            var indexPage = fs.readFileSync(realPath);
            res.render('index.jade');
            break;
        case '/style.css':
            var indexPage = fs.readFileSync(realPath);
            res.writeHead(200, {'Content-Type':'text/css'});
            res.end(indexPage);
        case '/logo.png':
            var indexPage = fs.readFileSync(realPath);
            res.writeHead(200, {'Content-Type':'image/png'});
            res.end(indexPage);
            break;
        case '/favicon.ico':
            return;
    }

}).listen(3000);
console.log('server is running on localhost:3000');
