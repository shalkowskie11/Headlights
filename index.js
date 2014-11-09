var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
var app = express()

app.use(bodyParser.json())
app.get('/api/posts', function (req, res){
	Post.find(function(err, posts){
		if(err) { return next (err) }
			res.json(posts)

	})
})

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

app.post('/api/posts', function (req, res, next) {

	var post = new Post({
		username: req.body.username,
		body: req.body.body
	})
	console.log(post)
	post.save(function (err, post){
		if (err) { return next(err) }
			//res.status(201).json("DOES THIS WORK??");
		res.status(201).json(post)
	})
})
app.post('/api/signup', function (req, res, next) {

	var user = new User({
		username: req.body.username,
		state: req.body.state,
		licensePlate: req.body.licensePlate
		email: req.body.email
		phone: req.body.phone
		password: req.body.password
	})
	console.log(user)
	user.save(function (err, user){
		if (err) { res.status(201).json(0) }
		
		res.status(201).json(1)
	})
})
app.get('/', function (req, res) {
	res.sendfile('layouts/posts.html')
})

app.get('/signup', function (req, res) {
	res.sendfile('layouts/signup.html')
})

app.listen(process.env.PORT || 5000, function () {
	console.log('Server listening on', 5000)
})