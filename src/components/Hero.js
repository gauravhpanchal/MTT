import Image from "next/image";
import React from "react";
import heroImg from "@/images/hero-right.jpg";
import heroTop from "@/images/hero-top.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="space-y-8  ">
      {/* Hero Part */}
      <div className="flex flex-col justify-center">
        <div className="flex md:flex-row items-center flex-col-reverse md:mx-32 mx-2">
          <div className=" flex-1 text-center">
            <h4 className="text-base mt-8 font-bold text-textSecondary">
              Best Outstation Cab Service in Mumbai
            </h4>
            <h1 className="md:text-5xl text-3xl text-center mt-4 font-bold text-textPrimary">
              Get the best Deals on Outstation Cab services with Maharashtra
              Tour and Travel
            </h1>
            <h4 className="text-lg text-textSecondary  mt-4 text-center font-semibold">
              Explore Maharashtra hassle-free with our exclusive outstation cab
              deals at Maharashtra Tour and Travel. Book now for the ultimate
              journey through Maharashtra's wonders!
            </h4>
          </div>
          <div className="flex-1 mx-auto">
            <Image
              src={heroTop}
              className="w-full h-auto object-contain"
              alt="hero"
            />
          </div>
        </div>
        <div className="mx-auto mt-8 space-x-4 font-semibold">
          <button className="px-4 py-2 border rounded-md bg-buttonPrimary text-buttonText hover:text-buttonPrimary hover:bg-buttonText ">
            Enquire now
          </button>
          <button className="px-4 py-2 border rounded-md border-buttonPrimary text-buttonPrimary hover:text-buttonText hover:bg-buttonPrimary">
            Contact us
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col-reverse md:flex-row items-center md:px-32 px-4 ">
        <div className="flex-1 space-y-4 md:ml-32 mt-4">
          <h1 className="md:text-5xl text-3xl text-center md:text-left md:w-4/5 font-bold text-secondary">
            Get the best Deals on Outstation Cabs with Maharashtra Tour and
            Travel
          </h1>
          <h4 className="text-lg text-primary text-center md:text-left font-bold">
            Explore maharashtra hassle-free with our reliable <br /> transport
            services.
          </h4>
        </div>
        <div className="flex-1">
          <Image src={heroTop} className="w-[555px] h-auto" alt="hero" />
        </div>
      </div> */}
      {/* Section 2 - About us */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-4 md:gap-16 md:px-32 px-4 py-8 ">
        <div className="flex-1 space-y-4 md:text-center">
          <h4 className="text-base text-center text-textSecondary font-bold ">
            Know more about us
          </h4>
          <h1 className="text-[32px] leading-9 text-textPrimary text-center font-bold">
            Maharashtra Tour and Travel: The Ultimate Destination with Premier
            Taxi Service in Mumbai
          </h1>
          <h4 className="text-base text-textSecondary font-bold text-justify">
            Maharashtra Tour and Travel provides a comprehensive range of
            transportation services, including taxi, car, and bus rentals in{" "}
            {""}
            <Link
              href="https://en.m.wikipedia.org/wiki/Mumbai"
              className="underline"
            >
              Mumbai
            </Link>
            . Whether you need a vehicle for outstation travel, one-way pickup
            and drop, round trips, sightseeing tours, or city local rentals, we
            have you covered. Our affordable prices ensure that you can explore
            Maharashtra without breaking the bank. Additionally, we offer
            Maharashtra tour packages that include all the must-visit
            destinations in the state. Experience convenience, comfort, and
            affordability with Maharashtra Tour and Travel.
          </h4>
        </div>
        <div className="flex-1">
          <Image src={heroImg} className="w-[555px] h-auto" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
