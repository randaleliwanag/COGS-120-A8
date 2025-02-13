
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
var login = require('./routes/login')
var signup = require('./routes/signup')
var splash = require('./routes/splash')
var getData = require('./routes/getData')
var summary = require('./routes/summary')
var navBar = require('./routes/nav-bar')
var history = require('./routes/history')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', splash.view)
app.get('/login', login.view)
app.get('/index', index.view);
app.get('/activity', getData.viewActivity)
app.get('/editRoutine', getData.vieweditRoutine)
app.get('/signup', signup.view)
app.get('/splash', splash.view)
app.get('/start', getData.startDay)
app.get('/end', getData.endDay)
app.get('/data/:page', getData.showData)
app.get('/summary', summary.view)
app.get('/routine', getData.viewWellness)
app.get('/nav-bar', navBar.view)
app.get('/history', history.view)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
