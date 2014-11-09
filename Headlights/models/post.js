var db = require('../db.js')

var Post = db.model('Post', {
	username: { type: String, required: true},
	body:     { type: String, required: true},
	date:     { type: Date, require: true, default: Date.now}
})
module.exports = Post