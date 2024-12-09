import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import Lottie from "lottie-react";

import products from "../../../assets/db/eproducts";
import freeIcon from "../../../assets/Icons/Animation - 1733753052878.json"; // Adjust the path

function Products({ selectedCategory }) {
  const { addToCart } = useOutletContext();
  const [showAddToCartAnimation, setShowAddToCartAnimation] = useState(false);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAddToCartAnimation(true);
    setTimeout(() => setShowAddToCartAnimation(false), 1000);
  };

  return (
    <div className="bg-white relative">
      {showAddToCartAnimation && (
        <div className="fixed bottom-5 left-5 animate-bounce p-3 bg-green-500 text-white rounded-full shadow-lg">
          Item added to cart!
        </div>
      )}

      <div className="container mx-auto w-full px-4 py-4 lg:w-full lg:px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative p-2">
              <div className="relative overflow-hidden rounded-md bg-gray-200 transition-transform duration-300 transform hover:scale-105">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />

                {/* Lottie icon for free products */}
                {product.is_free && (
                  <div className="absolute top-2 left-2 w-12 h-12">
                    <Lottie animationData={freeIcon} loop={true} />
                  </div>
                )}

                {/* Add to Cart Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0AE4F]"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart className="text-white text-xl cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <div className="mt-4 flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-xs text-gray-700 hover:underline cursor-pointer">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {product.author}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price.toFixed(2)}
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

export default Products;
