"use client";
import { useState } from "react";
import SearchForm from "./SearchForm";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("One Way");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="rounded-2xl bg-[#fff] px-2 shadow-lg md:w-fit w-[360px] mx-auto">
      <div className="flex flex-col md:flex-row items-center font-semibold text-textSecondary justify-center md:justify-start md:gap-1">
        <div className="flex flex-col w-full py-4 px-4 md:px-0 md:pl-4 ">
          <label className="text-textSecondary md:text-sm text-xs">
            TRIP TYPE
          </label>
          <select
            className="h-10 border px-2 rounded-lg border-borderColor font-semibold"
            value={activeTab}
            onChange={(e) => handleTabClick(e.target.value)}
          >
            <option value="One Way">One Way</option>
            <option value="Round Trip">Round Trip</option>
            <option value="Local">Local</option>
            <option value="Airport">Airport</option>
          </select>
        </div>
        <SearchForm tab={activeTab} />
      </div>
    </div>
  );
};

export default Tabs;
