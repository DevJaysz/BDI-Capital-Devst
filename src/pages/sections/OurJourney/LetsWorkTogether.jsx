import { TiMessages } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import Banner from "../../../assets/images/LetsWorkTogether.jpg";
function LetsWorkTogether() {
  return (
    <>
      <div className="text-center">
        <h1 className="my-5 text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold text-[#F0AE4F] uppercase">
          Let's Work Together
        </h1>
      </div>

      <div className=" w-full flex justify-center">
        <img
          className="object-cover w-full max-w-7xl h-64 rounded-lg md:h-30 lg:h-96 "
          src={Banner}
          alt="Contact Us"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 mt-6 lg:grid-cols-3 w-full max-w-7xl mx-auto">
        {[
          {
            icon: <TiMessages className="w-10 h-10" />,
            title: "Talk to Us",
            description: "Speak to our friendly team.",
            contact: "info@bdi-capital.com",
          },
          {
            icon: <SlLocationPin className="w-10 h-10" />,
            title: "Visit Us",
            description: "Visit our office HQ.",
            contact: "Des Voeux Road Central",
          },
          {
            icon: <IoCallOutline className="w-10 h-10" />,
            title: "Call Us",
            description: "Mon-Fri from 8am to 5pm.",
            contact: "(+63) 917-820-4369",
          },
        ].map(({ icon, title, description, contact }) => (
          <div
            key={title}
            className="p-2 md:p-3 rounded-lg border shadow-md flex items-center w-full"
          >
            <span className="p-4 text-gray-300 ">{icon}</span>
            <div className="ml-4">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                {title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <p className="mt-1 text-sm text-gray-800 dark:text-gray-300">
                {contact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LetsWorkTogether;
