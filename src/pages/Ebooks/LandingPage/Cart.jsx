import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js"; 

const stripePromise = loadStripe('pk_test_51QF7FTE0LwkAxQootNEaWIWHe0TTmQBwfSm1H30YmTMbG6gnu1KF737pKElVGHzPUZ3t8Wr9HWZ5B2JdMyzQTJnx00DgM0LwaC');

function Cart({
  closeCart,
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [notification, setNotification] = useState(false);

  const handleCheckout = async () => {
    closeCart();
    const stripe = await stripePromise;

    // Check if cartItems is not empty
    if (cartItems.length === 0) return;

    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });

      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        console.error("Error creating checkout session:", session.error);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      // You may want to show a notification or alert the user here
    }
  };

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  return (
    <div className="relative z-50" role="dialog" aria-modal="true">
      {notification && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-green-600 text-white rounded-md shadow-lg">
          Item added to cart!
        </div>
      )}
      <div className="fixed inset-0 bg-black bg-opacity-75"></div>
      <div className="fixed inset-0 flex justify-end overflow-hidden">
        <div className="w-screen max-w-md pointer-events-auto bg-[#222222] shadow-xl">
          <div className="flex flex-col h-full overflow-y-scroll">
            <div className="flex items-start justify-between p-6">
              <h2 className="text-lg font-medium text-gray-300">Your Cart</h2>
              <button
                className="p-2 text-gray-400 hover:text-gray-500"
                onClick={closeCart}
                aria-label="Close cart"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="sr-only">Close panel</span>
              </button>
            </div>

            <ul role="list" className="divide-y divide-gray-200 px-6 py-4">
              {cartItems.length === 0 ? (
                <li className="py-6 text-center text-gray-500">Your cart is empty</li>
              ) : (
                cartItems.map((item, index) => (
                  <li key={index} className="flex py-6 items-center justify-between">
                    <img
                      className="h-24 w-24 flex-shrink-0 rounded-md border border-gray-200"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                    <div className="ml-4 flex flex-col justify-between w-full">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-300">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.author}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              className="text-gray-300 bg-gray-700 px-2 py-1 rounded"
                              onClick={() => decreaseQuantity(item.id)}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <p className="text-sm text-gray-400">{item.quantity}</p>
                            <button
                              className="text-gray-300 bg-gray-700 px-2 py-1 rounded"
                              onClick={() => increaseQuantity(item.id)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm text-gray-300">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          className="text-sm text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item from cart"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>

            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between text-base font-medium text-gray-300">
                <p>Subtotal</p>
                <p>
                  ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6 flex">
                <button
                  onClick={handleCheckout}
                  className={`w-full block text-center rounded-md px-6 py-3 text-white ${
                    cartItems.length === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </button>
              </div>
              <div className="text-center mt-6 text-sm text-gray-500">
                <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
