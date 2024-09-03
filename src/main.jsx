import { createRoot } from "react-dom/client";
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
import { useEffect } from "react";
import Terms from "./pages/Terms.jsx";
import { Helmet } from "react-helmet";

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

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <OurJourney />, // Set OurJourney as the landing page
      },
      {
        path: "/App",
        element: <App />,
      },

      {
        path: "/ThriveWithUs",
        element: <ThriveWithUs />,
      },
      {
        path: "/WhatWeOffer",
        element: <WhatWeOffer />,
      },
      {
        path: "/OurPeople",
        element: <OurPeople />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Mentor",
        element: <MeetOutMentors />,
      },
      {
        path: "/Policy",
        element: <Policy />,
      },
      {
        path: "/Terms",
        element: <Terms />,
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
