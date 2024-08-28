import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

function ContactUs() {
  return (
    <section
      id="ContactUs"
      className="container mx-auto flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8 md:-mt-10"
    >
      <div className="flex flex-col lg:flex-row items-center gap-4  md:gap-8 w-full">
        <div
          className="max-w-3xl  flex flex-col gap-4 items-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-extrabold md:text-6xl mt-5 text-[#F0AE4F]">
            Let's build something exciting together!
          </h2>
          <p className="text-sm md:text-base text-gray-300 ">
            We'd love to hear from you! Whether you have a question, feedback,
            or need assistance, feel free to reach out to us. Fill out the form,
            and our team will get back to you as soon as possible.
          </p>
          <p className=" text-sm md:text-base text-gray-300 ">
            Get in touch with us to discuss your ideas, ask questions, or
            explore how we can work together. We’re here to help and look
            forward to connecting with you!
          </p>
          <div className="text-gray-300">
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill className="text-lg" />
              <span>Phone: (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-lg" />
              <span>Email: contact@example.com</span>
            </div>
          </div>
        </div>

        <div
          className="mx-auto max-w-lg w-full gap-4 p-5 md:p-10 text-center flex flex-col rounded-md border border-neutral-800 bg-neutral-900/50 shadow-lg"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3 className="text-2xl font-bold md:text-3xl text-[#F0AE4F]">
            Let's Connect!
          </h3>

          {/* Form */}
          <form
            className="max-w-md text-left w-full text-gray-300 flex flex-col gap-4"
            name="wf-form-password"
            method="get"
          >
            <div className="flex flex-col gap-2">
              <div className=" flex gap-2 flex-col xl:flex-row ">
                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="mb-1 font-medium text-sm"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter First name"
                    autoComplete="given-name"
                    className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="last-name"
                    className="mb-1 font-medium text-sm"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Enter Last name"
                    autoComplete="given-name"
                    className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
                  />
                </div>
              </div>

              <div className="flex gap-2 flex-col lg:flex-row">
                <div className="w-full">
                  <label htmlFor="email" className="mb-1 font-medium text-sm">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    name="email"
                    autoComplete="email"
                    className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="contact-number"
                    className="mb-1 font-medium text-sm"
                  >
                    Contact Number:
                  </label>
                  <input
                    type="tel"
                    id="contact-number"
                    placeholder="Enter Contact Number"
                    name="contact-number"
                    autoComplete="tel"
                    className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project-brief" className="font-medium text-sm">
                Message:
              </label>
              <textarea
                id="project-brief"
                name="project-brief"
                placeholder="Enter your Message"
                autoComplete="off"
                maxLength="5000"
                className="block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              className="inline-flex items-center justify-center w-full cursor-pointer rounded-md border px-6 py-3 text-center font-semibold text-white"
            >
              <span className="mr-2">Send</span>
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
