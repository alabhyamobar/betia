var fs=require('fs');
var http = require('http');
fs.appendFile('abc.txt','hello Ram Ji..!',function(err){
    if(err) throw err;        
    console.log('Saved!');
});

http.createServer(function (req, res) {
  fs.readFile('abc.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8090);