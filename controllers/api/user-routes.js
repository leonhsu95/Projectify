const router = require('express').Router();
const { User, Project, Item, ProjectItem, Campaign } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll({
            attributes: { exclude: ['[password'] }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
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
                },
                // {
                //     model: Comment,
                //     attributes: ['id', 'comment_text', 'created_at'],
                //     include: {
                //         model: Post,
                //         attributes: ['title']
                //     }
                // },
                // {
                //     model: Post,
                //     attributes: ['title'],
                // }
            ]
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        abn: req.body.abn,
        address: req.body.address,
        password: req.body.password,
        company: req.body.company
    })
    .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.firstname = dbUserData.firstname;
                req.session.lastname = dbUserData.lastname;
                req.session.email = dbUserData.email;
                req.session.phone = dbUserData.phone;
                req.session.abn = dbUserData.abn;
                req.session.address = dbUserData.address;
                req.session.loggedIn = true;

                // res.json(dbUserData);
                console.log("user created")
                res.redirect("/yourDetails", {dbUserData})
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        }).then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'This user is not registered!' });
                return;
            }
            // const validPassword = dbUserData.checkPassword(req.body.password);

            // if (!validPassword) {
            //     res.status(400).json({ message: 'Incorrect password!' });
            //     return;
            // }
            req.session.save(() => {

                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                // res.json({ user: dbUserData, message: 'You are now logged in!' });
                res.redirect("/yourDetails")
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {

    User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.delete('/:id', (req, res) => {
    User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;