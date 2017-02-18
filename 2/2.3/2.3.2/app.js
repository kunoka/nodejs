/**
 * Created by harry on 10/29/16.
 */
/*
var util = require('util');
var events = require('events');

function MyStream(){
    // events.EventEmitter.call(this);
}
/!*应用 inherits 来实现 MyStream 继承 EventEmitter *!/
util.inherits(MyStream, events.EventEmitter);

MyStream.prototype.write = function(data){
    this.emit("data", data);
}

var stream = new MyStream();

console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_ === events.EventEmitter);

stream.on("data", function(data){
    console.log('Received data: "' + data + '"');
})
stream.write("it works!");
*/
var Person = require('./person');
var Student = require('./student');
var Teacher = require('./teacher');
var Coder = require('./Coder');

var personObj = new Person();
var studentObj = new Student();
var teacherObj = new Teacher();
var coderObj = new Coder();

// 执行 personObj 对象的所有方法 sleep 和 eat
console.log('-----for base classs of person -----');
personObj.sleep();
personObj.eat();
console.log('-----------------------------------');

// 执行 studentObj 对象的所有方法 sleep, eat 和 study
console.log('-----for classs of student -----');
studentObj.sleep();
studentObj.eat();
studentObj.study();
console.log('-----------------------------------');

// 执行 teacherObj 对象的所有方法 sleep, eat 和 teach
console.log('-----for classs of teacher -----');
teacherObj.sleep();
teacherObj.eat();
teacherObj.teach();
console.log('-----------------------------------');

// 执行 coderObj 对象的所有方法 sleep, eat 和 oode
console.log('-----for classs of coder -----');
coderObj.sleep();
coderObj.eat();
coderObj.code();
console.log('-----------------------------------');