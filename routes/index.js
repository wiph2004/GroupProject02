const express = require('express');
const router = require('express').Router();
const spotifyRoutes = require('./api/spotify-routes');
const concertRoutes = require('./api/concert-routes');
const spotifyAlternateRoutes = require('./api/spotify-alternate');
const userRoutes = require("./api/user-routes");

router.use('/spotify', spotifyRoutes);
router.use('/concert', concertRoutes);
router.use('/spotify-alternate', spotifyAlternateRoutes);
router.use("/api/users", userRoutes);

module.exports = router;
