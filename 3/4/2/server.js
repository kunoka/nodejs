/**
 * Created by harry on 01/03/2017.
 */
var test = require('./testGlobal');
var sessions = new Object();
var start = function(res, req) {
    var conn = { res: res, req: req };
    var cookies = {};

    if (typeof conn.req.headers.cookie !== 'undefined') {
        conn.req.headers.cookie.split(';').forEach(function(cookie) {
            var parts = cookie.split('=');
            cookies[parts[0].trim()] = (parts[1] || '').trim();
        });
    } else {
        cookies.SESSID = 0;
    }

    var SESSID = cookies.SESSID;

    if(typeof sessions[SESSID] !== 'undefined') {
        session = session[SESSID];
        if (session.expires < Date()) {
            delete sessions[SESSID];
            return newSession(conn.res);
        }else {
            var dt = new Date();
            dt.setMinutes(dt.getMinutes() + 1);
            session.expires = dt;
            return sessions[SESSID];
        }
    } else {
        return newSession(conn.res);
    }
}

function newSession(res) {
    var chars = '0123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm';
    var SESSID = '';

    for (var i = 0; i < 40; i++){
        var rnum = Math.floor(Math.random()*chars.length);
        SESSID += chars.substring(rnum, rnum+1);
    }
    //避免重复
    if(typeof sessions[SESSID] !== 'undefined') {
        return newSession(res);
    }

    var dt = new Date();
    dt.setMinutes(dt.getMinutes() + 1);

    var session = {
        SESSID: SESSID,
        expires: dt
    };
    sessions[SESSID] = session;
    res.setHeader('Set-Cookie', 'SESSID=' + SESSID);
    return session;
}

function cleanSessions() {
    for (sess in sessions) {
        if(sess.expires < Date()) {
            delete sessions[sess.SESSID];
        }
    }
}

// exports.tart = start;

var app = require('http').createServer(function(req, res) {
    global.sessionLib = start(res, req);

    // test();
    console.log(req.headers);
    // console.log(sessionLib);
    //调用方法
    if(!sessionLib['username']) {
        sessionLib['username'] = 'danhuang';
    }

    cleanSessions();

}).listen(3000);
console.log('server is running on localhost:3000');

