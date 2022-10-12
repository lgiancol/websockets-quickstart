var express = require('express')
var ws = require('./ws')

var app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(6500, function () {
    console.log('Example app listening on port 6500!')
})