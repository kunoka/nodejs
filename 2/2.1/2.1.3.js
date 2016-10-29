/**
 * Created by harry on 10/8/16.
 */
function router(res, req, pathname){
    //console.log("router function executing...");
    //console.log(pathname);
    switch(pathname){
        case "/parse":
            parseDns(res, req)
            break;
        default :
            goIndex(res, req)
    }
}

function goIndex(res, req){
    /*获取当前index.html的路径*/
    //var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var readPath = './' + url.parse('index.html').pathname;
    //console.log("url.parse('index.html').pathname: " + url.parse('index.html').pathname);
    var indexPage = fs.readFileSync(readPath);
    /*返回*/
    res.end(indexPage);
}

function parseDns(res, req){
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

var http = require('http'),
    dns = require('dns'),
    fs = require('fs'),
    url = require('url'),
    querystring = require("querystring");

http.createServer(function(req,res){
    /*写http head 返回html，因此content-Type为html*/
    var pathname = url.parse(req.url).pathname;
    req.setEncoding('utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    router(res, req, pathname); //调用router方法来处理url路由
}).listen(3000,"127.0.0.1");
console.log("Server running at http://127.0.0.1:3000/");