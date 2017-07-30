'use strict'

const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebookController');

router.get('/login', facebookController.getUser);
router.post('/post', facebookController.postToFacebook);

module.exports = router;
