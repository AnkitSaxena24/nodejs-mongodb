const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c042d4c32b154404c13a447';

//All results
/*Todo.find({
	_id: new ObjectID(id)
}).then((todos) => {
	console.log(`Todos: ${todos}`);
});*/

//Sepecific result by any condition
Todo.findOne({
	_id: id
}).then((todo) => {
	console.log(`Todo: ${todo}`);
});


/*Todo.findById(id).then((todoById) => {
	if(!todoById)
		return console.log('ID not found');
	console.log(`Todo by ID: ${todoById}`);
});*/


