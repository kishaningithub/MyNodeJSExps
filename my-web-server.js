var http_mod=require("http")
var s=http_mod.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text-plain"});
	res.write("hello\n");
	setTimeout(function(){
		res.end("kishan\n");
	},2000);
});
s.listen(8000);