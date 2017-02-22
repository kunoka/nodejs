/**
 * Created by harry on 10/23/16.
 */
/*
post也是传过来字符串，name=danhuang&book=node.js通过JSON.stringify(querystring.parse(postData))
转换成json格式的对象 {"name":"danhuang","book":"node.js"}
 */
var http = require('http'),
    querystring = require('querystring');
http.createServer(function(req, res) {
    var postData = "";
    req.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
    });
    req.addListener("end", function() {
        console.log(" <<<<<<<<< req.method: >>>>>>>>>" + req.method);
        // console.log("postData: " + JSON.stringify(postData));
        // console.log("querystring.parse(postData): " + querystring.parse(postData));
        // console.log("postStr: " + postStr);
        var postStr = JSON.stringify(querystring.parse(postData));
        // console.log("postStr: " + postStr);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(postStr+'\n' + req.method + "server has recieved the message");
    });
}).listen(1400, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1400/');