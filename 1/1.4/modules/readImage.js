/**
 * Created by harry on 18/02/2017.
 */
var fs = require('fs');
module.exports = {
    readImage : function(path, res){
        fs.readFile(path, 'binary', function(err, file){
            if(err){
                console.log(err);
                return;
            }else{
                console.log('输出文件');
                res.writeHead(200, {'Content-Type':'image/png'});
                // console.log(file);
                res.write(file, 'binary');
                res.end();
            }
        })
    }
};