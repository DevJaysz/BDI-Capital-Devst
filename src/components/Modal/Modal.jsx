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
        formRef.current,
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
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-col xl:flex-row">
              <InputField id="first-name" name="user_name" label="Full Name" />
              <InputField
                id="business-name"
                name="business_name"
                label="Business Name"
              />
            </div>
            <div className="flex gap-2 flex-col lg:flex-row">
              <InputField
                type="email"
                id="email"
                name="user_email"
                label="Email Address"
              />
              <InputField
                type="tel"
                id="contact-number"
                name="user_number"
                label="Contact Number"
                onInput={handleInput}
                inputMode="numeric"
              />
            </div>
          </div>
          <SelectField
            id="service"
            name="service_name"
            label="Service Required"
          >
            <option value="">Select a service</option>
            {formTitles.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </SelectField>
          <TextAreaField id="project-brief" name="message" label="Message" />
          <SubmitButton status={formStatus} />
        </form>
      </div>
    </div>
  );
};

const InputField = ({ type = "text", id, name, label, ...props }) => (
  <div className="w-full">
    <label htmlFor={id} className="mb-1 font-medium text-sm">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={`Enter ${label}`}
      required
      className="h-10 w-full rounded-md border border-solid border-black px-2 py-2 pl-4 text-sm text-black"
      {...props}
    />
  </div>
);

const SelectField = ({ id, name, label, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="mb-1 font-medium text-sm">
      {label}
    </label>
    <select
      id={id}
      name={name}
      className="h-10 w-full max-h-40 overflow-y-auto rounded-md border border-solid border-black px-2 py-2 text-sm text-black"
    >
      {children}
    </select>
  </div>
);

const TextAreaField = ({ id, name, label }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="font-medium text-sm">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      placeholder={`Enter your ${label}`}
      maxLength="5000"
      required
      className="block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"
    ></textarea>
  </div>
);

const SubmitButton = ({ status }) => (
  <>
    <button
      type="submit"
      className="mt-4 inline-flex items-center justify-center w-full cursor-pointer rounded-md border px-6 py-3 text-center font-semibold text-white"
    >
      <span className="mr-2">Send</span>
      <IoMdSend />
    </button>
    <div
      className={`status-message transition-opacity duration-300 ${
        status === "success"
          ? "opacity-100 text-green-500"
          : status === "error"
          ? "opacity-100 text-red-500"
          : "opacity-0"
      }`}
    >
      {status === "success" && <p>Your message was sent successfully!</p>}
      {status === "error" && <p>Failed to send message. Please try again.</p>}
    </div>
  </>
);

export default ContactFormModal;
