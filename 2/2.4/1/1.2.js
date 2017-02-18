/**
 * Created by harry on 11/6/16.
 */

exports.Person =  { //module.exports也可以 exports只能暴露一个对象
    'eat': function(){
        console.log("eat method...");
    },

    'say' : function(){
        console.log("say method...");
    }
}