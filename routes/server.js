let express = require('express'),
router = express.Router(),
framework = require('../framework');

let cache = {style: require('../views/style'), example: require('../views/example'), example2: require('../views/example2')};
let updateCache = async () => {
  cache.style = require('../views/style');
  cache.example = require('../views/example');
  cache.example2 = require('../views/example2');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/style.css', function(req, res, next) {
  res.setHeader("Content-Type", "text/css; charset=UTF-8");
  res.render('renderer', { site: cache.style });
  updateCache();
});
router.get('/example', function(req, res, next) {
  res.render('renderer', { site: cache.example });
  updateCache();
});
router.get('/example2', function(req, res, next) {
  res.render('renderer', { site: cache.example2, properties: {lang: req.query.lang} });
  updateCache();
});
module.exports = router;
