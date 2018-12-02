//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	} 

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp'); //connecting to the database

	/*db.collection('Todos').find({//finding based on conditions
		_id: new ObjectID('5c039713ca871c32eccf5911')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to handle request');
	});*/

	/*db.collection('Todos').find().count().then((count) => {//finding the count
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to find the count');
	});*/

	db.collection('Users').find({name: 'Ankit'}).toArray().then((names) => {//finding names
		console.log(`Searched names: ${JSON.stringify(names, undefined, 2)}`);
	}, (err) => {
		console.log('Unable to find queried names');
	});

	//client.close();
});