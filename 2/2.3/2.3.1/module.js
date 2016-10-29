/**
 * Created by harry on 10/29/16.
 */

exports.name = 'danhuang';
var myName = 'idanhuang';

exports.init = function(itName){
    if(!itName){
        setName(myName);
    }else{
        setName(itName);
    }
}

exports.show = function () {
    console.log(name);
}
function setName(myName) {
    name = myName;
}