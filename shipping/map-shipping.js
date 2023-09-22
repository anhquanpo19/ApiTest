var postShipment = require("./post-shipments");
async function mapShipping(formData) {
  var data = {
    address_from: mapUser(formData.seller_address),
    address_to: mapUser(formData.customer_address),
    parcels: mapParcels(formData.cart?.products || []),
    async: false,
    carrier_accounts: ["4823122e77ab4686812eb476e31c9467"],
  };
  await postShipment.createShipments(data);
}

function mapUser(user) {
  let customUser = {
    name: user.first_name + " " + user.last_name,
    street1: user.street,
    city: user.city,
    state: user.state,
    zip: user.zip_code,
    country: user.country,
    phone: user.phone,
    email: user.email,
  };
  return customUser;
}

function mapParcels(products) {
  if (products.length > 0) {
    return products.map((product) => {
      return {
        length: product.variant?.dimensions?.length?.split(" ")[0],
        width: product.variant?.dimensions?.width.split(" ")[0],
        height: product.variant?.dimensions?.height.split(" ")[0],
        distance_unit: product.variant?.dimensions?.length?.split(" ")[1],
        weight: product.variant?.weight.split(" ")[0],
        mass_unit:
          product.variant?.weight.split(" ")[1] == "lbs"
            ? "lb"
            : product.variant?.weight.split(" ")[1],
      };
    });
  } else return [];
}

module.exports = { mapShipping };
