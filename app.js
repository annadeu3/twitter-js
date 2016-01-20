var express = require( 'express');
var app = express(); // creates an instance of an express application
var swig = require('swig');


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
    console.log(output);
});


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.get('/', function (req, res) {
  res.render('index', {title: 'Hall of Fame', people: people});
});




var port = 3000;
app.listen(port, function() {
	console.log('Server listening on port ', port);
});


// app.get('/', function(request, response, next){
// 	response.send("<h1>Welcome!</h1><p>Hello to you!</p>");
// 	next();
// });

// app.get('/views/index.html', function(request, response, next){
// 	response.send("<h1>Welcome!</h1><p>this is the index page!</p>");
// 	next();
// });

// app.get('/', function(request, response, next){
// 	console.log("something is happening here");
// 	next();
// });

// app.get('/', function(request, response, next){
// 	console.log("something is happening here");
// 	next();
// });

// app.use('/', function(request, response, next){
// 	console.log('Page is Loading');
// 	var scode = response.statusCode;
// 	console.log("GET / ", scode);
// 	next();
// });
// app.use('/views/index.html', function(request, response, next){
// 	console.log('index.html Page is Loading');
// 	next();
// });