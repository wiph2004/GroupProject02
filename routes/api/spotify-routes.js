const router = require('express').Router();
const { getSpotifyAccessToken, getAlbum } = require('spotify-node-wrapper');
const baseURL = "https://api.spotify.com";


router.get('/', async (res, req) => {
    try {
    const accessToken = await getSpotifyAccessToken('86a17ba2ebc44d938ad1938d90f156e1', '7cab5b4ff3f3436f9178428a31400340', 'https://wiph2004.github.io/GroupProject02/');
    //.then(token => console.log("AccessToken: " + accessToken));

    const newSearch = await fetch(`${baseURL}${searchParams}`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer' + accessToken },
    });

    res.json(newSearch);
    }catch (err) {
        console.log(err);
    }
});

