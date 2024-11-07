require('dotenv').config();
const express = require("express");
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY); // Correctly access the secret key
 // Use environment variable for security
const cors = require("cors");
const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',  // Match the frontend's URL
}));

app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.description,
          },
          unit_amount: item.price * 100, // Price in cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      
      success_url: `${process.env.YOUR_FRONTEND_URL}/success`, // Make sure the environment variable is set
      cancel_url: `${process.env.YOUR_FRONTEND_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);  // Log the error for debugging
    res.status(500).send({ error: error.message });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
