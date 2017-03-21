/**
 * Created by harry on 21/03/2017.
 */
var fs = require('fs');

module.exports = function(respond, request){

    var req, res;

    this.init = function(respond, request) {
        console.log('init');
        res = respond;
        req = request;
    }

    this.index = function(){
        console.log('index');
        var file = fs.readFileSync(BASE_PATH + '/index.html');
        res.writeHead(200, {'Content-TYpe': 'text/html'});
        res.end(file);
    }

}