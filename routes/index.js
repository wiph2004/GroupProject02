const express = require('express');
const router = require('express').Router();
const spotifyRoutes = require('./api/spotify-routes');
const concertRoutes = require('./api/concert-routes');

router.use('/spotify', spotifyRoutes);
router.use('/concert', concertRoutes);

module.exports = router;
