import React from "react";

function Cart({ closeCart }) {
  const cartItems = []; // Assuming cart items are fetched or passed as props

  return (
    <div className="relative z-50" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-75"></div>

      <div className="fixed inset-0 flex justify-end overflow-hidden">
        <div className="w-screen max-w-md pointer-events-auto bg-[#222222] shadow-xl">
          <div className="flex flex-col h-full overflow-y-scroll">
            <div className="flex items-start justify-between p-6">
              <h2 className="text-lg font-medium text-gray-300">
                Shopping cart
              </h2>
              <button
                className="p-2 text-gray-400 hover:text-gray-500"
                onClick={closeCart}
              >
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

            <ul role="list" className="divide-y divide-gray-200 px-6 py-4">
              {cartItems.length === 0 ? (
                <li className="py-6 text-center text-gray-500">
                  Your cart is empty
                </li>
              ) : (
                // Map through cart items here if available
                cartItems.map((item) => (
                  <li key={item.id} className="flex py-6">
                    {/* Cart item details */}
                  </li>
                ))
              )}
            </ul>

            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between text-base font-medium text-gray-300">
                <p>Subtotal</p>
                <p>${cartItems.length > 0 ? "0.00" : "0.00"}</p>{" "}
                {/* Update subtotal dynamically */}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="block text-center rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
                >
                  Checkout
                </a>
              </div>
              <div className="text-center mt-6 text-sm text-gray-500">
                <button className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
