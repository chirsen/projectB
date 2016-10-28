var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    url = require('url');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var filepath = __dirname + pathname;

    if (!path.extname(filepath)) {
        //如果请求的不是一个带后缀的文件
        var pathArr = pathname.split('/');
        switch (pathArr[1]) {
            case "":
                res.writeHead(200, { "Content-Type": "text/html" });
                fs.readFile('./pages/index.html', function(err, data) {
                    res.end(data);
                });
                break;
            case "home":
                console.log(url.parse(req.url).query);
                var callback = url.parse(req.url).query.split("&")[1].split("=")[0];
                var data = callback+"("+{a:100}+")";
            	res.writeHead(200, {"Content-Type": "text/javascript"});
                res.end(data);
                break;
            case "front":
                break;
            case "node":
                break;
            case "multi":
                break;
            case "about":
                break;
            default:

        }
    } else {
        switch (path.extname(pathname)) {
            case ".html":
                res.writeHead(200, { "Content-Type": "text/html" });
                break;
            case ".js":
                res.writeHead(200, { "Content-Type": "text/javascript" });
                break;
            case ".css":
                res.writeHead(200, { "Content-Type": "text/css" });
                break;
            case ".gif":
                res.writeHead(200, { "Content-Type": "image/gif" });
                break;
            case ".jpg":
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                break;
            case ".png":
                res.writeHead(200, { "Content-Type": "image/png" });
                break;
            default:
                res.writeHead(200, { "Content-Type": "application/octet-stream" });
        }

        fs.readFile(filepath, function(err, data) {
            res.end(data);
        });
    }
}).listen(3000);

console.log("start ^_^");
