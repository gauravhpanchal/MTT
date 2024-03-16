"use client";
import React, { useState } from "react";

const SearchForm = ({ tab }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  // Render different forms based on the active tab
  const renderForm = () => {
    switch (tab) {
      case "One Way":
        return (
          <form className="grid md:flex items-center grid-cols-1 md:gap-2 gap-5">
            <div className="flex flex-col">
              <label className="text-textSecondary">FROM</label>
              <input
                type="text"
                list="fromList"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
              <datalist id="fromList">
                <option value="Objective C">Objective C</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                <option value="Cobol">Cobol</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Pascal">Pascal</option>
                <option value="Perl">Perl</option>
                <option value="R">R</option>
                <option value="Swift">Swift</option>
              </datalist>
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">TO</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP DATE</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 w-[312px] px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP TIME</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 md:w-60 w-[312px] rounded-lg border-borderColor"
              />
            </div>
            <div className="w-full bg-buttonPrimary hover:border font-semibold hover:border-buttonPrimary text-bgPrimary hover:text-buttonPrimary hover:bg-bgPrimary text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      case "Round Trip":
        return (
          <form className="grid md:flex items-center grid-cols-1 md:gap-8 gap-5">
            <div className="flex flex-col">
              <label className="text-textSecondary">FROM</label>
              <input
                type="text"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">TO</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP DATE</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 w-[312px] px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP TIME</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 md:w-60 w-[312px] rounded-lg border-borderColor"
              />
            </div>
            <div className="w-full border bg-buttonPrimary hover:border font-semibold hover:border-buttonPrimary text-bgPrimary hover:text-buttonPrimary hover:bg-bgPrimary text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      case "Local":
        return (
          <form className="grid md:flex items-center grid-cols-1 md:gap-8 gap-5">
            <div className="flex flex-col">
              <label className="text-textSecondary">FROM</label>
              <input
                type="text"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">TO</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP DATE</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 w-[312px] px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP TIME</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 md:w-60 w-[312px] rounded-lg border-borderColor"
              />
            </div>
            <div className="w-full border bg-buttonPrimary hover:border font-semibold hover:border-buttonPrimary text-bgPrimary hover:text-buttonPrimary hover:bg-bgPrimary text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      case "Airport":
        return (
          <form className="grid md:flex items-center grid-cols-1 md:gap-8 gap-5">
            <div className="flex flex-col">
              <label className="text-textSecondary">FROM</label>
              <input
                type="text"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">TO</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP DATE</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 w-[312px] px-2 rounded-lg border-borderColor"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-textSecondary">PICK-UP TIME</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 md:w-60 w-[312px] rounded-lg border-borderColor"
              />
            </div>
            <div className="w-full border bg-buttonPrimary hover:border font-semibold hover:border-buttonPrimary text-bgPrimary hover:text-buttonPrimary hover:bg-bgPrimary text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      default:
        return null;
    }
  };

  return <div className="h-fit md:pl-2 md:pb-0 pb-4">{renderForm()}</div>;
};

export default SearchForm;
