let
framework = require('./framework'),
config = framework.config(),

createError = require('http-errors'),
express = require('express'),
path = require('path'),
cookieParser = require('cookie-parser'),
lessMiddleware = require('less-middleware'),
logger = require('morgan'),

apiRouter = require('./routes/api'),
serverRouter = require('./routes/server'),

app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


let basicAuth = require('basic-auth');
let auth = function(req, res, next){
    let user = basicAuth(req);
    if(user && user.name == framework.config().docs.user && user.pass == framework.config().docs.pass)
        return next();
    else{
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
    }
}

let checkurl = (url, list, pos) => {
    let pred = false
  	list.forEach(l => {
        if(url.indexOf(l)==pos) pred = true;
    });
    return pred;
};

app.use(function(req, res, next){
    res.setHeader("X-Powered-By", "Afilidia");

    if(!(framework.config().server.developermode.domain && framework.config().server.developermode.domain == req.hostname) && framework.config().server.developermode.endpoint && req.url != framework.config().server.developermode.endpoint && !checkurl(req.url, [...fs.readdirSync("./public"), "api"], 1)) res.redirect(framework.config().server.developermode.endpoint);
    else {
        if(req.url.indexOf('docs') != -1){
            return auth(req, res, next);
        } else next();
    }
});
app.use('/docs', express.static(path.join(__dirname, 'docs')));


app.use(config.server.api.path, apiRouter);
app.use('/', serverRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

framework.log(0, 'Loaded');

module.exports = app;