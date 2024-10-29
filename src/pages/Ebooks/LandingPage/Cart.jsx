import React, { useState } from "react"; // Import useState
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Cart({
  closeCart,
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [notification, setNotification] = useState(false); // State for notification
  const navigate = useNavigate(); // Initialize navigate

  const handleCheckout = () => {
    closeCart(); // Close the cart
    navigate("/Ebooks/Checkout", { state: { cartItems } }); // Navigate to Checkout // Pass cartItems as state
  };

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false); // Hide notification after 3 seconds
    }, 3000);
  };

  // Update the addToCart function (assumed you have it in a parent component)
  const addToCart = (item) => {
    // Assuming this is how you add items to the cart
    // Call the function to add the item to the cart
    // Example: addItemToCart(item);

    // Show the notification when an item is added to the cart
    showNotification();
  };

  return (
    <div className="relative z-50" role="dialog" aria-modal="true">
      {/* Notification for item added to cart */}
      {notification && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-green-600 text-white rounded-md shadow-lg">
          Item added to cart!
        </div>
      )}

      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-75"></div>
      {/* Cart panel */}
      <div className="fixed inset-0 flex justify-end overflow-hidden">
        <div className="w-screen max-w-md pointer-events-auto bg-[#222222] shadow-xl">
          <div className="flex flex-col h-full overflow-y-scroll">
            {/* Cart header with close button */}
            <div className="flex items-start justify-between p-6">
              <h2 className="text-lg font-medium text-gray-300">Your Cart</h2>
              <button
                className="p-2 text-gray-400 hover:text-gray-500"
                onClick={closeCart} // Close cart function
                aria-label="Close cart"
              >
                {/* Close icon */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close panel</span>
              </button>
            </div>

            {/* Cart items list */}
            <ul role="list" className="divide-y divide-gray-200 px-6 py-4">
              {cartItems.length === 0 ? (
                <li className="py-6 text-center text-gray-500">
                  Your cart is empty
                </li>
              ) : (
                cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex py-6 items-center justify-between"
                  >
                    {/* Product image */}
                    <img
                      className="h-24 w-24 flex-shrink-0 rounded-md border border-gray-200"
                      src={item.image}
                      alt={item.name}
                      loading="lazy" // Adding lazy loading for better performance
                    />
                    <div className="ml-4 flex flex-col justify-between w-full">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-300">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.author}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            {/* Decrease quantity button */}
                            <button
                              className="text-gray-300 bg-gray-700 px-2 py-1 rounded"
                              onClick={() => decreaseQuantity(item.id)} // Decrease quantity function
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            {/* Product quantity display */}
                            <p className="text-sm text-gray-400">{item.quantity}</p>
                            {/* Increase quantity button */}
                            <button
                              className="text-gray-300 bg-gray-700 px-2 py-1 rounded"
                              onClick={() => increaseQuantity(item.id)} // Increase quantity function
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Price and remove button */}
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm text-gray-300">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          className="text-sm text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(item.id)} // Remove item from cart function
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

            {/* Cart total and actions */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between text-base font-medium text-gray-300">
                <p>Subtotal</p>
                <p>
                  $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)} {/* Calculate subtotal */}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6 flex">
                {/* Checkout button */}
                <button
                  onClick={handleCheckout} // Use handleCheckout to close cart and navigate
                  className={`w-full block text-center rounded-md px-6 py-3 text-white ${cartItems.length === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`} // Disable button if cart is empty
                  disabled={cartItems.length === 0} // Disable button if cart is empty
                >
                  Checkout
                </button>
              </div>
              <div className="text-center mt-6 text-sm text-gray-500">
                {/* Continue shopping button */}
                <Link 
                  to="/" // Link back to main shopping page
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
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
