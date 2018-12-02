const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Model Todo
var Todo = mongoose.model('Todo', {//defining the properties of a collection by the model - Todo
	text: {
		type: String,
		required: true, 
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		defualt: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});


//creating the entry in Todo collection
var newTodo = new Todo({
	text: '  Drive a car  '
});

//saving and priting the entry
newTodo.save().then((doc) => {
	console.log(`Saved Todo: ${doc}`);
}, (err) => {
	console.log('Something went wrong');
});


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

newUser.save().then((email) => {
	console.log(`User email is: ${email}`);
}, (err) => {
	console.log('Unable to save email');
});