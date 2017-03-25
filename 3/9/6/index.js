/**
 * Created by harry on 24/03/2017.
 */

var querystring = require('querystring');
var fs = require('fs');

module.exports.gotoIndex = function(res, req) {

   var action = pathArr.shift();
    if(action) {

        if(action === 'read'){
            fs.readdir(__dirname, function(err, files) {
                // var returntxt = files.toString();
                var returntxt = files.toString();
                var returntxt = JSON.stringify(files);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(returntxt);
            })
        }else {
            console.log('action: ' + action);
            var query = querystring.parse(action);
            var file = __dirname + '/' + (query.file);
            var returntxt = '';
            if(fs.existsSync(file)) {
                fs.unlink(file, function(){
                    returntxt = 'delete file success';
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end(returntxt);
                })
            }else{
                returntxt = 'not exist file';
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(returntxt);
            }

        }
    }

}