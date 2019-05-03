var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('<html><body><h1>Hello World!</h1></body></html>');
})
app.get('/api', function(req, res) {
    res.json({firstname : 'John', lastname : 'Doe'});
})
app.listen(3000);