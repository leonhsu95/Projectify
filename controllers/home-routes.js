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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
