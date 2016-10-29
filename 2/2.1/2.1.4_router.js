/**
 * Created by harry on 10/9/16.
 */
var dns = require('./2.1.4_dns_parse.js');
var index = require('./2.1.4_index.js');

module.exports.router = function(res, req, pathname){
    //console.log("router function executing...");
    //console.log(pathname);
    switch(pathname){
        case "/parse":
            dns.parseDns(res, req)
            break;
        default :
            index.goIndex(res, req)
    }
}