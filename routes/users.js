var express = require("express");
var router = express.Router();

// api routes
router.get("/", async (req, res) => {
  return "user";
});

module.exports = router;
