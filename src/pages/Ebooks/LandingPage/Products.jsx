import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import Lottie from "lottie-react";
import products from "../../../assets/db/eproducts";
import addedToCartAnimation from "../../../assets/Icons/AddedToCart.json";
import freeIcon from "../../../assets/Icons/FreeTag.json";
import ProductModal from "../../../components/Ebooks/ProductModal";

function Products({ selectedCategory }) {
  const { addToCart } = useOutletContext();
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    if (product) {
      console.log("Adding to cart:", product);
      addToCart(product);
      setShowAddedToCart(true);
      setTimeout(() => setShowAddedToCart(false), 2000);
    }
  };

  const openModal = (product) => {
    if (product) {
      console.log("Opening modal for:", product);
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-white relative">
      {showAddedToCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center rounded-lg shadow-lg p-4 bg-black bg-opacity-50">
          <div className="w-32 h-32">
            <Lottie animationData={addedToCartAnimation} loop={false} />
          </div>
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleAddToCart={handleAddToCart}
      />

      <div className="container mx-auto w-full px-4 py-4 lg:w-full lg:px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative p-2">
              <div className="relative overflow-hidden rounded-md bg-gray-200 transition-transform duration-300 transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
                {product.is_free && (
                  <div className="absolute top-2 left-2 w-12 h-12">
                    <Lottie animationData={freeIcon} loop={true} />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0AE4F]"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart className="text-white text-xl cursor-pointer" />
                  </div>
                </div>
              </div>

              <div>
                <h3
                  onClick={() => openModal(product)}
                  className="mt-4 text-xs text-gray-700 font-semibold cursor-pointer hover:underline"
                >
                  {product?.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{product?.author}</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  ${product?.price?.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
