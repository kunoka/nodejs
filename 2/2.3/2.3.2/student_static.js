/**
 * Created by harry on 10/29/16.
 */
var util = require('util');
var Person = require('./person');

function Student(){
    Person.call(this);
    util.inherits(Student, Person);
    this.study = function(){
        console.log('Study~~!!');
    }
}

var person = new Person();
var student = new Student();
// exports.study = function(){
//     console.log('Study~~!!');
// };
exports.study = student.study;
exports.eat = person.eat;
exports.sleep = person.sleep;

