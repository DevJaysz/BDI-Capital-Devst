import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import App from "./App.jsx";
import "./index.css";
import OurJourney from "./pages/OurJourney.jsx";
import ThriveWithUs from "./pages/ThriveWithUs.jsx";
import WhatWeOffer from "./pages/WhatWeOffer.jsx";
import OurPeople from "./pages/OurPeople.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import MeetOutMentors from "./pages/sections/OurPeople/MeetOutMentors.jsx";
import Policy from "./pages/Policy.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import Terms from "./pages/Terms.jsx";
import { Helmet } from "react-helmet";
import NavFooter from "./components/Ebooks/NavFooter.jsx";
import NavBook from "./components/Ebooks/Navbook.jsx";
import Cart from "./pages/Ebooks/LandingPage/Cart.jsx";
import Ebooks from "./pages/Ebooks/Ebooks.jsx";
import Financial from "./pages/Ebooks/Financial.jsx";
import Managerial from "./pages/Ebooks/Managerial.jsx";
import Taxation from "./pages/Ebooks/Taxation.jsx";
import Auditing from "./pages/Ebooks/Auditing.jsx";

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
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  const closeCart = () => {
    setIsCartOpen(false); // Close cart by setting the state to false
  };

  useEffect(() => {
    Aos.init(); // Initialize AOS animations on mount
  }, []);

  return (
    <div>
      <NavBook toggleCart={toggleCart} />
      {/* Pass toggleCart function */}
      {isCartOpen && <Cart closeCart={closeCart} />}{" "}
      {/* Render Cart if open and pass closeCart to Cart */}
      <Outlet /> {/* Content for the child route */}
      <NavFooter /> {/* Custom footer for Ebooks page */}
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
