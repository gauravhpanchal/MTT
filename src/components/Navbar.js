"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Tour Packages",
    href: "/tour-packages",
  },
  {
    name: "Fleets",
    href: "/fleets",
  },
  {
    name: "Services",
    href: "/services-mtt",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const PopupForm = () => {
    return (
      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bgPrimary p-8 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold text-textPrimary ">
            Enquire Now
          </h2>
          <button className="border border-borderColor p-1 rounded-md">
            <RiCloseFill onClick={togglePopup} className="w-6 h-6 text-black" />
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border border-borderColor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number:
            </label>
            <input
              className="shadow appearance-none border border-borderColor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border border-borderColor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="requirements"
            >
              Requirements:
            </label>
            <textarea
              className="shadow appearance-none border border-borderColor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="requirements"
              placeholder="Enter your requirements"
            ></textarea>
          </div>
          <button
            className="bg-buttonPrimary hover:border text-bgPrimary w-full text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {/* Navbar for Web */}
      <div className="md:block hidden">
        <div className="flex justify-between drop-shadow-sm py-5 items-center px-32  bg-[#ffffff] ">
          <div className="text-xl font-bold">
            <Link href="/">
              <h1>MTT</h1>
            </Link>
          </div>
          <div>
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-textPrimary hover:text-buttonPrimary rounded-md font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <button
              onClick={togglePopup}
              className="border text-buttonPrimary hover:bg-buttonPrimary hover:text-[#ffffff] flex gap-2 items-center border-buttonPrimary py-2 px-6 rounded-full "
            >
              Enquire now{" "}
              <span>
                <FaPaperPlane />
              </span>
            </button>
          </div>
        </div>
        {isPopupOpen && <PopupForm />}
      </div>
      {/* Navbar for Mobile */}
      <div className="md:hidden block">
        <div className="flex justify-between py-5 rounded-full  mx-4 items-center shadow-md px-6 bg-[#F5F5F5]">
          <div className="text-xl font-bold ">
            <Link href="/">
              <h1>MTT</h1>
            </Link>
          </div>
          {/* <div>
            <button className="border text-[#F66F4D] flex gap-2 items-center border-[#F66F4D] py-2 px-6 rounded-full ">
              Enquire now{" "}
              <span>
                <FaPaperPlane />
              </span>
            </button>
          </div> */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border-2 rounded-md p-1"
            >
              {isOpen ? (
                <RiCloseFill className="w-6 h-6 text-black" />
              ) : (
                <RiMenu3Fill className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center mt-2 mx-4 rounded-3xl shadow-md bg-[#F5F5F5]">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="block font-medium hover:text-[#F66F4D] bg-white w-full text-center py-4 px-4 text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
