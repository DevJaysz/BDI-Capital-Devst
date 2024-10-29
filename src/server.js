const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const stripe = Stripe('sk_test_51QF7FTE0LwkAxQoobcUfcsCRYOnAIlyXSQN4Eb0fu9KXPea9ruAFW34Z4fpdjSfpBhRw1ogtWeYfrwpklaJ2ZkiC00zOn0KEt5');

app.use(cors());
app.use(bodyParser.json());

// Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // price in cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
