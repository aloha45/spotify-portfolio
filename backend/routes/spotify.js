var express = require('express');
var router = express.Router();
const spotifyCtrl = require('../controllers/spotify')

/* GET users listing. */
router.get('/', spotifyCtrl.getToken);

module.exports = router;
