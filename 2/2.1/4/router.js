/**
 * Created by harry on 18/02/2017.
 */
var parse = require('./parse');

module.exports.router = function(res, req, pathname){
    switch(pathname){
        case '/index':
            parse.goIndex(res, req);
            break;
        case '/parse':
            parse.parseDns(res, req);
            break;
        default:
            parse.goIndex(res, req);
    }
};