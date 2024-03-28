import { MdAddCall } from "react-icons/md";

const CallNowButton = () => {
  return (
    <div className="fixed bottom-4 left-4">
      {/* Call Button */}
      <a
        href="tel:+919076182397"
        className="bg-green-500 text-buttonText z-50 bg-[#25d366] flex items-center gap-2 hover:bg-green-600 text-white px-4 py-2  rounded-xl shadow"
      >
        <MdAddCall className="h-8 w-8" />
        <span className="font-semibold">Call Now</span>
      </a>
    </div>
  );
};

export default CallNowButton;
