const router = require('express').Router();

const apiRoute = require('./api/');
const homeRoute = require('./home-route.js');
const dashRoute = require('./dashboard-route.js');

router.use('/', homeRoute);
router.use('/dashboard', dashRoute);
router.use('/api', apiRoute);

module.exports = router;
