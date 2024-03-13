import Image from "next/image";
import heroTop from "@/images/hero-top.jpg";
import SearchForm from "./form/SearchForm";
import Tabs from "./form/Tabs";

const Hero = () => {
  const tabs = ["Outstation", "Local", "Airport"];
  return (
    <div className="flex flex-col justify-center bg-bgSecondary">
      <div className="flex md:flex-row items-center  flex-col-reverse md:mx-32 mx-2">
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
      <Tabs />
    </div>
  );
};

export default Hero;
