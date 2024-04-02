import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const data = [
  {
    icons: HiOutlineMail,
    title: "Email",
    description: "Our friendly team is here to help.",
    additional: "info.maharashtratour@gmail.com",
  },
  {
    icons: HiOutlineLocationMarker,
    title: "Office",
    description: "Come say hello at our office.",
    additional: "Vikhroli, Mumbai",
  },
  {
    icons: FiPhone,
    title: "Phone",
    description: "Mon-Fri 8am-5pm",
    additional: "+91 9076182397",
  },
];

const ContactUsHero = () => {
  return (
    <>
      <div className="lg:px-36 py-20 px-4 text-center bg-white">
        <p className="text-[#632DF8] font-semibold">Contact us</p>
        <p className="font-semibold text-5xl mt-6">
          We'd love to hear from you
        </p>
        <p className="mt-6 text-xl ">
          We're a 100% remote team spread all across the world. Join us!
        </p>
      </div>
      <div className="lg:px-36 lg:py-20 py-10 px-4 grid lg:grid-cols-3 grid-cols-1 gap-8 text-center bg-[#fbf9fe]">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center shadow-sm hover:shadow-md rounded-xl py-4"
          >
            <div className="mb-4 h-12 w-12 rounded-full border-4 border-blue-100 flex justify-center items-center p-2 bg-blue-200 ">
              <item.icons className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="mt-4 font-semibold mx-auto text-gray-700">
                {item.description}
              </p>
              <p className="text-[#926cfa] font-semibold mt-4">
                {item.additional}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactUsHero;
