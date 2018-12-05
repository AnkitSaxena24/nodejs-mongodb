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
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};