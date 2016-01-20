var express = require( 'express');
var app = express(); // creates an instance of an express application

app.get('/', function(request, response, next){
	response.send("<h1>Welcome!</h1><p>Hello to you!</p>");
	next();
});

app.get('/views/index.html', function(request, response, next){
	response.send("<h1>Welcome!</h1><p>this is the index page!</p>");
	next();
});

app.get('/', function(request, response, next){
	console.log("something is happening here");
	next();
});

app.get('/', function(request, response, next){
	console.log("something is happening here");
	next();
});

app.use('/', function(request, response, next){
	console.log('Page is Loading');
	var scode = response.statusCode;
	console.log("GET / ", scode);
	next();
});
app.use('/views/index.html', function(request, response, next){
	console.log('index.html Page is Loading');
	next();
});


// var latestTweets = [];

// app.post('/', function(request, response, next){
// 	latestTweets.push({
// 		user: "current user",
// 		tweet: "some tweet"
// 	});
// 	response.json(latestTweets[latestTweets.length -1]);
// });














var port = 3000;
app.listen(port, function() {
	console.log('Server listening on port ', port);
});
