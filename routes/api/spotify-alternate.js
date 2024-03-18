const router = require("express").Router();
const spotifyNodeWrapper = import("spotify-node-wrapper");
const baseURL = "https://api.spotify.com/v1/artists/";
const cabooseURL = "/related-artists";
const { accessToken } = require("../../utils/helpers");


console.log("Access Token ", accessToken);

router.post("/", async (req, res) => {
  try {
    const searchParams = req.body;
    const search = searchParams.alternates;
    console.log("SEARCH PARAMS", searchParams);
    // const search = searchParams.search;
    // const query = encodeURIComponent(search.query);

    const requestUrl = `${baseURL}${search}${cabooseURL}`;
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
    res.json(err);
  }
});

module.exports = router;
