var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:id', function(req, res, next) {
  var id = '@' +req.params.name;
  var list = tweetBank.find( {id: id} );
  var name = list[0].name;
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, id: id, tweets: list } );
});

router.get('/tweet/:id', function(req,res,next){
// 	// console.log(tweetBank.list());
	var tweetid = request.params.id;
// 	console.log(tweetid);
// 	var list = tweetBank.find({'tweetid': tweetid});
// 	if(list.length > 0){
// 		response.render('index', {title: 'Twitter.js - Tweet #' + tweetid, tweets: list});
// 	}else{
// 		response.render('index', {title: 'Invalid tweet id', tweets:[]});
// 	}
 });

module.exports = router;