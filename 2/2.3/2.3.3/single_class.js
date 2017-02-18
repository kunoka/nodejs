/**
 * Created by harry on 10/29/16.
 */
var _instance = null;
module.exports = function(time){
    function Class(time){
        this.name = 'danhuang';
        this.book = 'Node.js';
        this.time = time;
    }

    Class.prototype = {
        // constructor: Class, //有没有这一行都可以正确执行
        show: function(){
            console.log(this.book + ' is write by ' + this.name + ' ,time is ' + this.time);
        }
    }
    this.getInstance = function(){
        if(_instance === null){
            _instance = new Class(time);
        }
        return _instance;
    }
}
