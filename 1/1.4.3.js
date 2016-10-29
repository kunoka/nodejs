/**
 * Created by harry on 9/13/16.
 */
var fs = require('fs');

function getFileData(callback){
    fs.readFile('1.3.2.js', function(data){
        console.log(data);
        callback(data,"second parameter");
    });
}

function returnData(){
    getFileData(function(data,txt){
        setTimeout(function(){
            //callback(data);
            console.log(data);
            console.log(txt);
            console.log("Action Done");
        },1000);
    });
}

returnData();