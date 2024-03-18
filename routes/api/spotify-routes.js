const router = require("express").Router();
const baseURL = "https://api.spotify.com/v1/search?market=us&q=";
const { getAccessToken } = require("../../utils/helpers");

router.post("/", async (req, res) => {
  try {
    
    const { accessToken } = await getAccessToken();

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
