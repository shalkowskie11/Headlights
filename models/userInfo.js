var db = require('../db.js')

var User = db.model('User', {
	username: { type: String, required: true},
	state:     { type: String, required: true},
	licensePlate:     { type: String, required: true},
	email:    { type: String, required: true},
	phone:   { type: String, required: true}
})
module.exports = User