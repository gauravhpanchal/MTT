import Image from "next/image";
import heroTop from "@/images/hero-top.jpg";
import Tabs from "./form/Tabs";
import Marquee from "react-fast-marquee";
import Brands from "./Brands";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 justify-center bg-bgSecondary">
      {/* <div className="mt-2 bg-bgSecondary">
        <Tabs />
      </div> */}
      <div className="flex md:flex-row items-center flex-col-reverse md:mx-32 mx-2">
        <div className=" flex-1 text-center">
          <h4 className="text-base  font-bold text-textSecondary">
            Best Outstation Cab Service in Mumbai
          </h4>
          <h1 className="md:text-5xl text-3xl text-center mt-4 font-bold text-textPrimary">
            Get the best Deals on Outstation Cab services with Maharashtra Tour
          </h1>
          <h4 className="text-lg text-textSecondary  mt-4 text-center font-semibold">
            Explore Maharashtra hassle-free with our exclusive outstation cab
            deals at Maharashtra Tour. Book now for the ultimate journey through
            Maharashtra's wonders!
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
    </div>
  );
};

export default Hero;
