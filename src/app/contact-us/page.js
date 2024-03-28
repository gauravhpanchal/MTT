import React from "react";
import ContactUsHero from "./ContactUsHero";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col mb-20">
      <ContactUsHero />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
