import React, { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import emailjs from "@emailjs/browser";

const formTitles = [
  "Business Mentorship",
  "Business Consulting",
  "Business Advisory",
  "Business Governance",
  "Digital Strategy",
  "Operations Consulting",
  "Transaction Advisory",
];

const ContactFormModal = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();

    const sendFormEmail = (templateId) =>
      emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        templateId,
        formRef.current, // Correct reference here
        import.meta.env.VITE_APP_PUBLIC_KEY
      );

    Promise.all([
      sendFormEmail(import.meta.env.VITE_APP_TEMPLATE_ID),
      sendFormEmail("template_284em2q"),
    ])
      .then(() => setFormStatus("success"))
      .catch(() => setFormStatus("error"));
  };

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="rounded-md border border-neutral-800 bg-neutral-900 shadow-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-300">{formTitles[0]}</h2>
          <button onClick={onClose} className="text-gray-300">
            &times;
          </button>
        </div>

        <form
          ref={formRef} // Corrected ref here
          onSubmit={sendEmail}
          className="max-w-md text-left w-full text-gray-300 flex flex-col gap-4"
          method="post"
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-col xl:flex-row">
              <div className="w-full">
                <label
                  htmlFor="first-name"
                  className="mb-1 font-medium text-sm"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="user_name"
                  placeholder="Enter Full Name"
                  autoComplete="name"
                  required
                  className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="business-name"
                  className="mb-1 font-medium text-sm"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="business-name"
                  name="business_name"
                  placeholder="Enter Business Name"
                  autoComplete="organization"
                  required
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
                  name="user_email"
                  autoComplete="email"
                  required
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
                  name="user_number"
                  autoComplete="tel"
                  required
                  inputMode="numeric"
                  onInput={handleInput}
                  className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="mb-1 font-medium text-sm">
              Service Required:
            </label>
            <select
              id="service"
              name="service_name"
              className="h-10 w-full max-h-40 overflow-y-auto rounded-md border border-solid border-black px-2 py-2 text-sm text-black"
            >
              <option value="">Select a service</option>
              {formTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col xl:flex-row gap-2">
            <div className="w-full">
              <label
                htmlFor="schedule-date"
                className="mb-1 font-medium text-sm"
              >
                Preferred Schedule Date:
              </label>
              <input
                type="date"
                id="schedule-date"
                name="schedule_date"
                required
                className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="schedule-time"
                className="mb-1 font-medium text-sm"
              >
                Preferred Schedule Time:
              </label>
              <input
                type="time"
                id="schedule-time"
                name="schedule_time"
                required
                className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="project-brief" className="font-medium text-sm">
              Message:
            </label>
            <textarea
              id="project-brief"
              name="message"
              placeholder="Enter your Message"
              autoComplete="off"
              maxLength="5000"
              required
              className="block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            value="Send"
            className="mt-4 inline-flex items-center justify-center w-full cursor-pointer rounded-md border px-6 py-3 text-center font-semibold text-white"
          >
            <span className="mr-2">Send</span>
            <IoMdSend />
          </button>
        </form>

        <div
          className={`status-message transition-opacity duration-300 ${
            formStatus === "success"
              ? "opacity-100 text-green-500"
              : formStatus === "error"
              ? "opacity-100 text-red-500"
              : "opacity-0"
          }`}
        >
          {formStatus === "success" && (
            <p>Your message was sent successfully!</p>
          )}
          {formStatus === "error" && (
            <p>Failed to send message. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
