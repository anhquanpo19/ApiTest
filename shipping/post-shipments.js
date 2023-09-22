var axios = require("axios");
var API_TOKEN =
  "ShippoToken shippo_test_86dda5ed13316ea0b728d1e58f193ccee5fe873b";
async function createShipments(shipment) {
  await axios
    .post("https://api.goshippo.com/shipments", shipment, {
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
      },
    })
    .then(function (response) {
      console.log(response.data.rates);
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = { createShipments };
