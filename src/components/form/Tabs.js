"use client";
import { useState } from "react";
import SearchForm from "./SearchForm";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("One Way");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="rounded-t-2xl rounded-b-3xl bg-[#fff] px-2 md:px-8 py-4 space-y-6 shadow-lg md:w-fit w-[360px] mx-auto">
      <div className="flex justify-center md:justify-start md:gap-10 gap-6">
        <button
          className={`${
            activeTab === "One Way" &&
            "underline underline-offset-[15px] decoration-buttonPrimary text-buttonPrimary font-semibold"
          }`}
          onClick={() => handleTabClick("One Way")}
        >
          One Way
        </button>
        <button
          className={`${
            activeTab === "Round Trip" &&
            "underline underline-offset-[15px] decoration-buttonPrimary text-buttonPrimary font-semibold"
          }`}
          onClick={() => handleTabClick("Round Trip")}
        >
          Round Trip
        </button>
        <button
          className={`${
            activeTab === "Local" &&
            "underline underline-offset-[15px] decoration-buttonPrimary text-buttonPrimary font-semibold"
          }`}
          onClick={() => handleTabClick("Local")}
        >
          Local
        </button>
        <button
          className={`${
            activeTab === "Airport" &&
            "underline underline-offset-[15px] decoration-buttonPrimary text-buttonPrimary font-semibold"
          }`}
          onClick={() => handleTabClick("Airport")}
        >
          Airport
        </button>
      </div>
      <SearchForm tab={activeTab} />
    </div>
  );
};

export default Tabs;
