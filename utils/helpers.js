const spotifyNodeWrapper = import("spotify-node-wrapper");

let accessToken;
let accessTokenExpiry;
let spotifyNodeApi;

const getAccessToken = async () => {
  console.log("Get access Token");

  return new Promise(async (resolve, reject) => {
    if (!accessToken || Date.now() > accessTokenExpiry) {
      spotifyNodeApi = await spotifyNodeWrapper;
      const newAccessToken = await spotifyNodeApi.getSpotifyAccessToken(
        spotifyApiCreds.clientId,
        spotifyApiCreds.clientSecret,
        spotifyApiCreds.redirectUri
      );
      accessToken = newAccessToken;
      accessTokenExpiry = Date.now() + 1 * 60 * 60 * 1000;
    }

    resolve({ accessToken, accessTokenExpiry });
  });
};

const spotifyApiCreds = {
  clientId: "86a17ba2ebc44d938ad1938d90f156e1",
  clientSecret: "7cab5b4ff3f3436f9178428a31400340",
  redirectUri: "https://wiph2004.github.io/GroupProject02/",
};

const getAccessTokenData = () => {
  return { accessToken, accessTokenExpiry };
};

module.exports = { getAccessTokenData, getAccessToken };






// const accessToken = getAccessTokenData.accessToken;
// const accessTokenExpiry = getAccessTokenData.accessTokenExpiry;
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