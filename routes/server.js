let express = require('express'),
router = express.Router(),
framework = require('../framework'),
host = new framework.Host(router);

let cache = {style: require('../views/style'), styles: {buttons: require('../views/buttons')}, example: require('../views/example'), example2: require('../views/example2'), index: require('../views/index'), buttontest: require('../views/buttontest'), buttonmain: require('../views/buttonmain')};
let updateCache = async () => {
  cache.style = require('../views/style');
  cache.styles.buttons = require('../views/buttons');
  cache.example = require('../views/example');
  cache.example2 = require('../views/example2');
  cache.index = require('../views/index');
  cache.buttontest = require('../views/buttontest');
  cache.buttonmain = require('../views/buttonmain');
}
/* GET home page. */
host.customPage('/', false, ()=>true, "/", function(req, res, next) {
  res.render('renderer', { site: cache.index });
});
host.customPage('/buttontest', false, ()=>true, "/", function(req, res, next) {
  res.render('renderer', { site: cache.buttontest });
});
host.style('/style.css', cache.style, ()=>{
  updateCache();
});
host.script('/buttonmain.js', cache.buttonmain, ()=>{
  updateCache();
});
host.style('/buttons.css', cache.styles.buttons, ()=>{
  updateCache();
});
host.customPage('/example1', false, ()=>true, "/", function(req, res, next) {
  res.render('renderer', { site: cache.example });
  updateCache();
});
host.customPage('/example2', false, ()=>true, "/", function(req, res, next) {
  res.render('renderer', { site: cache.example2, properties: {lang: req.query.lang} });
  updateCache();
});
module.exports = router;
