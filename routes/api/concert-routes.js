const router = require('express').Router();
const fetch = require('node-fetch'); // Import the fetch library
const { User } = require('../../models');
const eventUrl = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK";

router.get('/', async (req, res) => {
    try {
        const ticketmasterAPI = await fetch(eventUrl);

        if (!ticketmasterAPI.ok) {
            throw Error(ticketmasterAPI.statusText);
        }

        const json = await ticketmasterAPI.json();
        res.json(json); // Send JSON response to the client
    } catch (error) {
        console.log(error); // Log the error
        res.status(500).send("Internal Server Error"); // Send an error response to the client
    }
});
// Define a function that uses the client secret key
function useClientSecretKey(data, clientSecretKey) {
    // Check if the client secret key matches a predefined value
    if (clientSecretKey === process.env.CLIENT_SECRET_KEY) {
        // Perform some action with the data using the client secret key
        console.log("Data processed using client secret key.");
    } else {
        console.log("Invalid client secret key.");
    }
    //const data = "user input";
    let  secretKey = {
        //clientId: "86a17ba2ebc44d938ad1938d90f156e1",
        consumerSecret: "A55roJhLU1K4Katw",
        redirectUri: "https://wiph2004.github.io/GroupProject02/",
    }
};

module.exports = router;