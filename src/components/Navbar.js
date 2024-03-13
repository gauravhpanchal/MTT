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
                  className="text-[#2E476B] hover:text-[#F66F4D] rounded-md font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <button className="border text-[#F66F4D] hover:bg-[#F66F4D] hover:text-[#ffffff] flex gap-2 items-center border-[#F66F4D] py-2 px-6 rounded-full ">
              Enquire now{" "}
              <span>
                <FaPaperPlane />
              </span>
            </button>
          </div>
        </div>
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
