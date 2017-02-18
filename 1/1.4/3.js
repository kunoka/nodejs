/**
 * Created by harry on 18/02/2017.
 */

var fs = require('fs');

// function returnData(path) {
//     console.log(path);
//     getFileData(path);
// }
//
// function getFileData(path){
//     setTimeout(function(){
//         fs.readFile(path, function(err, file){
//             if(err){
//                 console.log('error');
//                 return;
//             }else{
//                 console.log(file,'binary');
//                 console.log(file);
//             }
//         });
//     }, 1000);
// }
//
// returnData('./public/file/index.conf');

function returnData(){
    getFileData(function(data){
        console.log(data);
    });
}
function getFileData(callback){
    setTimeout(function() {
        fs.readFile('./public/file/index.conf', function(err, file){
            if(err){
                console.log(err);
                return;
            }else{
                callback(file);
            }

        })
    }, 1000);
}

returnData();