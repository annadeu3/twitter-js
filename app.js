var routes = require('./routes/');
var express = require('express');
var app = express();
var routes = require('./routes/');
app.use('/', routes);


var tweetBank = require('./tweetBank');
var swig = require('swig');


app.use(express.static('public'));


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });





// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     console.log(output);
// });








var port = 3000;
app.listen(port, function() {
	console.log('Server listening on port ', port);
});

