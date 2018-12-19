const express = require('express');
const app = express();

const Datastore = require('nedb');
const hideouts = new Datastore({ filename: 'api/data/hideouts.db', autoload: true });

app.post('/', (req, res) => {
	hideouts.insert({
		test: 'true'
	}, (err, newDoc) => {
		if (!err) {
			res.json(newDoc);
		} else {
			res.json({ error: true, message: err }).status(500);
		}
	});
});

module.exports = app;
