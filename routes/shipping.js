var express = require("express");
var router = express.Router();
var mapShipping = require("../shipping/map-shipping");

// api routes
router.post("/shipping-rates", async (req, res) => {
  mapShipping.mapShipping(req.body);
  res.sendStatus(200);
});

module.exports = router;
