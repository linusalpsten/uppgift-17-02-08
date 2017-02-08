var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.sendfile(__dirname + '/' + 'index.html');
});

app.get('/notindex', function(req,res){
    res.sendfile(__dirname + '/' + 'notindex.html');
});

var server = app.listen(8090, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at %s %s', host, port);
});