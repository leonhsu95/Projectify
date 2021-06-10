const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const projectRoutes = require('./project-routes');
const itemRoutes = require('./item-routes');

router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
