var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index.html', function(req, res) {
    res.render('index', { title: 'Hello, World!' });
});
console.log('hithere correct ');
module.exports = router;

