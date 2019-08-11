let express = require('express');
let router = express.Router();

let Gig = require('../../models/gig')

// TODO: CRUD for gigs

// GET all gigs:
router.get('/', (req, res) => {
    // Gig.find((err, gigsResult) => {
    //     if (err) return res.json({ error: err})
    //     console.log(gigsResult)
    //     res.json(gigsResult)
    // })

    console.log("Get all gigs request OK");

})

module.exports = router;