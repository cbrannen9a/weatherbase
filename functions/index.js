const functions = require('firebase-functions');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const router = express.Router();

function checkStatus(res) {
	if (res.ok) {
		return res;
	} else {
		throw res;
	}
}

let location;

router.post('/search-location', (req, res) => {

	location = req.body.location;

	if (!location) {
		res.redirect('/error');
	} else {
		res.redirect('/current-weather');
	}
});

router.get('/search-location-weather', (req, res) => {
	// build api URL with user location
	const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
	const apiId = '&appid=5efa5fdd3b60ff41ed0edf9c9437a2f3&units=metric';

	const userLocation = (url1, url2, location) => {

		let newUrl = url1 + location + url2;
		return newUrl;
	};

	const apiUrl = userLocation(baseUrl, apiId, location);

	fetch(apiUrl)
		.then(checkStatus)
		.then(res => res.json())
		.then(data => {
			return res.send({ data });
		})
		.catch(err => {
			console.error(err)
			return res.redirect('/error')
		})
});

app.use('/fns', router);

exports.fns = functions.https.onRequest(app);