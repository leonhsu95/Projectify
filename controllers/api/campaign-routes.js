const router = require('express').Router();
const { User, Project, Item, ProjectItem, Campaign } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Campaign.findAll({
        attributes: [
            "unique_visitors",
            "total_visitors",
            "fb_clicks",
            "fb_registered",
            "ig_registered",
            "ig_clicks",
            "createdAt"
        ],
        })
        .then(dbCampaignData => res.json(dbCampaignData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Campaign.findOne({
            attributes: [
                "unique_visitors",
                "total_visitors",
                "fb_clicks",
                "fb_registered",
                "ig_registered",
                "ig_clicks",
                "project_id",
                "createdAt"
            ],
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Project,
                    attributes: [
                        "project_name",
                        "start_date"
                    ],
                    include: {
                        model: User,
                        attributes: [
                            "firstname",
                            "lastname",
                            "email",
                            "phone",
                            "company"
                        ],
                    }
                },
            ]
        })
        .then(dbCampaignData => {
            if (!dbCampaignData) {
                res.status(404).json({ message: 'No Campaign found with this id' });
                return;
            }
            res.json(dbCampaignData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    Campaign.create({
        // username: req.body.username,
        // firstname: req.body.firstname,
        // lastname: req.body.lastname,
        // email: req.body.email,
        // phone: req.body.phone,
        // abn: req.body.abn,
        // address: req.body.address,
        // password: req.body.password
    })
    .then(dbCampaignData => {
            req.session.save(() => {
                // req.session.user_id = dbCampaignData.id;
                // req.session.username = dbCampaignData.username;
                // req.session.firstname = dbCampaignData.firstname;
                // req.session.lastname = dbCampaignData.lastname;
                // req.session.email = dbCampaignData.email;
                // req.session.phone = dbCampaignData.phone;
                // req.session.abn = dbCampaignData.abn;
                // req.session.address = dbCampaignData.address;
                // req.session.loggedIn = true;

                res.json(dbCampaignData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    Campaign.findOne({
            where: {
                email: req.body.email
            }
        }).then(dbCampaignData => {
            if (!dbCampaignData) {
                res.status(400).json({ message: 'This user is not registered!' });
                return;
            }
            const validPassword = dbCampaignData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
            }
            req.session.save(() => {

                req.session.user_id = dbCampaignData.id;
                req.session.email = dbCampaignData.email;
                req.session.loggedIn = true;

                res.json({ user: dbCampaignData, message: 'You are now logged in!' });
            });
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
        .then(dbCampaignData => {
            if (!dbCampaignData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbCampaignData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;