//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	} 

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp'); //connecting to the database

	db.collection('Todos').insertOne({//inserting values in Todos collection
		text: 'Something to do',
		completed: false
	}, (err, res) => {
		if(err) {
			return console.log('Unable to insert todo', err);
		}

		console.log(JSON.stringify(res.ops, undefined, 2));
	});

	db.collection('Users').insertOne({//inserting value in users collection
		name: 'Rajesh',
		age: 27,
		location: 'Bangalore'
	}, (err, res) => {
		if(err)
			return console.log('Unable to insert users', err);
		console.log(res.ops[0]._id.getTimestamp());
	});

	client.close();
});