// src/pages/Ebooks/LandingPage/Checkout.jsx
import React, { useState } from 'react';

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);

    // Prepare the cart items (example data)
    const items = [
      { name: 'Ebook 1', description: 'Financial ebook', price: 20, quantity: 1 },
      { name: 'Ebook 2', description: 'Managerial ebook', price: 25, quantity: 1 },
    ];

    // Call your backend to create the Checkout session
    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 2000, items: items }), // Amount is in cents
    });

    const session = await response.json();

    // Redirect to Stripe Checkout page
    const stripe = window.Stripe('pk_test_51QF7FTE0LwkAxQootNEaWIWHe0TTmQBwfSm1H30YmTMbG6gnu1KF737pKElVGHzPUZ3t8Wr9HWZ5B2JdMyzQTJnx00DgM0LwaC'); // Use your publishable key
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error('Error redirecting to checkout:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleCheckout} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Checkout'}
      </button>
    </div>
  );
};

export default Checkout;
