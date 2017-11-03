var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (reqest, response, next) => {
  response.render('index', {title: "My Blog"})
});

router.get('/sample', (reqest, response, next) => {
  response.render('sample')
})

module.exports = router;
