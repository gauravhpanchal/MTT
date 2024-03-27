import Image from "next/image";
import heroTop from "@/images/hero-top.jpg";
import Tabs from "./form/Tabs";
import Marquee from "react-fast-marquee";

const brands = [
  { id: 1, name: "Tata Group" },
  { id: 2, name: "Reliance Industries" },
  { id: 3, name: "Infosys" },
  { id: 4, name: "Mahindra Group" },
  { id: 5, name: "Wipro" },
  { id: 6, name: "Hindustan Unilever" },
  { id: 7, name: "ITC Limited" },
  { id: 8, name: "Bharti Airtel" },
  { id: 9, name: "Adani Group" },
  { id: 10, name: "Aditya Birla Group" },
  { id: 11, name: "Maruti Suzuki" },
  { id: 12, name: "HDFC Bank" },
  { id: 13, name: "Axis Bank" },
  { id: 14, name: "Bajaj Auto" },
  { id: 15, name: "ICICI Bank" },
  { id: 16, name: "State Bank of India" },
  { id: 17, name: "TCS" },
  { id: 18, name: "HCL Technologies" },
  { id: 19, name: "Larsen & Toubro" },
  { id: 21, name: "Bajaj Finance" },
  { id: 22, name: "MRF Tyres" },
  { id: 23, name: "Britannia Industries" },
  { id: 24, name: "Asian Paints" },
  { id: 25, name: "Titan Company" },
  { id: 26, name: "Patanjali Ayurved" },
  { id: 27, name: "Glenmark" },
  { id: 28, name: "Biocon" },
  { id: 29, name: "Apollo Hospitals" },
  { id: 30, name: "Cipla" },
  { id: 31, name: "Ranbaxy Laboratories" },
  { id: 32, name: "Piramal Enterprises" },
  { id: 33, name: "Tata Motors" },
  { id: 34, name: "Hero MotoCorp" },
  { id: 35, name: "TVS Motor Company" },
  { id: 36, name: "Airtel Payments Bank" },
  { id: 37, name: "Amul" },
  { id: 38, name: "Zomato" },
  { id: 39, name: "Swiggy" },
  { id: 40, name: "Flipkart" },
  { id: 41, name: "Myntra" },
  { id: 42, name: "Snapdeal" },
  { id: 43, name: "Paytm" },
  { id: 44, name: "Ola" },
  { id: 45, name: "Uber India" },
  { id: 46, name: "MakeMyTrip" },
  { id: 47, name: "Cleartrip" },
  { id: 48, name: "IndiGo Airlines" },
  { id: 49, name: "SpiceJet" },
  { id: 50, name: "Air India" },
];

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 justify-center bg-bgSecondary">
      <div className="mt-2 bg-bgSecondary">
        <Tabs />
      </div>
      <div className="flex md:flex-row items-center flex-col-reverse md:mx-32 mx-2">
        <div className=" flex-1 text-center">
          <h4 className="text-base  font-bold text-textSecondary">
            Best Outstation Cab Service in Mumbai
          </h4>
          <h1 className="md:text-5xl text-3xl text-center mt-4 font-bold text-textPrimary">
            Get the best Deals on Outstation Cab services with Maharashtra Tour
            and Travel
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
      <div className="text-center">
        <p className="text-3xl mb-2 font-semibold">
          Trusted by 100+ Companies Big & Small
        </p>
        <p className="text-xl mb-4 text-textSecondary">
          The world's leading companies trust Maharashtra Tours for all their
          travel requirements.
        </p>
        <Marquee pauseOnHover className="shadow-md py-5 ">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 mx-4 font-semibold border border-textSecondary rounded-xl w-60 text-textSecondary text-center h-full text-lg"
            >
              {brand.name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
