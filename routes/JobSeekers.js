const express = require('express');
const router = express.Router();
const cors = require('cors');

const JobSeeker = require('../controller/JobSeeker');

router.use(cors());

router.post('/jobseeker', JobSeeker.createRegistration);
module.exports = router;