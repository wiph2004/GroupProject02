const router = express.Router();
const { Category, Category } = require('../../models');
const { Category, getAlbum } = require('../config/connection')
const baseURL = "https://api.spotify.com/v1/me/search?market=us&q=";
 
router.get('/', async (res, req) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'CategoryName': 'models/category.js', 
            
            },
        });

    res.json(newSearch);
    }catch (err) {
        console.log(err);
    }
});

module.exports = router;

