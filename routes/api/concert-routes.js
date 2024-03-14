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

module.exports = router;