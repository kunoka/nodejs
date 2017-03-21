/**
 * Created by harry on 06/03/2017.
 */
var Login = require(CON + 'login');
exports.router = function(res, req){
    var pathname = decodeURI(lib.url.parse(req.url).pathname);
    lib.httpParam.init(req, res);
    global.sessionLib = lib.session.start(res, req);
    var model = pathname.substr(1)
        , controller = lib.httpParam.GET('c')
        , Class = '';
    if(pathname == '/favicon.ico'){
        return;
    }else if(pathname == '/'){
        res.render(VIEW + 'index.jade');
        return;
    }

    try {
        Class = require(CON + model);
    }
    catch (err) {
        console.log('静态请求');
        lib.staticModule.getStaticFile(pathname, res, req, BASE_DIR);
        return;
    }
    if(Class){
        console.log(Class);
        var login = new Login(res, req);
        var ret = login.checkSession(model);
        if(ret) {
            var object = new Class(res, req);
            console.log('object');
            console.log(object);
            object[controller].call();
        } else {
            res.render(VIEW + 'index.jade');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('can not find source');
    }
}