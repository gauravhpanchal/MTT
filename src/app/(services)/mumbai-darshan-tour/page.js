"use client";

import mumbai01 from "@/images/mumbai01.jpg";
import mumbai02 from "@/images/mumbai02.jpg";
import mumbai03 from "@/images/mumbai03.jpg";
import Image from "next/image";
import CustomInput from "@/components/tags/Input";
import { useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { BookCabsNowSchema } from "@/components/schemas/BookCabsNowSchema";
import { TiStarOutline } from "react-icons/ti";

const initialValues = {
  pickupLocation: "",
  dropLocation: "",
  name: "",
  phonenumber: "",
  dateTime: "",
  passengers: "",
};

const faq = [
  {
    question: "What is Mumbai Darshan Cab Service?",
    answer:
      "Mumbai Darshan Cab Service provides an immersive journey through Mumbai's famed landmarks and attractions. These specially tailored cabs offer guided tours, showcasing iconic spots such as the Gateway of India, Marine Drive, and Elephanta Caves, ensuring a memorable exploration experience.",
  },
  {
    question: "How can I book a Mumbai Darshan Cab?",
    answer:
      "Booking a Mumbai Darshan Cab is hassle-free. You have the option to reserve your cab through their user-friendly official website or by reaching out to our dedicated customer service team or by filling an enquiry form.",
  },
  {
    question: "What kind of cars are available for rental services in Mumbai?",
    answer:
      "Mumbai's car rental services boast a diverse fleet catering to various preferences. Whether you seek compact cars, sedans, SUVs, or luxury vehicles, there's an option to suit every need and style.",
  },
  {
    question: "Can I hire a cab for a Mumbai city tour on an hourly basis?",
    answer:
      "Absolutely, our cab services in Mumbai offer flexible hourly rental options for city tours. This allows you to tailor your exploration duration, ensuring you can uncover Mumbai's charms at your own pace.",
  },
  {
    question: "Are the Mumbai city tour cabs accompanied by guides?",
    answer:
      "Yes, at certain places knowledgeable guides are available who enrich your experience with insights into Mumbai's history, culture, and attractions. Please note that guide charges are not included in the package",
  },
  {
    question:
      "What are the popular destinations covered in a Mumbai city tour?",
    answer:
      "Embark on a Mumbai city tour to discover its iconic landmarks, including the Gateway of India, Taj Mahal Palace Hotel, Marine Drive, Chhatrapati Shivaji Maharaj Terminus (Victoria Terminus), Haji Ali Dargah, Juhu Beach, Siddhivinayak Temple, and more, ensuring an enriching exploration of the city's treasures.",
  },
];

const MumbaiDarshan = () => {
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
    validationSchema: BookCabsNowSchema,
    onSubmit: (values) => {},
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_5zjan3u",
          "template_f8ryz0a",
          form.current,
          "UNiDF4Tzgc6tvZkWq"
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
    <div className="flex md:pt-10 pt-5 md:flex-row flex-col justify-center gap-4 md:gap-10 md:px-32 px-4 py-2 ">
      {/* Left Container */}
      <div className="md:w-[70%] space-y-4">
        <p className="text-3xl font-semibold">
          Explore Mumbai with Our Mumbai Darshan Cab Service
        </p>
        {/* Seo Description */}
        <p className="text-textSecondary text-justify">
          Experience the vibrant city of Mumbai like never before with Mumbai
          darshan cab service. Our fleet of mumbai darshan cabs is ready to take
          you on a memorable journey through the bustling streets and iconic
          landmarks of this diverse metropolis. With easy mumbai darshan cab
          booking options, you can choose from a range of packages to suit your
          budget and preferences. Explore the city at your own pace with our
          flexible mumbai darshan tour package, designed to give you an
          authentic taste of Mumbai's culture and heritage. Sit back and relax
          in our comfortable mumbai darshan taxi as we navigate through the
          chaos and charm of this dynamic city. Whether you're a solo traveler
          or exploring with friends and family, our taxi for mumbai darshan
          ensures a hassle-free experience from start to finish. So why wait?
          Book your mumbai darshan car rental today and embark on an exciting
          adventure in the heart of India's financial capital!
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 md:h-[300px] gap-4 md:gap-8">
          <div className="flex flex-col flex-1">
            <Image
              src={mumbai01}
              alt="Local Cab Services"
              className="object-cover h-[300px] md:w-[300px] rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-1">
            <Image
              src={mumbai02}
              alt="Hire For An Hour Services"
              className="object-cover h-[300px] md:w-[300px] rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-1">
            <Image
              src={mumbai03}
              alt="Luxury Car Rental"
              className="object-cover h-[300px] md:w-[300px] rounded-lg"
            />
          </div>
        </div>
        <p className="text-3xl font-semibold">
          Popular Tourist Destinations in Mumbai{" "}
        </p>
        <p className="text-textSecondary text-justify">
          Mumbai is home to a Countless of tourist attractions that showcase its
          rich history and vibrant culture. From the iconic Gateway of India to
          the Busy markets of Colaba, there is no shortage of places to explore.
          Our Mumbai Cab Services can take you to these popular destinations and
          ensure that you make the most of your time in the city.
        </p>
        <p className="text-textSecondary text-justify">
          One must-visit spot is the Elephanta Caves, a UNESCO World Heritage
          Site. Located on Elephanta Island, these ancient rock-cut cave temples
          are dedicated to Lord Shiva and are a testament to India’s rich
          architectural heritage. Another popular destination is the iconic
          Marine Drive, also known as the Queen’s Necklace. This scenic
          promenade offers stunning views of the Arabian Sea and is the perfect
          place for an evening stroll.
        </p>
        <p className="text-textSecondary text-justify">
          For those interested in history, a visit to the Chhatrapati Shivaji
          Maharaj Vastu Sangrahalaya, formerly known as the Prince of Wales
          Museum, is a must. This museum houses an extensive collection of art,
          sculptures, and artifacts that showcase India’s rich history and
          culture. Other popular attractions include the Haji Ali Dargah,
          Siddhivinayak Temple, and the Active markets of Crawford Market and
          Colaba Causeway.
        </p>
        <p className="text-3xl font-semibold">
          Exploring Mumbai With Mumbai Darshan Cab
        </p>
        <p className="text-textSecondary text-justify ">
          Mumbai is home to a Countless of tourist attractions that showcase its
          rich history and vibrant culture. From the iconic Gateway of India to
          the Busy markets of Colaba, there is no shortage of places to explore.
          Our Mumbai Cab Services can take you to these popular destinations and
          ensure that you make the most of your time in the city.
        </p>
        <p className="text-textSecondary text-justify">
          The Mumbai Darshan Cab tour typically includes visits to popular
          landmarks such as the Gateway of India, Marine Drive, Juhu Beach, and
          the Bandra-Worli Sea Link. You will also get a chance to explore the
          vibrant markets of Colaba and Crawford Market, where you can indulge
          in some shopping and taste the local street food.
        </p>
        <p className="text-textSecondary text-justify">
          Whether you’re a first-time visitor or a seasoned traveler, our Mumbai
          Darshan Cab service offers a comprehensive and hassle-free way to
          explore the city and tick off all the must-visit spots from your list.
        </p>
        <p className="text-3xl font-semibold">FAQ for Mumbai Darshan Cab</p>
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
          {faq.map((item) => (
            <details key={item.question} className="group p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">{item.question}</h2>

                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Right Container */}
      <div className=" md:w-[30%]">
        {/* Book cab now */}
        <div className="flex text-center flex-col shadow-2xl rounded-lg p-6 ">
          <p className=" mb-4 font-semibold text-2xl">Book cabs now</p>
          <form onSubmit={sendEmail} ref={form} className="space-y-2 ">
            <CustomInput
              type="text"
              placeholder="Enter your pickup location"
              name="pickupLocation"
              className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
              value={values.pickupLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.pickupLocation}
              touched={touched.pickupLocation}
            />
            <CustomInput
              type="text"
              placeholder="Enter your drop location"
              name="dropLocation"
              className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
              value={values.dropLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.dropLocation}
              touched={touched.dropLocation}
            />

            <CustomInput
              type="text"
              placeholder="Enter your name"
              name="name"
              className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={touched.name}
            />
            <CustomInput
              type="tel"
              placeholder="Enter your phone number"
              name="phonenumber"
              className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
              value={values.phonenumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phonenumber}
              touched={touched.phonenumber}
            />

            <CustomInput
              type="datetime-local"
              placeholder="Select date and time"
              name="dateTime"
              className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
              value={values.dateTime}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.dateTime}
              touched={touched.dateTime}
            />

            <CustomInput
              type="number"
              placeholder="Enter number of passengers"
              name="passengers"
              className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
              value={values.passengers}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.passengers}
              touched={touched.passengers}
            />
            <div className="">
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-xl w-11/12 bg-buttonPrimary text-buttonText"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        {/* Our Cab Services */}
        <div className="w-full mt-10 h-fit text-center  shadow-2xl rounded-lg p-6 ">
          <p className=" mb-4 font-semibold text-2xl text-center">
            Our Services
          </p>
          <ul className="space-y-4 font-semibold ">
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Mumbai Darshan Cab
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> 3 Jyotirlinga in Maharashtra
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> 5 Jyotirlinga in Maharashtra
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Mumbai To Pune Cab
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Mumbai To Shirdi Cab
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Intercity Cab
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Airport Pickup and Drop
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Hourly Rental Cab
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Local Cab Service
            </li>
          </ul>
        </div>
        {/* Cars Available */}
        <div className="w-full mt-10 h-fit text-center  shadow-2xl rounded-lg p-6 ">
          <p className=" mb-4 font-semibold text-2xl text-center">
            Cars Available
          </p>
          <ul className="space-y-4 font-semibold ">
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Dzire
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Toyota Etios
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Toyota Innova
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Innova Crysta
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Ertiga
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline />
              Kia Carens
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Ciaz
            </li>
            <li className="flex items-center cursor-pointer gap-4 underline">
              <TiStarOutline /> Tempo Traveller
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MumbaiDarshan;
