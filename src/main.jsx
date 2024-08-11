import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import App from "./App.jsx";
import "./index.css";
import OurJourney from "./pages/OurJourney.jsx";
import ThriveWithUs from "./pages/ThriveWithUs.jsx";
import WhatWeOffer from "./pages/WhatWeOffer.jsx";
import OurPeople from "./pages/OurPeople.jsx";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/OurJourney",
        element: <OurJourney />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
