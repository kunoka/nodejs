/**
 * Created by gao on 2017/3/12.
 */
var req, res;

module.exports.init = function(respond, request){
    req = request;
    res = respond;
};

module.exports.gotoIndex = function() {
    var userUrl = PATH + "/view/index.jade";
    res.render(userUrl);
};

module.exports.gotoLive = function() {
    var userUrl = PATH + "/view/live.jade";
    res.render(userUrl);
}
