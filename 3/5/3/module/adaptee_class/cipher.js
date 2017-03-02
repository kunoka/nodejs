/* hmac.js */
var crypto = require('crypto');  
module.exports = function (){
	this.encode = function(){
	var algorithm  = arguments[0] ? arguments[0] : null 	//算法类型 sha1 md5
	  , enstring   = arguments[1] ? arguments[1] : '' 		//需要加密的字符串或者二进制数据
	  , returnType = arguments[2] ? arguments[2] : '' 		//输出返回类型
	  , encodeKey  = arguments[3] ? arguments[3] : ''		//加密使用的私钥
	  , encodeType = arguments[4] ? arguments[4] : '';		//加密时需要的加密编码 binary, ascii or utf-8
		var cipher = crypto.createCipher(algorithm, encodeKey);
		cipher.update(enstring, encodeType, returnType);	//使用参数更新加密内容
		return cipher.final(returnType)		//返回加密内容
	}
	this.decode = function(){
		var algorithm  = arguments[0] ? arguments[0] : null 	
		  , enstring   = arguments[1] ? arguments[1] : '' 
		  , returnType = arguments[2] ? arguments[2] : '' 
		  , encodeKey  = arguments[3] ? arguments[3] : ''
		  , encodeType = arguments[4] ? arguments[4] : '';
		var decipher = crypto.createDecipher(algorithm, encodeKey); 
		decipher.update(enstring, encodeType, returnType);
		return decipher.final(returnType);	//返回解密内容
	}
}