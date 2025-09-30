const express = require("express")
const router = express.Router();

const singlehotelHandler = require("../controllers/singleHotelControlller")

//localhost:3500/api/hotels/637138817378(some id)
router.route("/:id")
    .get(singlehotelHandler)

module.exports = router;
