import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import NavBar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import App from "./App.jsx";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import OurJourney from "./pages/OurJourney.jsx";
import ThriveWithUs from "./pages/ThriveWithUs.jsx";
import WhatWeOffer from "./pages/WhatWeOffer.jsx";
import OurPeople from "./pages/OurPeople.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import MeetOutMentors from "./pages/sections/OurPeople/MeetOutMentors.jsx";
import Policy from "./pages/Policy.jsx";
import Terms from "./pages/Terms.jsx";
import NavFooter from "./components/Ebooks/NavFooter.jsx";
import NavBook from "./components/Ebooks/Navbook.jsx";
import Cart from "./pages/Ebooks/LandingPage/Cart.jsx";
import Ebooks from "./pages/Ebooks/Ebooks.jsx";
import Financial from "./pages/Ebooks/Financial.jsx";
import Managerial from "./pages/Ebooks/Managerial.jsx";
import Taxation from "./pages/Ebooks/Taxation.jsx";
import Auditing from "./pages/Ebooks/Auditing.jsx";
import Checkout from "./pages/Ebooks/LandingPage/Checkout.jsx";

const Layout = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS animations
  }, []);

  return (
    <div>
      <Helmet>
        <title>BDI Capital | Driving Innovations Through Investments</title>
        <meta
          name="description"
          content="BDI Capital has successfully closed $21 million in fundraising transactions for its clients. Turn your idea into reality."
        />
        <meta
          name="keywords"
          content="Innovative, Investment, Firm Specializing, Transformative, Business Growth, Strategic Funding, Solutions"
        />
      </Helmet>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const EbooksLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Cart items state

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  const closeCart = () => {
    setIsCartOpen(false); // Close cart by setting the state to false
  };

  // Add an item to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        // Product already exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1; // Increase quantity by 1
        return updatedItems;
      } else {
        // Product does not exist, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Increase the quantity of a specific product
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  // Decrease the quantity of a specific product
  const decreaseQuantity = (productId) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };

  //Remove an item from the cart
  const removeFromCart = (productId) => {
    console.log("Removing product with id:", productId); // Debugging output
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  useEffect(() => {
    Aos.init(); // Initialize AOS animations on mount
  }, []);

  return (
    <div>
      <NavBook toggleCart={toggleCart} />
      {isCartOpen && (
        <Cart
          closeCart={closeCart} // Pass this function
          cartItems={cartItems} // Pass this function
          removeFromCart={removeFromCart} // Pass this function
          increaseQuantity={increaseQuantity} // Pass this function
          decreaseQuantity={decreaseQuantity} // Pass this function
        />
      )}
      {/* Render Cart if open and pass closeCart to Cart */}
      <Outlet context={{ addToCart, cartItems }} />
      {/* Pass addToCart and cartItems to the child routes */}
      <NavFooter />
    </div>
  );
};

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main layout for other pages
    children: [
      {
        path: "",
        element: <OurJourney />, // Set OurJourney as the landing page
      },
      {
        path: "App",
        element: <App />,
      },
      {
        path: "ThriveWithUs",
        element: <ThriveWithUs />,
      },
      {
        path: "WhatWeOffer",
        element: <WhatWeOffer />,
      },
      {
        path: "OurPeople",
        element: <OurPeople />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "Mentor",
        element: <MeetOutMentors />,
      },
      {
        path: "Policy",
        element: <Policy />,
      },
      {
        path: "Terms",
        element: <Terms />,
      },
    ],
  },
  // Separate route for Ebooks with a different UI/layout
  {
    path: "/Ebooks",
    element: <EbooksLayout />, // This is a separate layout for the Ebooks page
    children: [
      {
        path: "", // Default child route for /Ebooks
        element: <Ebooks />,
      },
      {
        path: "Financial", // Relative path for /Ebooks/Financial
        element: <Financial />,
      },
      {
        path: "Managerial", // Relative path for /Ebooks/Financial
        element: <Managerial />,
      },
      {
        path: "Taxation", // Relative path for /Ebooks/Financial
        element: <Taxation />,
      },
      {
        path: "Auditing", // Relative path for /Ebooks/Financial
        element: <Auditing />,
      },
      {
        path: "Checkout", // Relative path for /Ebooks/Checkout
        element: <Checkout />,
      },
    ],
  },
]);

// Render the application
const container = document.getElementById("root");
const root = createRoot(container); // Create the root once

root.render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
