import React from "react";
import ContactUsHero from "./ContactUsHero";
import ContactUsForm from "./ContactUsForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallNowButton from "@/components/CallNowButton";

const ContactUs = () => {
  return (
    <div className="flex flex-col mb-20">
      <ContactUsHero />
      <ContactUsForm />
      <WhatsAppButton textMessage="I'm interested in your car for sale" />
      <CallNowButton />
    </div>
  );
};

export default ContactUs;
