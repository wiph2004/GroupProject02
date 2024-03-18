const express = require('express');
const router = require('express').Router();
const spotifyRoutes = require('./api/spotify-routes');
const concertRoutes = require('./api/concert-routes');
const spotifyAlternateRoutes = require('./api/spotify-alternate');

router.use('/spotify', spotifyRoutes);
router.use('/concert', concertRoutes);
router.use('/spotify-alternate', spotifyAlternateRoutes);

module.exports = router;
