var express = require('express');
var router = express.Router();
const {index, processIndex, user} = require('../controllers/indexController')
const validate = require('../middleware/validate')

/* GET home page. */
router.get('/', index);
router.post('/', validate, processIndex)

router.get('/user', user)

module.exports = router;
