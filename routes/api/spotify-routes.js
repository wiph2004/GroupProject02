const router = require("express").Router();
const spotifyNodeWrapper = import("spotify-node-wrapper");
const baseURL = "https://api.spotify.com/v1/search?market=us&q=";
const { accessToken, accessTokenExpiry, getAccessToken } = require("../../utils/helpers");

// let accessToken;
// let accessTokenExpiry;
// let spotifyNodeApi;

// const getAccessToken = async () => {
//     return new Promise(async (resolve, reject) => {
//         spotifyNodeApi = await spotifyNodeWrapper;
//         accessToken = await spotifyNodeApi.getSpotifyAccessToken(
//             spotifyApiCreds.clientId,
//             spotifyApiCreds.clientSecret,
//             spotifyApiCreds.redirectUri
//         );

//         accessTokenExpiry = Date.now() + 1 * 60 * 60 * 1000;
//         resolve(accessToken);
//     });
// } 

// const spotifyApiCreds = {
//   clientId: "86a17ba2ebc44d938ad1938d90f156e1",
//   clientSecret: "7cab5b4ff3f3436f9178428a31400340",
//   redirectUri: "https://wiph2004.github.io/GroupProject02/",
// };

router.post("/", async (req, res) => {
  try {
    // TODO: add expiration
   if (!accessToken || Date.now() > accessTokenExpiry) {
    await getAccessToken();
   }

    console.log("ACCESS TOKEN:", accessToken);
    const searchParams = req.body;
    console.log("SEARCH PARAMS", searchParams);
    const search = searchParams.search;
    const type = `&type=${search.type}`;
    const query = encodeURIComponent(search.query);

    const requestUrl = `${baseURL}${query}${type}`;
    console.log("REQUEST URL:", requestUrl);
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken },
    });

    if (!response.ok) {
      console.error(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
// module.exports = {
//   router: router,
//   accessToken: accessToken};

