import React from 'react';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const { state } = useLocation(); // Get the state from the location
  const cartItems = state?.cartItems || []; // Extract cartItems, default to an empty array if undefined

  // Calculate subtotal, discount, tax, and total
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 0; // Set to your discount logic if any
  const tax = subtotal * 0.08; // Example: 8% tax rate
  const total = subtotal - discount + tax;

  return (
    <div className="container mx-auto h-auto max-w-6xl max-lg:max-w-2xl p-4 mt-16">
      <div className="flex flex-col-2 gap-12">
        <div className="flex-1">
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-2xl font-extrabold text-gray-800">Your Cart</h2>
            <div className="space-y-4 mt-8">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                        <img src={item.image} className="w-full h-full object-contain" alt={item.name} />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                        <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">
                          ${(item.price * item.quantity).toFixed(2)}
                        </h6>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <hr className="border-gray-300" />}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {['https://readymadeui.com/images/master.webp', 'https://readymadeui.com/images/visa.webp', 'https://readymadeui.com/images/american-express.webp'].map((src, idx) => (
              <img key={idx} src={src} alt={`card${idx + 1}`} className="w-12 object-contain" />
            ))}
          </div>
        </div>

        <form className="flex-1">
          <h2 className="text-2xl font-extrabold text-gray-300">Payment Details</h2>
          <div className="grid gap-4 mt-8">
            <div>
              <label htmlFor="card-holder-name" className="block text-base font-semibold text-gray-400 mb-2">
                Card Holder Name
              </label>
              <input id="card-holder-name" type="text" placeholder="Name" required className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
            </div>
            <div>
              <label htmlFor="card-holder-name" className="block text-base font-semibold text-gray-400 mb-2">
                Email Address
              </label>
              <input id="card-email9" type="email" placeholder="@user.com" required className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
            </div>
            <div>
              <label htmlFor="card-number" className="block text-base font-semibold text-gray-400 mb-2">
                Card Number
              </label>
              <input id="card-number" type="text" placeholder="0000 0000 0000 0000" required className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 pr-2">
                <label htmlFor="expiry-date" className="block text-base font-semibold text-gray-400 mb-2">
                  Expiry Date
                </label>
                <input id="expiry-date" type="date" placeholder="MM/YY" required  className="px-4 py-3 bg-transparent text-gray-400 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="cvc" className="block text-base font-semibold text-gray-400 mb-2">
                  CVC
                </label>
                <input id="cvc" type="text" placeholder="CVC" required  className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
              </div>
            </div>
            <ul className="text-gray-300 mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${subtotal.toFixed(2)}</span></li>
              <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto font-bold">${discount.toFixed(2)}</span></li>
              <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span></li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${total.toFixed(2)}</span></li>
            </ul>

            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
