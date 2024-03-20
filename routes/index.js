var express = require('express');
var router = express.Router();
const homeControler = require('../controlers/home_controlers')
/* GET home page. */
router.get('/',homeControler.home);
router.use('/users',require('./users'));

module.exports = router;
