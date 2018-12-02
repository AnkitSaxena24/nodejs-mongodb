const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {//defining the properties of a collection by the model - Todo
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});


//creating the entry in Todo collection
var newTodo = new Todo({
	text: 'Drive a car'
});

//saving and priting the entry
newTodo.save().then((doc) => {
	console.log(`Saved Todo: ${doc}`);
}, (err) => {
	console.log('Something went wrong');
});