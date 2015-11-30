
var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
ejs = require('ejs')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
app.use(bodyParser.json({ // to support URL-encoded bodies
  extended: true
}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/scomplete', function(request, response) {
  response.render('pages/complete');
});
app.get('/error', function(request, response) {
  response.render('pages/error');
});
app.post('/form', function(req, res) {
  var input = req.body;

  res.send(console.log(input));

  pg.connect(process.env.DATABASE_URL, function(err, client) {
    client.query("CREATE TABLE IF NOT EXISTS applist(email varchar(64), teamname varchar(64))");
    client.query("INSERT INTO applist(email, teamname) values($1, $2)", [input[0], input[1]]);

    if (err) {
      console.error(err);
      response.send("Error " + err);
    }

  });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});