/**
 * Created by harry on 19/02/2017.
 */
var Animal = require('./animal');
var util = require('util');

function Duck (){
    Animal.call(this);
    util.inherits(Duck, Animal);
    this.say = function(){
        console.log('ga ga ga...');
    };
}

var duck = new Duck();
module.exports.say = duck.say;


