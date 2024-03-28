import About from "@/components/About";
import CallNowButton from "@/components/CallNowButton";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MdAddCall } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatsAppButton textMessage="I'm interested in your car for sale" />
      <CallNowButton />
    </main>
  );
}
