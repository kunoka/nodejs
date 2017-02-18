/**
 * Created by harry on 11/9/16.
 */

// 1.1
// var person = require('./1.1'); //当前目录为./,不能使用person,只有原生模块才可以直接使用name
// var Person = new person;
// person.eat();

// 1.2
// var person = require('./1.2'); //当前目录为./,不能使用person,只有原生模块才可以直接使用name
// person.Person.eat();

//1.3
// var person = require('./1.3');
// console.log(person);

var person = require('./1.4');
console.log(person.arr);