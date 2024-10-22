import React from 'react';

function Cart({ closeCart }) {
  const cartItems = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      price: 90.00,
      color: 'Salmon',
      qty: 1,
      imgSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      price: 32.00,
      color: 'Blue',
      qty: 1,
      imgSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    },
  ];

  return (
    <div className="relative z-50" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-75"></div>

      <div className="fixed inset-0 flex justify-end overflow-hidden">
        <div className="w-screen max-w-md pointer-events-auto bg-[#222222] shadow-xl">
          <div className="flex flex-col h-full overflow-y-scroll">
            <div className="flex items-start justify-between p-6">
              <h2 className="text-lg font-medium text-gray-300">Shopping cart</h2>
              <button
                className="p-2 text-gray-400 hover:text-gray-500"
                onClick={closeCart}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="sr-only">Close panel</span>
              </button>
            </div>

            <ul role="list" className="divide-y divide-gray-200 px-6 py-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex py-6">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-24 w-24 rounded-md border border-gray-200"
                  />
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-300">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                    <div className="flex justify-between items-end text-sm text-gray-500 mt-4">
                      <p>Qty {item.qty}</p>
                      <button className="font-medium text-indigo-600 hover:text-indigo-500">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between text-base font-medium text-gray-300">
                <p>Subtotal</p>
                <p>$122.00</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" className="block text-center rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
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
