const router = require('express').Router();
const { User, Project, Item, ProjectItem, Campaign } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    ProjectItem.findAll({
        })
        .then(dbProjectData => res.json(dbProjectData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    ProjectItem.findOne({
            where: {
                id: req.params.id
            },
        })
        .then(dbProjectData => {
            if (!dbProjectData) {
                res.status(404).json({ message: 'No project item found with this id' });
                return;
            }
            res.json(dbProjectData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    Item.create({
        // username: req.body.username,
        // firstname: req.body.firstname,
        // lastname: req.body.lastname,
        // email: req.body.email,
        // phone: req.body.phone,
        // abn: req.body.abn,
        // address: req.body.address,
        // password: req.body.password
    })
    .then(dbProjectData => {
            req.session.save(() => {
                // req.session.user_id = dbProjectData.id;
                // req.session.username = dbProjectData.username;
                // req.session.firstname = dbProjectData.firstname;
                // req.session.lastname = dbProjectData.lastname;
                // req.session.email = dbProjectData.email;
                // req.session.phone = dbProjectData.phone;
                // req.session.abn = dbProjectData.abn;
                // req.session.address = dbProjectData.address;
                // req.session.loggedIn = true;

                res.json(dbProjectData);
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
        .then(dbProjectData => {
            if (!dbProjectData) {
                res.status(404).json({ message: 'No project item found with this id' });
                return;
            }
            res.json(dbProjectData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;