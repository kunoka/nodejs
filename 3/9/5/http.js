/**
 * Created by harry on 22/02/2017.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){

    var pathname = url.parse(req.url).pathname;
    var realPath = __dirname + pathname;

    if (pathname == '/index' || pathname == '/'){
        goIndex(res, __dirname + '/index.html');
    }else{
        dealWithStatic(pathname, realPath, res);
    }

    // console.log(realPath);
}).listen(3000);
console.log('server is running on localhost:3000');
function goIndex(res, realPath){
    // console.log(realPath + '.html');
    res.writeHead(200, {'Content-Type':'text/html'});
    var file = fs.readFileSync(realPath);
    res.end(file);

}
function dealWithStatic(pathname, realPath, res){
    fs.exists(realPath, function(exists){
        if(!exists){
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('could not find resource ' + pathname.substr(1));
        }else{
            var position = pathname.lastIndexOf('.');
            var type = pathname.substr(position+1, pathname.length);

            var mmieType;
            switch (type) {
                case 'css':
                    console.log('css: ' + type);
                    mmieType = 'text/css';
                    break;
                case 'javascript':
                    console.log('javascript: ' + type);
                    mmieType = 'text/javascript';
                    break;
                case 'png':
                    mmieType = 'image/png';
                    break;
                case 'jpg':
                    mmieType = 'image/jpg';
                    break;
                default:
                    mmieType = 'text/plain';
                    break;
            }
            fs.readFile(realPath, 'binary', function(err, file){
                if (err) {
                    res.writeHead(500, {'Content-Type' : 'text/plain'});
                    res.end(err);
                } else {
                    console.log('mmieType: ' + mmieType);
                    res.writeHead(200, {'Content-Type':mmieType});
                    res.write(file, 'binary');
                    res.end();
                }

            })

        }
    })
}