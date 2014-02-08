var http_mod=require("http")
var s=http_mod.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text-plain"});
	res.end("hello kishan");
});
s.listen(8000);