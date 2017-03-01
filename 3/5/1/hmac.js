/**
 * Created by harry on 01/03/2017.
 */
var crypto = require('crypto');

// binary md5
var hmac = crypto.createHmac("md5", 'dan');
hmac.update(new Buffer("huangdanhua", "binary"));
var encode = hmac.digest("hex");
console.log('binary data: ' + encode);

// // string md5
// var hash = crypto.createHash("md5");
// hash.update("huangdanhua");
// var encode = hash.digest("hex");
// console.log('string: ' + encode);