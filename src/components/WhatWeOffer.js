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
    href: "/mumbai-darshan-tour",
  },
  {
    id: 2,
    img: carrental,
    name: "3 Jyotirlinga In Maharashtra Tour",
    textMessage:
      "I'm looking for a car rental with driver. Please share the details.",
    href: "/3-jyotirlinga-in-maharashtra",
  },
  {
    id: 3,
    img: cab,
    name: "5 Jyotirlinga In Maharashtra Tour",
    textMessage:
      "I'm looking for an interstate cab service. Please share the details.",
    href: "/5-jyotirlinga-in-maharashtra",
  },
  {
    id: 4,
    img: outstationcab,
    name: "Outstation Cab Services",
    textMessage:
      "I'm looking for an outstation cab service. Please share the details.",
    href: "/outstation-cab-services",
  },
  {
    id: 5,
    img: localcab,
    name: "Local Cab Services",
    textMessage:
      "I'm looking for a local cab service. Please share the details.",
    href: "/local-cab-services",
  },
  {
    id: 6,
    img: airporttaxi,
    name: "Airport Pickup Or Drop",
    textMessage:
      "I'm looking for an airport pickup or drop service. Please share the details.",
    href: "/airport-pickup-or-drop",
  },
  {
    id: 7,
    img: hourtaxi,
    name: "Hire For An Hour Services",
    textMessage:
      "I'm looking for a hire for an hour service. Please share the details.",
    href: "/hire-for-an-hour-services",
  },
  {
    id: 8,
    img: luxurycar,
    name: "Luxury Car Rental",
    textMessage:
      "I'm looking for a luxury car rental service. Please share the details.",
    href: "/luxury-car-rental",
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
      <div className="md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 hidden ">
        {fleetsData.map((fleet) => (
          <div
            key={fleet.id}
            className="shadow-md hover:shadow-xl p-2 flex flex-col rounded-3xl"
          >
            <Image
              src={fleet.img}
              className="w-full object-cover overflow-hidden h-[200px] rounded-2xl"
              alt="hero"
            />
            <div className="px-4 mb-3 space-y-3 ">
              <p className="text-lg font-semibold mt-2 line-clamp-1 ">
                {fleet.name}
              </p>
              <div className="items-center flex justify-between gap-4 text-center w-full ">
                <Link
                  href={`https://wa.me/919076182397?text=${fleet.textMessage}`}
                  className="border text-center bg-buttonPrimary text-buttonText  px-4 py-2 rounded-xl w-80 font-semibold"
                >
                  Book Now
                </Link>
                <Link
                  href={`${fleet.href}`}
                  className="border text-center  border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-xl w-80 font-semibold"
                >
                  View More
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
            className="carousel-item gap-4 flex flex-col shadow-md hover:shadow-xl pb-4 rounded-2xl"
          >
            <div className="h-[200px] w-[300px]">
              <Image
                src={fleet.img}
                className="w-[300px] overflow-hidden object-cover h-[200px] rounded-2xl"
                alt="hero"
              />
            </div>
            <div className="px-4 space-y-3 text-center ">
              <p className="text-lg font-semibold  ">{fleet.name}</p>
              <div className="flex text-center justify-evenly items-center gap-4">
                <Link
                  href={`https://wa.me/919076182397?text=${fleet.textMessage}`}
                  className="border bg-buttonPrimary text-buttonText px-4 py-2 rounded-xl text-center font-semibold"
                >
                  Book Now
                </Link>
                <Link
                  href={`${fleet.href}`}
                  className="border text-center  border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-xl font-semibold"
                >
                  View More
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
