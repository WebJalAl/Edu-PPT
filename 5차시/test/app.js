const http = require('http')
const express = require('express')

http.createServer(function(request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'})

  response.end('Hello World!')

}).listen(80)
