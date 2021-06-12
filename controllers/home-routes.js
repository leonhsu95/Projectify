const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project, Campaign, Item, ProjectItem } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});


router.get("/faq", (req, res) => {
  res.render("faq")
})

router.get("/privacy", (req, res) => {
  res.render("privacy")
})

module.exports = router;
