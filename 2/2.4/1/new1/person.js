/**
 * Created by harry on 19/02/2017.
 */
//方式1:
// function person() {
//     this.eat = function(){
//         console.log('eat method');
//     };
//
//     this.say = function(){
//         console.log('say method');
//     }
//
// }
// module.exports = person;
//方式2:
module.exports = function person() {
    this.eat = function(){
        console.log('eat method');
    };

    this.say = function(){
        console.log('say method');
    }

};
//方式3: 这种方式导出的是peron.person对象为function
// module.exports.person = function () {
//     this.eat = function(){
//         console.log('eat method');
//     };
//
//     this.say = function(){
//         console.log('say method');
//     }
//
// };