import Image from "next/image";
import React from "react";
import fleetImg from "@/images/background.jpg";

const Fleets = () => {
  return (
    <div>
      <div class="relative w-full h-32">
        <p class="absolute top-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-5xl font-semibold z-10 text-white">
          Our Fleets
        </p>
        <Image
          src={fleetImg}
          alt="fleet"
          class="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
    </div>
  );
};

export default Fleets;
