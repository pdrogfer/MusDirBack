let express = require('express');
let router = express.Router();

let apiGigsRouter = require('./api/gigs');
let apiBandsRouter = require('./api/bands');

router.use('/gigs', apiGigsRouter);
router.use('/bands', apiBandsRouter);

module.exports = router;