const { User, Project, Campaign, Item, ProjectItem } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    // Pass serialized data and session flag into template
    res.render('homepage');
});

router.get('/products', (req, res) => {
    res.render('products');
});

router.get('/team', (req, res) => {
  res.render('team');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/clientDetails', (req, res) => {
  res.render('clientDetails');
});

router.get('/yourDetails', (req, res) =>{
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
                // res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            // res.json(dbUserData);
            console.log(dbUserData, "<============")
            res.render('yourDetails', {dbUserData: dbUserData.toJSON()});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { loggedIn: req.session.loggedIn });
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/invoices', (req, res) => {
  res.render('invoices');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/yourDetails');
    return;
  }

  res.render('login');
});

router.get("/faq", (req, res) => {
  res.render("FAQ")
})

router.get("/privacy", (req, res) => {
  res.render("privacy")
})

module.exports = router;
