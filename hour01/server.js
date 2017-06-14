var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('我在用Node.js写程序！\n');
}).listen(5000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:5000/');
