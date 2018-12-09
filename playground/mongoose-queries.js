const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '5c042d4c32b154404c13a447';

if(!ObjectID.isValid(id))
	console.log('ID is not valid')

//All results
Todo.find({
	_id: id
}).then((todos) => {
	console.log(`Todos: ${todos}`);
});

//Sepecific result by any condition
Todo.findOne({
	_id: id
}).then((todo) => {
	console.log(`Todo: ${todo}`);
});


Todo.findById(id).then((todoById) => {
	if(!todoById)
		return console.log('ID not found');
	console.log(`Todo by ID: ${todoById}`);
}).catch((e) => {
	console.log(e);
});

const user_id = '5c0432f374810d4369d10167'

//User Model
User.findById(user_id).then((user_data) => {
	if(!user_data) 
		return console.log('User not found');
	console.log(`User Info: ${user_data}`);
}).catch((e) => {
	console.log(e);
});

