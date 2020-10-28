const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ items, data, prices }) => {
  let text = ``;

  // user data
  for (const [key, value] of Object.entries(data)) {
    text += `${key}: ${value}\n`;
  }

  // items
  text += "----\n";
  items.forEach((element) => {
    for (const [key, value] of Object.entries(element)) {
      if (key !== "image" && key !== "type") {
        text += `${key}: ${value}\n`;
      }
    }
    text += "----\n";
  });

  // pricing
  for (const [key, value] of Object.entries(prices)) {
    text += `${key}: $ ${value}\n`;
  }

  await sgMail.send({
    to: "tianguberabdurahman@gmail.com", // "tianguberabdurahman@gmail.com"
    from: "jacksononlineorder@gmail.com",
    subject: "New Jackson Online Delivery Order",
    text,
  });

  let res;

  if (data.email) {
    res = await sgMail.send({
      to: data.email,
      from: "jacksononlineorder@gmail.com",
      subject: "New Jackson Online Delivery Order",
      text,
    });
  }

  return res;
};

export default async (req, res) => {
  const { items, data, prices } = req.body;

  if (req.method === "POST") {
    try {
      let response = await sendEmail({
        items,
        data,
        prices,
      });
      res.status(200).json({
        status: "success",
        data: response,
      });
    } catch (error) {
      // console.log({ error });
      res.status(500).send("error:", error);
    }
  }
};
