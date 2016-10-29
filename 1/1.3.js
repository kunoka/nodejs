/**
 * Created by Harmony on 2016/9/13.
 */
function Person(){
    this.think = function(callback){
        setTimeout(function(){
            console.log("I am thinkg...");
            callback();
        },5000);
    };

    this.answer = function(){
        console.log("I am answering...");
    }
}

var p  = new Person();
p.think(function(){
    console.log("I have completed thinking.");
});
p.answer();

/* 自己写的回调 定时器
function Person(){
    this.think = function(callback,i){
        console.log("I am thinking..."+i);
        callback();
    };

    this.answer = function(){
        console.log("I am answering");
    }
}

var p = new Person();
var i = 0;
p.answer();
var a = function(){
    if(i > 500) {
        return;
    }else {
        setTimeout(function(){
            p.think(function(){
                console.log("I am think function");
            },i);
            a();
            i++;
        },10);
    }
}


a();
*/


