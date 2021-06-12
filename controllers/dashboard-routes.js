const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project, Item, ProjectItem, Campaign } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('dashboard', { loggedIn: req.session.loggedIn });
  });

  router.get('/profile', withAuth, (req, res) =>{
    User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.session.user_id
            },
            include: [
                {
                    model: Project,
                    attributes: [
                        'project_name',
                        'start_date',
                        'end_date',
                        'active'
                    ],
                    include: {
                        model: Campaign,
                        attributes: [
                            "unique_visitors",
                            "total_visitors",
                            "fb_clicks",
                            "fb_registered",
                            "ig_registered",
                            "ig_clicks",
                            "createdAt"
                        ],
                        order: ['campaign'],
                    }
                }
            ]
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            // res.json(dbUserData);
            console.log(dbUserData, "<============")
            res.render('profile', {dbUserData: dbUserData.toJSON()});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/projects', withAuth, (req, res) => {
  res.render('projects');
});

router.get('/invoices', withAuth, (req, res) => {
  res.render('invoices');
});

module.exports = router;