import NavLogo from "../../assets/images/NavBar_Logo.png";
import { Link } from "react-router-dom";

function NavFooter() {
  const links = [
    {
      title: "Contact Us",
      items: [
        { text: "(+63) 917-820-4369", href: "" },
        {
          text: "info@bdi-capital.com",
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@bdi-capital.com",
          target: "_blank",
        },
      ],
    },
    {
      title: "Legal",
      items: [
        { text: "Privacy Policy", href: "/Policy" },
        { text: "Terms & Conditions", href: "/Terms" },
      ],
    },
  ];

  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={NavLogo} className="h-16 mr-3" alt="BDI Capital Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            {links.map((section) => (
              <div key={section.title}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  {section.items.map((item) => (
                    <li key={item.text} className="mb-4">
                      {item.target ? (
                        <a
                          href={item.href}
                          target={item.target}
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <Link to={item.href} className="hover:underline">
                          {item.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-200 dark:border-gray-300 w-full" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              BDI Capital
            </a>
            , Hongkong | Germany | Philippines | Singapore. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default NavFooter;
