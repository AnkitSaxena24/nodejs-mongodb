//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	} 

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp'); //connecting to the database

	
	/*findOneAndUpdate(filter, update, options, callback) - It finds the value based on filter and update the value written in $set object and returns the document with the updated value*/
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c04038b6c737223f1d2fb76'),
	}, {
		$set: {
			name: 'Rajni',
			location: 'Jabalpur'
		},
		$inc: {
			age: 2
		}
	}, 
	{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//client.close();
});