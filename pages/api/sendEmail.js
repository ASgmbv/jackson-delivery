// eslint-disable-next-line no-undef
const sgMail = require("@sendgrid/mail");

// eslint-disable-next-line no-undef
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ items, data, prices, restaurant }) => {
  let text = ``;

  text += `${
    prices.delivery === 0 ? "PICK UP" : "DELIVERY"
  } for ${restaurant.name.toUpperCase()}`;
  text += "\n\n";
  text += "------------ CUSTOMER INFO ------------\n";

  // CUSTOMER
  for (const [key, value] of Object.entries(data)) {
    text += `${key}: ${value}\n`;
  }

  text += "\n\n";

  // ITEMS
  let excludedFields = ["image", "description", "options", "quantity", "price"];
  items.forEach((element, index) => {
    text += `------------ ITEM ${index + 1} ------------\n`;
    for (const [key, value] of Object.entries(element)) {
      if (!excludedFields.includes(key)) {
        if (key === "title") {
          text += `${element.quantity} X ${value.toUpperCase()}\n`;
        } else if (key === "totalPrice") {
          text += `price: $${value}\n`;
        } else {
          text += `${key.toLowerCase()}: ${value}\n`;
        }
      }
    }
    text += "\n\n";
  });

  text += "----------------------------\n";

  // PRICING
  for (const [key, value] of Object.entries(prices)) {
    text += `${key.toUpperCase()}: $${value}\n`;
  }

  let res = await sgMail.send({
    // to: ["alimbeksagymbaev@gmail.com", restaurant.email],
    to: ["tianguberabdurahman@gmail.com", restaurant.email],
    from: "jacksononlineorder@gmail.com",
    subject: "New Jackson Online Delivery Order",
    text,
  });

  return res;
};

export default async (req, res) => {
  const { items, data, prices, restaurant } = req.body;

  if (req.method === "POST") {
    try {
      let response = await sendEmail({
        items,
        data,
        prices,
        restaurant,
      });
      res.status(200).json({
        status: "success",
        data: response,
      });
    } catch (error) {
      res.status(500).send("error:", error);
    }
  }
};
