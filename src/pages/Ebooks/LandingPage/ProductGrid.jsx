import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaShoppingCart } from "react-icons/fa"; // Importing the cart icon
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import Ebook from "../../../assets/images/Ebook.png";
import { useOutletContext } from "react-router-dom"; // Import useOutletContext

function ProductGrid() {
  const { addToCart } = useOutletContext();
  // Get addToCart function from Outlet context
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
      <div className="container mx-auto w-full px-4 py-4 lg:w-full lg:px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-2xl mb-4 font-bold tracking-tight text-gray-900">
            Recommended for You
          </h2>
          <a
            href="/products"
            className="text-sm text-indigo-600 hover:text-indigo-900"
          >
            more products &rarr;
          </a>
        </div>

        {/* Swiper Section */}
        <div className="relative ">
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
            {products.map((product) => (
              <SwiperSlide key={product.id} >
                <div className="relative p-2">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 transition-transform duration-300 transform hover:scale-105">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#F0AE4F]"
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart className="text-white text-xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 flex justify-between">
                      <div className="flex flex-col">
                        <h3 className="text-xs text-gray-700 hover:underline pointer-events-auto cursor-pointer ">
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

          {/* Custom Navigation Buttons - Positioned outside */}
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hidden lg:flex">
            <button className="swiper-button-prev ">
              <RiArrowLeftWideFill size={30} className="text-[#F0AE4F]" />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hidden lg:flex">
            <button className="swiper-button-next ">
              <RiArrowRightWideFill size={30} className="text-[#F0AE4F] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
