const stripe = require("stripe")(process.env.STRIPE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    // Handle any other HTTP method
  }
}
