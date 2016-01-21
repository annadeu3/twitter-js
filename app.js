var swig = require('swig');
var express = require('express');
var app = express();
var routes = require('./routes/');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });
var tweetBank = require('./tweetBank');



app.use(express.static('public'));
app.use('/', routes);
app.set('view cache', false);



app.listen(3000);


