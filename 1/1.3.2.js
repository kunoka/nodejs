/**
 * Created by harry on 9/13/16.
 */

function waitFive(name,function_name){
    var start  = new Date();

    var range = 0;

    while(range < 5000){
        var now = new Date();
        range = now - start;
        //function_name(range);
    }

    function_name(name);
}

function sayMe(name){
    console.log(name);
}
waitFive('Here we go', sayMe);
console.log("it is over")