import React from "react";
import { IoMdClose } from "react-icons/io";

function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/50 px-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg lg:max-w-3xl w-full">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-black hover:text-gray-600 focus:outline-none"
            aria-label="Close Modal"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="p-0">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
