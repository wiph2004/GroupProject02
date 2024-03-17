const router = require("express").Router();
const spotifyNodeWrapper = import("spotify-node-wrapper");
const baseURL = "https://api.spotify.com/v1/artists/";
const cabooseURL = "/related-artists";
const { accessToken } = require('./spotify-routes');

router.post("/", async (req, res) => {
  try {
    const searchParams = req.body;
    console.log("SEARCH PARAMS", searchParams);
    // const search = searchParams.search;
    // const query = encodeURIComponent(search.query);

    const requestUrl = `${baseURL}${searchParams.id}${cabooseURL}`;
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
