/**
 * Created by harry on 10/9/16.
 */
var dns = require('dns'),
    querystring = require("querystring");

module.exports.parseDns = function(res, req){
    var postData = "";
    req.addListener("data",function(postDataChunk){
        postData += postDataChunk;
    });

    /*HTTP响应html页面信息*/
    req.addListener("end", function(){
        //console.log(postData); //search_dns=www.qq.com
        var retData = getDns(postData,function(domain, addresses){
            //console.log(addresses.join(','));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<html>" +
                "<head>" +
                "<meta http-equiv='content-type' content='text/html'; charset='utf-8'>" +
                "</head>" +
                "<div style='text-align:center'>" +
                "Domain:<span style='color:red'>" + domain + "</span><br>" +
                "IP:<span style='color:red'>" + addresses.join(',') + "</span></div></html>");
        });
        return;
    });
}
/*相当于私有方法*/
function getDns(postData, callback){
    var domain = querystring.parse(postData).search_dns;
    //console.log(domain); //www.qq.com
    /*异步解析域名*/
    dns.resolve(domain,function(err,addresses){
        if(!addresses){
            addresses = ['不存在域名']
        }
        callback(domain,addresses);
    });
}