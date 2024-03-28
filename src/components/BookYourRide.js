import Image from "next/image";
import carens from "@/images/carens.png";

const BookYourRide = () => {
  return (
    <div className="flex md:flex-row mt-8 flex-col items-center gap-4 md:gap-16 md:px-32 py-2 ">
      <div className="flex-1">
        <Image
          src={carens}
          className="w-[555px] h-auto rounded-lg"
          alt="hero"
        />
      </div>
      <div className="flex-1 space-y-4 md:text-center px-4">
        <h1 className="text-[32px] leading-9 text-textPrimary text-center font-bold">
          Book Your Ride Today
        </h1>
        <h4 className="text-base text-textSecondary font-bold text-justify">
          Ready to experience the convenience and reliability of Maharashtra
          Tour? Booking your ride is easy! Simply visit our website, use our
          user-friendly app, or give us a call. Your journey with Maharashtra
          Tour begins with a click or a call.
        </h4>
        <h4 className="text-base text-textSecondary font-bold text-justify">
          Join the countless satisfied customers who have made us their
          preferred choice for taxi services in Mumbai. Maharashtra Tour - Where
          Comfort Meets Convenience!
        </h4>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-8 ">
          <div className="space-y-2 text-center">
            <p className="text-3xl leading-9 text-buttonPrimary text-center font-bold">
              500+
            </p>
            <p className="text-xl text-textSecondary font-bold">
              Successful Tours
            </p>
          </div>
          <div className="space-y-2 text-center">
            <p className="text-3xl leading-9 text-buttonPrimary text-center font-bold">
              24,000+
            </p>
            <p className="text-xl text-textSecondary font-bold">
              Happy Tourist
            </p>
          </div>
          <div className="space-y-2 text-center">
            <p className="text-3xl leading-9 text-buttonPrimary text-center font-bold">
              250+
            </p>
            <p className="text-xl text-textSecondary font-bold">
              Place Explored
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourRide;
