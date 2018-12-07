var mongoose = require('mongoose');

//Model Todo
const TodoSchema = new mongoose.Schema(
{//defining the properties of a collection by the model - Todo
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

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {Todo};