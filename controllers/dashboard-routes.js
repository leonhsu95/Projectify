const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project, Item, ProjectItem, Campaign } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => { //CONSIDER FINDING BY USER
    User.findAll({
        where: {
            id: req.session.user_id
        },
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Project,
                attributes: [
                    "project_name",
                    "description",
                    "start_date",
                    "active"
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
            },
        ]
    })
    .then(dbUserData => {
        const users = dbUserData.map(user => user.get({ plain: true }));
        // res.json(users);
        res.render('dashboard', { users, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
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
    Project.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: { exclude: ['id', 'user_id'] },
            include: [
                {
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
                },
                {
                    model: User,
                    attributes: {exclude: ['id', 'password']}
                },

            ]
    })
    .then(dbProjectData => {
        const projects = dbProjectData.map(project => project.get({ plain: true }));
    //    res.json(dbProjectData);
        res.render('projects', { projects, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/invoices', withAuth, (req, res) => {
    Project.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: { exclude: ['id', 'user_id'] },
            include: [
                {
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
                },
                {
                    model: User,
                    attributes: {exclude: ['id', 'password']}
                },

            ]
    })
    .then(dbProjectData => {
        const projects = dbProjectData.map(project => project.get({ plain: true }));
    //    res.json(dbProjectData);
        res.render('invoices', { projects, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;