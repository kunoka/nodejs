/**
 * Created by harry on 10/29/16.
 */
var util = require('util');
var Person = require('./person');

function Student(){
    Person.call(this);
    this.eat = function(){
        console.log('eat by overload function');
    }
    this.sleep = function(){
        console.log('sleep by overlaod function');
    }
    this.study = function(){
        console.log('I am learning - this');
    }
}
util.inherits(Student, Person);
Student.prototype.study = function(){
    console.log('I am learning - prototype');
}
module.exports = Student;