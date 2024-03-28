import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ textMessage }) => {
  return (
    <div className="fixed bottom-4 right-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/919076182397?text=${textMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-buttonText z-50 bg-[#25d366] flex items-center gap-2 hover:bg-green-600 text-white px-4 py-2  rounded-xl shadow"
      >
        <FaWhatsapp className="h-8 w-8" />
        <span className="font-semibold">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
