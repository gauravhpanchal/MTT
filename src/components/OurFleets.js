import Image from "next/image";
import H1 from "./tags/H1";
import etios from "@/images/etios.png";
import dzire from "@/images/dzire.png";
import carens from "@/images/carens.png";
import innova from "@/images/innova.png";
import ertiga from "@/images/ertiga.png";
import tempoTraveller from "@/images/tempoTraveller.png";

const fleetsData = [
  {
    id: 1,
    img: etios,
    name: "Toyota Etios",
    seats: "4+1",
    rate: "12-13",
  },
  {
    id: 2,
    img: dzire,
    name: "Swift Dzire",
    seats: "4+1",
    rate: "12-13",
  },
  {
    id: 3,
    img: innova,
    name: "Toyota Innova",
    seats: "6+1",
    rate: "21-22",
  },
  {
    id: 4,
    img: innova,
    name: "Innova Crysta",
    seats: "6+1",
    rate: "21-22",
  },
  {
    id: 5,
    img: ertiga,
    name: "Ertiga",
    seats: "6+1",
    rate: "15-16",
  },
  {
    id: 6,
    img: carens,
    name: "Kia Carens",
    seats: "6+1",
    rate: "18",
  },
  {
    id: 7,
    img: tempoTraveller,
    name: "Mini Bus",
    seats: "20",
    rate: "35+",
  },
  {
    id: 8,
    img: tempoTraveller,
    name: "Tempo Traveller",
    seats: "13/17",
    rate: "25+",
  },
];

const OurFleets = () => {
  return (
    <div className="flex mt-8 justify-center flex-col items-center gap-4 md:gap-16 md:px-32 py-2 ">
      <H1 content={"Our Fleets"} />
      {/* Cars Container */}
      {/* Web */}
      <div className="md:grid md:grid-cols-4 gap-4 hidden ">
        {fleetsData.map((fleet) => (
          <div
            key={fleet.id}
            className="shadow-md hover:shadow-xl pb-3 rounded-2xl"
          >
            <div className="h-[210px] w-[300px]">
              <Image
                src={fleet.img}
                className="w-[300px] overflow-hidden object-contain h-auto rounded-2xl"
                alt="hero"
              />
            </div>
            <div className="px-4 space-y-3 ">
              <p className="text-lg font-semibold">
                {fleet.name} ({fleet.seats} Seater)
              </p>
              <div className="flex items-center justify-between">
                <button className="border hover:bg-buttonPrimary hover:text-buttonText border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-xl w-40 font-semibold">
                  Book Now
                </button>
                <p className="text-lg font-semibold">₹{fleet.rate}/km</p>
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
            className="carousel-item flex flex-col shadow-md hover:shadow-xl pb-3 rounded-2xl"
          >
            <div className="h-[210px] w-[300px]">
              <Image
                src={fleet.img}
                className="w-[300px] overflow-hidden object-contain h-auto rounded-2xl"
                alt="hero"
              />
            </div>
            <div className="px-4 space-y-3 ">
              <p className="text-lg font-semibold">
                {fleet.name} ({fleet.seats} Seater)
              </p>
              <div className="flex items-center justify-between">
                <button className="border hover:bg-buttonPrimary hover:text-buttonText border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-xl w-40 font-semibold">
                  Book Now
                </button>
                <p className="text-lg font-semibold">₹{fleet.rate}/km</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFleets;
