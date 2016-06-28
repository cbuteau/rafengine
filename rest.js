// http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
var express = require('express');

var app = express();
var fs = require('fs');
var path = require('path');


var fullpath = path.join(__dirname, 'site', 'index.html');
console.log(fullpath);

app.use(express.static(__dirname + '/site'));
//app.use('/site', express.static(path.join(__dirname, 'site', 'index.html')));
//app.use('/site', express.static('public'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/config', function(req, res) {
  fs.readFile( __dirname + "/site/app/config.json", 'utf8', function(err, data) {
    if (err) {
      console.error(err);
    }
    res.end(data);
  });
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
