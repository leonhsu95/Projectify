const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const projectRoutes = require('./project-routes');
const projectItemRoutes = require('./project-item-routes');
const itemRoutes = require('./item-routes');
const campaignRoutes = require('./campaign-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/project-items', projectItemRoutes);
router.use('/items', itemRoutes);
router.use('/campaigns', campaignRoutes);

module.exports = router;
