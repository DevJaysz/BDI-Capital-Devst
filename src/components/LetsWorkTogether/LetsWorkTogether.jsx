import { TiMessages } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import Banner from "../../assets/images/LetsWorkTogether.jpg";
function LetsWorkTogether() {
  return (
    <>
      <div className="text-center">
        <h1 className="  text-2xl md:text-3xl lg:text-5xl   font-semibold text-gray-300  uppercase">
          Let's Work Together
        </h1>
      </div>

      <div className="mt-10">
        <img
          className="object-cover w-full h-64 rounded-lg sm:h-80 lg:h-96"
          src={Banner}
          alt="Contact Us"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 mt-10  lg:grid-cols-3 items-center justify-center">
        {[
          {
            icon: <TiMessages className="w-12 h-12" />,
            title: "Talk to Us",
            description: "Speak to our friendly team.",
            contact: "info@bdi-capital.com",
          },
          {
            icon: <SlLocationPin className="w-12 h-12" />,
            title: "Visit Us",
            description: "Visit our office HQ.",
            contact:
              "c/o Unit 1002, Unicorn Trade Centre, 127-131 Des Voeux Road Central, Hong Kong",
          },
          {
            icon: <IoCallOutline className="w-12 h-12" />,
            title: "Call Us",
            description: "Mon-Fri from 8am to 5pm.",
            contact: "(+63) 917-820-4369",
          },
        ].map(({ icon, title, description, contact }) => (
          <div key={title} className="p-6 rounded-lg border shadow-md">
            <div className="flex items-start">
              <span className="p-4 text-gray-300 rounded-lg">{icon}</span>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {description}
                </p>
                <p className="mt-2 text-sm text-gray-300">{contact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LetsWorkTogether;
