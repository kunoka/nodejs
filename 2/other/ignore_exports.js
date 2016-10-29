/**
 * Created by harry on 10/9/16.
 */

//module.exports = 'test for module.exports ignore!';
exports.name = 'danhuang';
/*定义showName函数，并显露给外部接口*/
module.exports.showName = function(){
    console.log('My name is Danhuang....');
};
//console.log(module.exports);
//console.log(exports);
