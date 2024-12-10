import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import freeIcon from "../../assets/Icons/FreeTag.json";

function ProductModal({
  product,
  isOpen,
  onClose,
  handleAddToCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const modalRef = useRef(null);

  // Close modal if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className=" bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full flex flex-col md:flex-row"
      >
        {/* Left side with the product image */}
        <div className="relative md:w-1/2 mb-4 md:mb-0 p-4">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-auto object-cover"
          />
          {product.is_free && (
            <div className="absolute top-0 left-2 rounded-full p-2">
              <Lottie animationData={freeIcon} loop={true} />
            </div>
          )}
        </div>

        {/* Right side with product details */}
        <div className="relative md:w-1/2 md:pl-6 flex flex-col justify-center gap-2 p-4 ">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-primary mt-2">
              {product.name}
            </h2>
          </div>

          <p className="text-gray-500 mt-1 text-sm">{product.author}</p>

          <p className="mt-2 text-lg font-bold">${product.price}</p>

          <p className="mt-4 text-gray-700 text-xs text-justify">
            {product.desc}
          </p>

          {/* Counter */}
          <div className="flex justify-between">
            <div className="flex mt-4 items-center">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="px-4 py-2 bg-gray-200 rounded-l-lg"
              >
                -
              </button>
              <p className="border border-gray-300 mx-2 w-12 text-center">
                {product.quantity}
              </p>
              <button
                onClick={() => increaseQuantity(product.id)}
                className="px-4 py-2 bg-gray-200 rounded-r-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                handleAddToCart(product, product.quantity); // Use parent-managed quantity
                onClose();
              }}
              className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-gray-500 font-bold text-xl"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
