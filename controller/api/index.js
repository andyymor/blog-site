const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./post-routes');
const commentRoutes = require('./post-comment');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
