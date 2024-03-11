const router = require('express').Router();
const spotifyRoutes = require('./spotify-routes');
const concertRoutes = require('./concert-routes');

router.use('/spotify', spotifyRoutes);
router.use('/concert', concertRoutes);

module.exports = router;