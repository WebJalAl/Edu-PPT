const express = require('express')
const app = express()

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/main.html')
})

app.listen(3000)
