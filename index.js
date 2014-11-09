var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())
app.get('/api/posts', function (req, res){
	Post.find(function(err, posts){
		if(err) { return next (err) }
			res.json(posts)

	})
})

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
app.get('/', function (req, res) {
	res.sendfile('layouts/posts.html')
})

app.listen(process.env.PORT || 5000, function () {
	console.log('Server listening on', 5000)
})