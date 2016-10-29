/**
 * Created by harry on 10/9/16.
 */
exports.name = "aa";
exports.happy = function(){
    console.log("mm");
}
console.log(exports);

module.exports.name = "aa";
module.exports.happy = function(){
    console.log("mm");
}
console.log(module.exports);