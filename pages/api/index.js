const stripe = require("stripe")("sk_test_RmHsugbQGYQxacIKkyVRLL76004XvgSevP");

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    // Handle any other HTTP method
  }
}
