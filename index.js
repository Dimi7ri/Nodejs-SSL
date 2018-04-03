var express = require('express')
var app = express()
var fs = require('fs');
var https = require('https');
var http = require('http');
var forceSsl = require('express-force-ssl');

var key = fs.readFileSync('private.key','utf8');
var cert = fs.readFileSync( 'primary.crt','utf8');
var ca = fs.readFileSync( 'intermediate.crt','utf8');

var options = {
  key: key,
  cert: cert,
  ca: ca
};

app.use(forceSsl);

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

app.get('/', function(request, response) {
  response.send('Comming Soon')
})
