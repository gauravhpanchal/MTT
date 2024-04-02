import About from "@/components/About";
import BookYourRide from "@/components/BookYourRide";
import CallNowButton from "@/components/CallNowButton";
import Hero from "@/components/Hero";
import OurFleets from "@/components/OurFleets";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatWeOffer />
      <OurFleets />
      <BookYourRide />
      <WhatsAppButton textMessage="I'm interested in your car for sale" />
      <CallNowButton />
    </main>
  );
}
