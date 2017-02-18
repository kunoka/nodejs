/**
 * Created by harry on 10/29/16.
 */
var Single = require('./single_class');
var singleObj1 = new Single('2012-11-10');
var singleClass1 = singleObj1.getInstance();
singleClass1.show();

var singleObj2 = new Single('2012-11-20');
var singleClass2= singleObj2.getInstance();
singleClass2.show();