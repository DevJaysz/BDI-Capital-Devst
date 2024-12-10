import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { useOutletContext } from "react-router-dom";
import freeIcon from "../../../assets/Icons/FreeTag.json";
import addedToCartAnimation from "../../../assets/Icons/AddedToCart.json";
import products from "../../../assets/db/eproducts"; // Importing the Lottie file for "added to cart"
import Lottie from "lottie-react";

function Recommended() {
  const { addToCart } = useOutletContext();
  const [showAddedToCart, setShowAddedToCart] = useState(false); // State to control animation visibility

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAddedToCart(true); // Show the "Added to Cart" animation
    setTimeout(() => {
      setShowAddedToCart(false); // Hide the animation after 3 seconds
    }, 2000);
  };

  const freeProducts = products.filter((product) => product.is_free);

  return (
    <div className="bg-white relative">
      {/* Floating "Item added to cart" notification */}
      {showAddedToCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center rounded-lg shadow-lg p-4 bg-black bg-opacity-50">
          <div className="w-32 h-32">
            <Lottie animationData={addedToCartAnimation} loop={false} />
          </div>
        </div>
      )}
      <div className="container mx-auto w-full px-4 py-4 lg:w-full lg:px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-2xl mb-2 font-bold tracking-tight text-gray-900">
            Recommended for you!
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {freeProducts.map((product) => (
              <SwiperSlide key={product.id}>
                {/* Product Card */}
                <div className="relative p-2">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 transition-transform duration-300 transform hover:scale-105">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                    {/* Lottie Animation for Free Products */}
                    <div className="absolute top-2 left-2 w-12 h-12">
                      <Lottie animationData={freeIcon} loop={true} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#F0AE4F]"
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
                        <h3 className="text-xs text-gray-700 hover:underline pointer-events-auto cursor-pointer">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hidden lg:flex">
            <button className="swiper-button-prev">
              <RiArrowLeftWideFill size={30} className="text-[#F0AE4F]" />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hidden lg:flex">
            <button className="swiper-button-next">
              <RiArrowRightWideFill size={30} className="text-[#F0AE4F]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
