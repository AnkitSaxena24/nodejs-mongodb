var mongoose = require('mongoose');

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

module.exports = {Todo};


//creating the entry in Todo collection
/*var newTodo = new Todo({
	text: '  Drive a car  '
});
*/
/*//saving and priting the entry
newTodo.save().then((doc) => {
	console.log(`Saved Todo: ${doc}`);
}, (err) => {
	console.log('Something went wrong');
});*/