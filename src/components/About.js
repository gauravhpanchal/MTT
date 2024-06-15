import heroImg from "@/images/hero-right.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex md:flex-row mt-8 flex-col-reverse items-center gap-4 md:gap-16 md:px-32 py-2 ">
      <div className="flex-1 space-y-4 md:text-center px-4">
        <h4 className="text-base text-center text-textSecondary font-bold ">
          Know more about us
        </h4>
        <h1 className="text-[32px] leading-9 text-textPrimary text-center font-bold">
          Maharashtra Tour and Travel: The Ultimate Destination with Premier
          Taxi Service in Mumbai
        </h1>
        <h4 className="text-base text-textSecondary font-bold text-justify">
          Maharashtra Tour and Travel provides a comprehensive range of
          transportation services, including taxi, car, and bus rentals in
          Mumbai . Whether you need a vehicle for outstation travel, one-way
          pickup and drop, round trips, sightseeing tours, or city local
          rentals, we have you covered. Our affordable prices ensure that you
          can explore Maharashtra without breaking the bank. Additionally, we
          offer Maharashtra tour packages that include all the must-visit
          destinations in the state. Experience convenience, comfort, and
          affordability with Maharashtra Tour and Travel.
        </h4>
      </div>
      <div className="flex-1">
        <Image src={heroImg} className="w-[555px] h-auto" alt="hero" />
      </div>
    </div>
  );
};

export default About;
