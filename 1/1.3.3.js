/**
 * Created by harry on 9/13/16.
 */
var dns = require('dns');
dns.resolve4('www.qq.com', function(address){
    console.log(address);
    console.log(new Date());
});
