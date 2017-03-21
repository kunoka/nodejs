/**
 * Created by gao on 2017/3/12.
 */
global.BASE_DIR = __dirname;
global.APP = BASE_DIR + '/app';
global.CON = APP + "/controller/";
global.LIB      = BASE_DIR + "/node_modules/";
global.STATIC   = BASE_DIR + "/static/";
global.VIEW     = BASE_DIR + "/view/";
global.lib = {
    fs : require('fs'),
    http : require('http'),
    url : require('url'),
    jade : require('jade'),
    socket      : require('socket.io'),
    router : require('./app/core/router.js'),
    querystring : require('querystring'),
    httpParam   : require(LIB + 'http_param'),
    session   : require(LIB + 'node_session'),
    staticModule : require(LIB + 'static_module')
};
global.PATH = '';
global.onlineList = [];
global.app = lib.http.createServer(function(req, res) {
    res.render = function(){
        var template = arguments[0]; // Users/gary/git/nodejs/3/7/view/index.jade
        var options = arguments[1]; // option
        var str = lib.fs.readFileSync(template, 'utf8');
        var fn = lib.jade.compile(str, { filename: template, pretty: true });   // jade module 功能
        var page = fn(options);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page);
    };
    lib.router.router(res, req);

});

global.io = lib.socket.listen(app);
app.listen(3000);

// global.io = lib.socket.listen(app);
console.log('server is running on localhost:3000');

