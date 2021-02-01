var http = require('http'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

let isProduction = false;
// Create global app object
const app = express();

// const indexRouter= require('./api/index');
const userRouter= require('./api/users');

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'oneuphealth', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true, secure: true  }));

if (!isProduction) {
  app.use(errorhandler());
}

mongoose.connect('mongodb://mongo:27017/oneup_health',{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const {connection}= mongoose;
connection.on("connected",()=>{
  console.log('Successfully connect to mongo.');
});
app.use('/', userRouter);
// app.use('/users', indexRouter);
// app.use(require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}


// finally, let's start our server...
const server = app.listen( process.env.PORT || 5000, function(){
  console.log('Listening on port ' + server.address().port);
});
