/**
 * Created by harry on 11/6/16.
 */
//实现target类可以通过adapter继承后改写 调用新的接口类adaptee中的方法
adapter = require("./adapter")
var target = new adapter();
target.request();
target.request1();