import bodyParser from 'body-parser';
import cors from 'cors'; 
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
	res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/Tournament';

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	console.log('Database connected!');
	var dbo = db.db('Tournamnet');
	// dbo.collection('students').insertOne({ name: 'Saurabh', marks: 100 }, function(err, res) {
	// 	if (err) throw err;
	// 	console.log('1 document inserted');
	// 	db.close();
	// });
});