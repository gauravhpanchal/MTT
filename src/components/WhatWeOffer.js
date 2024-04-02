import Image from "next/image";
import H1 from "./tags/H1";
import mumbaidarshan from "@/images/mumbaidarshan.jpg";
import carrental from "@/images/carrental.jpg";
import cab from "@/images/cab.jpg";
import outstationcab from "@/images/outstationcab.jpg";
import localcab from "@/images/localcab.jpg";
import hourtaxi from "@/images/hourtaxi.jpg";
import luxurycar from "@/images/luxurycar.jpg";
import airporttaxi from "@/images/airporttaxi.jpg";
import Link from "next/link";

const fleetsData = [
  {
    id: 1,
    img: mumbaidarshan,
    name: "Mumbai Darshan",
    textMessage:
      "I'm looking for a Mumbai Darshan package. Please share the details.",
  },
  {
    id: 2,
    img: carrental,
    name: "Car Rental With Driver",
    textMessage:
      "I'm looking for a car rental with driver. Please share the details.",
  },
  {
    id: 3,
    img: cab,
    name: "Interstate Cab Services",
    textMessage:
      "I'm looking for an interstate cab service. Please share the details.",
  },
  {
    id: 4,
    img: outstationcab,
    name: "Outstation Cab Services",
    textMessage:
      "I'm looking for an outstation cab service. Please share the details.",
  },
  {
    id: 5,
    img: localcab,
    name: "Local Cab Services",
    textMessage:
      "I'm looking for a local cab service. Please share the details.",
  },
  {
    id: 6,
    img: airporttaxi,
    name: "Airport Pickup Or Drop",
    textMessage:
      "I'm looking for an airport pickup or drop service. Please share the details.",
  },
  {
    id: 7,
    img: hourtaxi,
    name: "Hire For An Hour Services",
    textMessage:
      "I'm looking for a hire for an hour service. Please share the details.",
  },
  {
    id: 8,
    img: luxurycar,
    name: "Luxury Car Rental",
    textMessage:
      "I'm looking for a luxury car rental service. Please share the details.",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="flex mt-8 justify-center flex-col items-center gap-4 md:gap-16 md:px-32 py-2 ">
      <div className="">
        <p className="text-center font-semibold text-textSecondary">
          Our Trending Packages
        </p>
        <H1 content={"Enjoy The Best Rides Of Your Life"} />
      </div>

      {/* Cars Container */}
      {/* Web */}
      <div className="md:grid md:grid-cols-4 gap-6 hidden ">
        {fleetsData.map((fleet) => (
          <div
            key={fleet.id}
            className="shadow-md hover:shadow-xl pb-8 rounded-2xl"
          >
            <div className="h-[210px] w-[300px]">
              <Image
                src={fleet.img}
                className="w-[300px] object-cover overflow-hidden h-[200px] rounded-2xl"
                alt="hero"
              />
            </div>
            <div className="px-4 space-y-3 ">
              <p className="text-lg font-semibold text-center ">{fleet.name}</p>
              <div className="items-center text-center w-full ">
                <Link
                  href={`https://wa.me/919076182397?text=${fleet.textMessage}`}
                  className="border text-center hover:bg-buttonPrimary hover:text-buttonText border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-xl w-80 font-semibold"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="carousel md:hidden w-screen carousel-center max-w-md space-x-10 pl-16 py-4 bg-bgSecondary rounded-box">
        {fleetsData.map((fleet) => (
          <div
            key={fleet.id}
            className="carousel-item gap-4 flex flex-col shadow-md hover:shadow-xl pb-8 rounded-2xl"
          >
            <div className="h-[210px] w-[300px]">
              <Image
                src={fleet.img}
                className="w-[300px] overflow-hidden object-cover h-[200px] rounded-2xl"
                alt="hero"
              />
            </div>
            <div className="px-4 space-y-6 text-center ">
              <p className="text-lg font-semibold  ">{fleet.name}</p>
              <div className="text-center items-center">
                <Link
                  href={`https://wa.me/919076182397?text=${fleet.textMessage}`}
                  className="border hover:bg-buttonPrimary hover:text-buttonText border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-xl w-1/2 text-center font-semibold"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
