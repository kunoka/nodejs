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

var BASE_DIR = __dirname;

function upload(res, req) {

    var readPath = __dirname + '/' + url.parse('show_image.html').pathname;
    var indexPage = fs.readFileSync(readPath);
    // console.log(readPath);
    var form = new formidable.IncomingForm();

    form.parse(req, function(error, fields, files) {
        // console.log(files.image);
        fs.renameSync(files.image.path, BASE_DIR + '/uploadFile/test1.jpg');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(indexPage);
    })
}
function showImage(res, req) {
    console.log('showImage');

}
function show(res, req) {
    console.log('show');

}

http.createServer(function(req, res){
    httpParam.init(res, req);

    var pathname = url.parse(req.url).pathname;
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
