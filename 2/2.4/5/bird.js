/**
 * Created by harry on 19/02/2017.
 */
var util = require('util');
var Animal = require('./animal');

function Bird (){
    Animal.call(this);
    util.inherits(Bird, Animal);
    this.say = function(){
        console.log('gi gi gi...');
    };
}

//增加方法
Bird.prototype.say = function(){
    console.log('I am singing...');
}
module.exports = Bird;


