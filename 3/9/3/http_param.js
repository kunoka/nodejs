var _res, _req;
var url = require('url');
var querystring = require('querystring');

exports.init = function(res, req) {
	_res = res;
	_req = req;
}

exports.GET = function(key) {

	if(_req.url) {
		var paramStr = url.parse(_req.url).query;
		var param = querystring.parse(paramStr);
		return param[key] ? param[key] : '';
	}

}

exports.POST = function(key, callback) {

	var postData = '';
	_req.addListener("data", function(dataChunk) {
		postData += dataChunk;
	});

	_req.addListener('end', function(){
		var param = querystring.parse(postData);
		if(key != ''){
			callback(param[key] ? param[key] : '');
			return;
		}
		callback(param);
	})
}