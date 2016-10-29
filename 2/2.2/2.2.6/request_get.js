/**
 * Created by harry on 10/23/16.
 */

var request = require('request');
request.get('http://127.0.0.1:1337', function(error, response, result){
    //console.log(error);
    ////console.log(response);
    console.log(result);
})