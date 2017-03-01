/**
 * Created by harry on 24/02/2017.
 */

//参考2.2.7

var formidable = require('formidable');
var url = require('url');
var http = require('http');
var httpParam = require('./index.js');
var fs = require('fs');
var staticModule = require('./static_module');
var jade = require('jade');
var BASE_DIR = __dirname;

function upload(res, req) {
    var timestamp = Date.parse(new Date());
    var form = new formidable.IncomingForm();

    form.parse(req, function(error, fields, files) {

        var fileName = timestamp + '_' + files.image.name;
        // console.log('fileName: ' + fileName);

        fs.renameSync(files.image.path, BASE_DIR + '/uploadFile/' + fileName);
        res.render('show_image.jade', {'imgUrl':'/uploadFIle/' + fileName})
    })
}
function showImage(res, req) {
    console.log('showImage');

}
function show(res, req) {
    console.log('show');

}

http.createServer(function(req, res){
    //
    res.render = function(template, options){
        var str = fs.readFileSync(template, 'utf-8');
        var fn = jade.compile(str, {filename: template, pretty: true});
        var page = fn(options);
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(page);
    }

    httpParam.init(res, req);

    var pathname = url.parse(req.url).pathname;
    console.log('pathname 1: ' + pathname);
    var pathname = decodeURI(url.parse(req.url).pathname);
    console.log('pathname 2: ' + pathname);
    switch(pathname) {
        case '/upload' : upload(res, req);
            break;
        case '/image' : showImage(res, req);
            break;
        case '/': httpParam.defaultIndex(res);
            break;
        case '/index' : httpParam.defaultIndex(res);
            break;
        case '/show' : show(res);
            break;
        default: staticModule.getStaticFile(pathname, res, req);
            break;
    }
}).listen(3000);
console.log('server is running on localhost:3000');
