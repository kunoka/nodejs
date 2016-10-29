/**
 * Created by harry on 10/29/16.
 */

var Person = require('./module');
console.log(Person.name);

Person.init('Node.js');
Person.show();
Person.init('');
Person.show();
console.log(Person.myName);