const router = require('express').Router();

const userRoute = require('./user-routes.js');
const postsRoute = require('./posts-routes');
const commentsRoute = require('./comments-route');

router.use('/user', userRoute);
router.use('/post', postsRoute);
router.use('/comment', commentsRoute);

module.exports = router;