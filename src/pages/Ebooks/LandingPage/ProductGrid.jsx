import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Importing the cart icon
import Ebook from "../../../assets/images/Ebook.png";

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Financial Accounting",
      author: "John Doe",
      price: 29.99,
      image: Ebook,
    },
    {
      id: 2,
      name: "Managerial Accounting",
      author: "Jane Smith",
      price: 39.99,
      image: Ebook,
    },
    {
      id: 3,
      name: "Tax Accounting Made Easy",
      author: "Alice Johnson",
      price: 34.99,
      image: Ebook,
    },
    {
      id: 4,
      name: "Auditing and Assurance",
      author: "Robert Brown",
      price: 49.99,
      image: Ebook,
    },
    {
      id: 5,
      name: "Auditing and Assurance",
      author: "Robert Brown",
      price: 49.99,
      image: Ebook,
    },
    {
      id: 6,
      name: "Auditing and Assurance",
      author: "Robert Brown",
      price: 49.99,
      image: Ebook,
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto w-full px-4 py-7 lg:w-full lg:px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900">
            Recommended for You
          </h2>
          <a
            href="/products"
            className="text-sm text-indigo-600 hover:text-indigo-900"
          >
            more products &rarr;
          </a>
        </div>

        {/* Product Grid Section */}
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5 lg:grid-cols-6 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative ">
              {/* Product Image Container */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 transition-transform duration-300 transform hover:scale-105">
                <img
                  src={product.image}
                  alt={`Cover of ${product.name} by ${product.author}.`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                {/* Add to Cart Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 ">
                  {/* Circle with Cart Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#F0AE4F]">
                    <FaShoppingCart className="text-white text-xl cursor-pointer" />
                  </div>
                </div>
              </div>
              <div>
                {/* Product Info Section */}
                <div className="mt-4 flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-xs text-gray-700">
                      <a
                        href="#"
                        className="hover:underline pointer-events-auto"
                      >
                        {product.name} {/* Product Name */}
                      </a>
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {product.author}
                    </p>{" "}
                    {/* Author Name */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price.toFixed(2)} {/* Product Price */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
