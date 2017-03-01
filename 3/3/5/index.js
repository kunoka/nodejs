/**
 * Created by harry on 26/02/2017.
 */
// $('textarea').attr('value', new Date());

var socket = io.connect('http://localhost:8080');
var a = '';
socket.on('change_from_server', function (data) {
    $('textarea').attr('value', data.msg);
    if(a){
        alert(a + '保存完毕');
    }
});

$(document).ready(function(){
    $('#upload').click(function(){
        socket.emit('data', {msg : $('textarea').attr('value')});
        a = 123;
    });
    // $('textarea').keyup(function(){
    //     socket.emit('data', {msg : $('textarea').attr('value')});
    // })

})