import React from "react";

function Modal({ onClose, plan }) {
  if (!plan) return null; // If no plan is selected, don't show anything

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">{plan.heading}</h2>
        <p className="mb-4">{plan.description}</p>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
