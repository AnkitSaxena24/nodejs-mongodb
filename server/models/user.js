var mongoose = require('mongoose');

//Model User
var UserSchema = new mongoose.Schema(
{
	email: {
		type: String, 
		required: true, 
		minlength: 1,
		trim: true
	}
});

/*var newUser = new User({
	email: 'ankitsaxena807@hotmail.com'
});*/

const User = mongoose.model('User', UserSchema);

module.exports = {User};