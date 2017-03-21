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

    this.imgJpg = function(){
        console.log('imgJpg');
        var file = fs.readFileSync(BASE_PATH + '/Scan.jpg');
        res.writeHead(200, {'Content-TYpe': 'image/jpg'});
        res.end(file);
    }

    this.imgPng= function(){
        console.log('imgJpg');
        var file = fs.readFileSync(BASE_PATH + '/tray.png');
        res.writeHead(200, {'Content-TYpe': 'image/png'});
        res.end(file);
    }

}