var mongoose = require('mongoose');

//Model User
var User = mongoose.model('User', {
	email: {
		type: String, 
		required: true, 
		minlength: 1,
		trim: true
	}
});

var newUser = new User({
	email: 'ankitsaxena807@hotmail.com'
});

module.exports = {User};

/*newUser.save().then((email) => {
	console.log(`User email is: ${email}`);
}, (err) => {
	console.log('Unable to save email');
});*/