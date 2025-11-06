http = require('http');
listener = function (request, response) {

response.writeHead(200, {'Content-Type': 'text/html'});
response.end("Hello World"); 
};
server = http.createServer(listener);
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');