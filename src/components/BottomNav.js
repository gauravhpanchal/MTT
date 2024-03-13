import { BiMessageDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="grid grid-cols-3 border-t-[1px] border-[#1F2937] text-[#374151] font-medium text-center w-screen m-0 p-0 h-16 bg-bgSecondary">
      <div className="flex flex-col justify-center items-center">
        <BiMessageDetail className="h-6 w-6" />
        <a href="tel:+91 8286112257">Send Query</a>
      </div>
      <div className="flex flex-col justify-center items-center">
        <IoMdCall className="h-6 w-6" />
        <a href="tel:+919076182397">Call us</a>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaWhatsapp className="h-6 w-6" />
        <a href="https://wa.me/919076182397?">Whatsapp</a>
      </div>
    </div>
  );
};

export default BottomNav;
