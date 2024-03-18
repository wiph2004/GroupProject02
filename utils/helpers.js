const spotifyNodeWrapper = import("spotify-node-wrapper");

// const importSpotifyWrapper = async () => {
//     const { getSpotifyAccessToken, getAlbum } = await import('spotify-node-wrapper');
//   };
//   importSpotifyWrapper();

let accessToken;
let accessTokenExpiry;
let spotifyNodeApi;

const getAccessToken = async () => {
    return new Promise(async (resolve, reject) => {
        spotifyNodeApi = await spotifyNodeWrapper;
        accessToken = await spotifyNodeApi.getSpotifyAccessToken(
            spotifyApiCreds.clientId,
            spotifyApiCreds.clientSecret,
            spotifyApiCreds.redirectUri
        );

        accessTokenExpiry = Date.now() + 1 * 60 * 60 * 1000;
        resolve(accessToken);
    });
} 

const spotifyApiCreds = {
  clientId: "86a17ba2ebc44d938ad1938d90f156e1",
  clientSecret: "7cab5b4ff3f3436f9178428a31400340",
  redirectUri: "https://wiph2004.github.io/GroupProject02/",
};

module.exports = { accessToken, accessTokenExpiry, getAccessToken };