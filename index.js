var express 		= require('express'),
	mongoose 		= require('mongoose'),
	bodyParser 		= require('body-parser'),
	methodOverride 	= require('method-override'),
	_ 				= require('lodash');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/hello', function(req, res, next) {
	res.send('Hello World!');
	next();
});
app.use('/jtb', function(req, res, next) {
	res.send('Hello World!');
	next();
});
app.use('/suds', function(req, res, next) {
	res.send('Hello World!');
	next();
});
app.use('/k24', function(req, res, next) {
	res.send('Hello World!');
	next();
});
app.use('/miggy', function(req, res, next) {
	res.send('Hello World!');
	next();
});
app.use('/wle', function(req, res, next) {
	res.send('Hello World!');
	next();
});

mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {
	console.log('listening on 3000...');
	app.listen(3000);
});