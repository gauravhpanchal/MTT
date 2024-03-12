// components/QuickEnquiryButton.js
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function QuickEnquiryButton({ isOpen, openModal, closeModal }) {
  return (
    <>
      <button
        onClick={openModal}
        className="fixed flex items-center gap-2 border text-[#F66F4D] border-[#F66F4D] bg-backGround bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        Quick Enquiry{" "}
        <span>
          <FaPaperPlane />
        </span>
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#808080] opacity-70"></div>
          <div className="bg-[#ffffff] border-[#808080] shadow-2xl w-96 rounded-lg z-50 overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg text-center font-bold">
                  Fill in your requirements below
                </p>
                <button className="border rounded-md" onClick={closeModal}>
                  <IoClose className="h-5 w-5" />
                </button>
              </div>
              <form action="">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 my-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 my-2 rounded"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="w-full border p-2 my-2 rounded"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="w-full bg-[#F66F4D] text-[#fff]} p-2 rounded cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuickEnquiryButton;
