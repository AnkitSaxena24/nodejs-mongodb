//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	} 

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp'); //connecting to the database

	//deleteMany - will delete every document with matched criteria
	db.collection('Todos').deleteMany({completed: false}).then((results) => {
		console.log(results);
	});

	//deleteOne - deletes the first document with matched criteria
	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	});

	/*findOneAndDelete - it prints the document, which has been deleted with matched criteria. Like the deleteOne, it also deletes the first matched document*/
	db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
		console.log(result);
	});

	//client.close();
});