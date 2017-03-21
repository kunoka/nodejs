/**
 * Created by gao on 2017/3/12.
 */
var Login = require(CON + 'login');
module.exports.router = function(res, req) {
    var pathName = decodeURI(lib.url.parse(req.url).pathname);
    // console.log('router.pathname: ' + pathName);
    lib.httpParam.init(res, req);
    global.sessionLib = lib.session.start(res, req);

    var model = pathName.substr(1);
    var controller = lib.httpParam.GET('c');
    var Class = '';

    if(pathName == '/favicon.ico'){
        return;
    }else if(pathName == '/'){
        gotoIndex(res);
        return;
    }

    try {
        var Class = require(CON + model);
    }
    catch (err) {
        lib.staticModule.getStaticFile(pathName, res);
        // console.log('<<<<<<<<<<<<< error >>>>>>>>>>>>>' + new Date());
        return;
    }
    if(Class) {
        var login = new Login(res, req);
        var ret = login.checkSession(model);
        if(ret) {
            var object = new Class(res, req);
            object[controller].call();
        }else {
            gotoIndex(res);
        }
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('can not find resource');
    }
}

gotoIndex = function(res) {
    var userUrl = BASE_DIR + "/view/index.jade";
    res.render(userUrl);
};