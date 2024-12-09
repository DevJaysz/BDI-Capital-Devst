import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaShoppingCart } from "react-icons/fa"; // Importing the cart icon
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import products from "../../../assets/db/eproducts";
import { useOutletContext } from "react-router-dom";
import freeIcon from "../../../assets/Icons/Animation - 1733753052878.json"; // Adjust the path
import Lottie from "lottie-react";

function Recommended() {
  const { addToCart } = useOutletContext();
  const handleAddToCart = (product) => {
    addToCart(product); // Add item to cart
  };

  const freeProducts = products.filter((product) => product.is_free);

  return (
    <div className="bg-white relative">
      {/* Floating "Item added" notification */}

      <div className="container mx-auto w-full px-4 py-4 lg:w-full lg:px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-2xl mb-2 font-bold tracking-tight text-gray-900">
            Recommended for you!
          </h2>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]} // Enables navigation and autoplay for the slider.
            spaceBetween={20} // Spacing between slides.
            slidesPerView={2} // Number of slides visible at once.
            breakpoints={{
              640: { slidesPerView: 3 }, // For devices with a width >= 640px, show 3 slides.
              1024: { slidesPerView: 5 }, // For devices with a width >= 1024px, show 5 slides.
            }}
            loop={true} // Enables looping through slides.
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings.
            navigation={{
              nextEl: ".swiper-button-next", // Custom next button.
              prevEl: ".swiper-button-prev", // Custom previous button.
            }}
          >
            {/* Mapping over free products to create slides */}
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
                        onClick={() => handleAddToCart(product)} // Calls `handleAddToCart` when clicked.
                      >
                        <FaShoppingCart className="text-white text-xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
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
                        ${product.price.toFixed(2)}{" "}
                        {/* Formats the price to 2 decimal places. */}
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
