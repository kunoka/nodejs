/**
 * Created by harry on 10/29/16.
 */

var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
// 应用http的createServer方法创建服务器
http.createServer(function(req, res){
    if(req.url == '/upload' && req.method.toLowerCase() === 'post'){
    // parse a file upload
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            console.log(err);
            console.log('====================================');
            console.log(fields);
            console.log('====================================');
            console.log(files);
            res.writeHead(200,{'content-type':'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields:fields, files:files}));
        });

        return;
    }
    // show a file upload form
    res.writeHead(200, {'content-type':'text/html'});
    /*http响应html信息*/
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
            '<input type="text" name="title"><br>'+
            '<input type="file" name="upload" multiple="multiple"><br>'+
            '<input type="submit" value="Upload">'+
            '</form>'
    );
}).listen(8080);
