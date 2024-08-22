import James_Mentor from "../../../assets/images/James_Mentor.jpg";
import Jochen_Mentor from "../../../assets/images/Jochen_Mentor.jpg";
import Jonas_Mentor from "../../../assets/images/Jonas_Mentor.jpg";

const ourMentors = [
  {
    name: "James Buskowitz",
    roles: [
      "Founder and CEO of Buskowitz Energy",
      "Buskowitz Energy PTE LTD",
      "BDI Capital",
    ],
    image: James_Mentor,
    description:
      "James Buskowitz is the leader of Buskowitz Group's Infrastructure Development, Renewable Energy, and Financing & Investment arm. He has founded multiple successful businesses, including Energy Renewables Asia, Buskowitz Development Inc., and Buskowitz Finance Inc. Within a year, he established a strong renewable energy portfolio, capturing over 20% of the Solar PV Rooftops market in the Philippines. James focuses on developing renewable assets to support low-carbon initiatives and address energy demands in the Philippines and Southeast Asia. He specializes in Project & Corporate Finance, Mergers & Acquisitions, and Investment Management, and is also involved in property aspects like land acquisition, construction, and asset management.",
  },
  {
    name: "Jochen Buskowitz",
    roles: [
      "Chairman Emeritus of Buskowitz Energy",
      "Founder of Monaco Suites de Boracay",
    ],
    image: Jochen_Mentor,
    description:
      "Jochen Buskowitz, Co-Founder and Executive Director of Buskowitz Finance Inc., has over 45 years of experience in sales, investment, and development. Born in post-WWII Germany and raised in a small apartment, he served in the Marines before building a diverse career, including regional distribution, car dealerships, yacht rentals, and real estate investments. In the late 1970s, he discovered and developed Boracay, starting with the Paradise Garden Resort Hotel and later contributing to other major hotel and infrastructure projects like Monaco Suites de Boracay. Today, he advises on global strategy and investment relations for Buskowitz Finance Inc. and is known for his innovative contributions to renewable resources.",
  },
  {
    name: "Jonas Gudmunds",
    roles: [
      "Founder and CEO of Stratex Consulting AB",
      "Founder of Ferangi Realty Development Inc.",
    ],
    image: Jonas_Mentor,
    description:
      "Jonas Gudmunds is the CEO of Stratex Consulting and an Independent Director of Buskowitz Finance Inc. He previously founded and led Trygga Hem Skandinavien AB, a home security company that went public on NASDAQ in 2007 and was acquired for around $30 million in 2013. He has also served as CEO of Action Base Marketing Technology and Head of Marketing at GE Capital Bank. Jonas sits on several boards in Sweden and the Philippines and holds degrees in Business from the University of Virginia and Bath School of Management.",
  },
];

function MeetOutMentors() {
  return (
    <section id="Mentor ">
      <div className="container mx-auto h-auto min-h-screen justify-center items-center flex flex-col gap-8 px-8 -mt-5 xl:-mt-10 ">
        <h2 className="text-center text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold text-[#F0AE4F]">
          Our Mentors
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {ourMentors.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col xl:flex-row items-center gap-6  rounded-lg shadow-lg ${
                index === 2 ? "col-span-1 justify-self-center" : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-60 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <p className="text-md font-semibold text-gray-300">
                  {member.name}
                </p>
                {member.roles.map((role, idx) => (
                  <p key={idx} className="text-xs font-medium text-[#F0AE4F]">
                    {role}
                  </p>
                ))}
                <p className="text-sm text-gray-400 text-justify">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetOutMentors;
