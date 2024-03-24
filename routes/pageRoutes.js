const router = require('express').Router();
const { Artist, Concert, Music, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  
    res.render('login');
});

router.get('/homepage', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }

  res.render('login');
});

module.exports = router;
