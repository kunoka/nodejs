/**
 * Created by harry on 11/6/16.
 */

var target = require("./target")
var util = require("util")
var adaptee = require("./adaptee")

function Adapter(){
    target.call(this)

    this.request = function(){
        var adapteeObj = new adaptee();
        adapteeObj.specialRequest();
    }
}

util.inherits(Adapter, target);
module.exports = Adapter;




