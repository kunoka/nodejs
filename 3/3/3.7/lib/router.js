/**
 * Created by gao on 2017/3/12.
 */
var req, res;

module.exports.init = function(respond, request){
    req = request;
    res = respond;
};

module.exports.gotoIndex = function() {
    var userUrl = BASE_DIR + "/view/index.jade";
    res.render(userUrl);
};

module.exports.gotoLive = function() {
    var userUrl = BASE_DIR + "/view/live.jade";
    res.render(userUrl);
}
