const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./server/config/db.config');

const app = express();

var corsOptions = {
	origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./server/models');
const Role = db.role;

db.mongoose
	.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Successfully connect to MongoDB.');
		initial();
	})
	.catch((err) => {
		console.error('Connection error', err);
		process.exit();
	});

// simple route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to soccer tournament management website.' });
});

// routes
require('./server/routes/auth.routes')(app);
require('./server/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

function initial() {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: 'player'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'player' to roles collection");
			});

			new Role({
				name: 'coach'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'coach' to roles collection");
			});

			new Role({
				name: 'organizer'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'organizer' to roles collection");
			});
		}
	});
}
