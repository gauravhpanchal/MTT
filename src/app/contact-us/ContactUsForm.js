"use client";

import { useFormik } from "formik";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactUsSchema } from "@/components/schemas/ContactUsSchema";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  message: "",
};

const ContactUsForm = () => {
  const form = useRef(null);
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactUsSchema,
    onSubmit: (values) => {},
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_lycm0xl",
          "template_l1jvd7o",
          form.current,
          "4itbfBdegtJAhQS1i"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      resetForm();
    }
  };
  return (
    <>
      <div className="mt-12 lg:px-36 px-4 mx-auto text-center">
        <p className="text-[#632DF8] font-semibold">Contact us</p>
        <p className="font-semibold text-5xl mt-6">Get in touch</p>
        <p className="mt-6">
          We'd love to hear from you. Please fill out this form.
        </p>
      </div>

      <form
        onSubmit={sendEmail}
        ref={form}
        className="mt-12 mb-20 lg:px-36 px-4 mx-auto"
      >
        <div className="flex lg:flex-row flex-col gap-6">
          {/* Firstname */}
          <div className="flex flex-col">
            <label htmlFor="">First name</label>
            <input
              type="text"
              placeholder="First name"
              name="firstname"
              className="rounded-lg px-5 py-3 w-96 lg:w-full border-[#374151]"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstname && touched.firstname ? (
              <p className="text-[#ef4444] text-sm">{errors.firstname}</p>
            ) : null}
          </div>
          {/* Lastname */}
          <div className="flex flex-col">
            <label htmlFor="">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              className="rounded-lg px-5 w-96 lg:w-full py-3 border-[#374151]"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname && touched.lastname ? (
              <p className="text-[#ef4444] w-44 lg:w-full text-sm">
                {errors.lastname}
              </p>
            ) : null}
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col mt-6">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="rounded-lg px-5 py-3 w-96 lg:w-full border-[#374151]"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="text-[#ef4444] text-sm">{errors.email}</p>
          ) : null}
        </div>
        {/* Phonenumber */}
        <div className="flex flex-col mt-6">
          <label htmlFor="">Phone number</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone number"
            name="phonenumber"
            className="rounded-lg px-5 py-3 w-96 lg:w-full border-[#374151]"
            value={values.phonenumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phonenumber && touched.phonenumber ? (
            <p className="text-[#ef4444] text-sm">{errors.phonenumber}</p>
          ) : null}
        </div>
        {/* Message */}
        <div className="flex flex-col mt-6">
          <label htmlFor="">Message</label>
          <textarea
            placeholder="Leave us a message..."
            name="message"
            rows={4}
            cols={50}
            className="rounded-lg px-5 py-3 w-96 lg:w-full border-[#374151]"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message ? (
            <p className="text-[#ef4444] text-sm">{errors.message}</p>
          ) : null}
        </div>
        {/* Send Message */}
        <div className="">
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-xl w-full mt-4 bg-buttonPrimary text-buttonText"
          >
            Send message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
