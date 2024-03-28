import About from "@/components/About";
import BookYourRide from "@/components/BookYourRide";
import CallNowButton from "@/components/CallNowButton";
import Hero from "@/components/Hero";
import OurFleets from "@/components/OurFleets";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MdAddCall } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BookYourRide />
      <OurFleets />
      <WhatsAppButton textMessage="I'm interested in your car for sale" />
      <CallNowButton />
    </main>
  );
}
