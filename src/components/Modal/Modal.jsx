import React, { useEffect } from "react";

const ContactFormModal = ({ isOpen, onClose, plan }) => {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="rounded-md border border-neutral-800 bg-neutral-900 shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-300">{plan.heading}</h2>
          <button onClick={onClose} className="text-gray-300">
            &times;
          </button>
        </div>
        <p className="text-sm text-gray-300 mb-4">
          You're interested in the <strong>{plan.title}</strong> Mentorship.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Contact Number
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-300">
                Business Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
