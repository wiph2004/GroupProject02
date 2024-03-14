const router = require('express').Router();
const spotifyNodeWrapper = import('spotify-node-wrapper');
const baseURL = "https://api.spotify.com/v1/me/search?market=us&q=";

const spotifyApi = {
    clientId: '86a17ba2ebc44d938ad1938d90f156e1',
    clientSecret: '7cab5b4ff3f3436f9178428a31400340',
    redirect_url: 'https://wiph2004.github.io/GroupProject02/'
};

router.get('/', async (req, res) => {

    console.log("spotifyNodeWrapper", spotifyNodeWrapper);

    try {
    const accessToken = await spotifyNodeWrapper.getSpotifyAccessToken(spotifyApi);
    //.then(token => console.log("AccessToken: " + accessToken));

    const searchParams = req.body;
    const search = searchParams.query;
    const type = `&type=${searchParams.type}`;

    const newSearch = await fetch(`${baseURL}${search}${type}`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken },
    });

    res.json(newSearch);
    }catch (err) {
        console.log(err);
    }
});

module.exports = router;