var mongoose = require('mongoose')
mongoose.connect('mongodb://defaultUser:welcome123@ds051980.mongolab.com:51980/headlights‏', function(){
	console.log('mongodb connected')
})

module.exports = mongoose