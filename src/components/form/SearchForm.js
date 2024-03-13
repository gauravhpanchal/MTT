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
          <form className="grid md:flex items-center grid-cols-1 md:gap-8 gap-5">
            <div className="flex flex-col">
              <label>From</label>
              <input
                type="text"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>To</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Date</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Time</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="w-full border text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      case "Round Trip":
        return (
          <form className="grid md:flex items-center grid-cols-1 md:gap-8 gap-5">
            <div className="flex flex-col">
              <label>From</label>
              <input
                type="text"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>To</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Date</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Time</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="w-full border text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      case "Local":
        return (
          <form className="grid md:flex items-center grid-cols-1 md:gap-8 gap-5">
            <div className="flex flex-col">
              <label>From</label>
              <input
                type="text"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>To</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Date</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Time</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="w-full border text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      case "Airport":
        return (
          <form className="grid md:flex items-center grid-cols-1 md:gap-8 gap-5">
            <div className="flex flex-col">
              <label>From</label>
              <input
                type="text"
                // value={fromDate}
                onChange={handleFromDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>To</label>
              <input
                type="text"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Date</label>
              <input
                type="date"
                value={toDate}
                onChange={handleToDateChange}
                className="h-10 border md:w-60 px-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Pick Up Time</label>
              <input
                type="time"
                // value={toDate}
                onChange={handleToDateChange}
                className="h-10 border px-2 rounded-lg"
              />
            </div>
            <div className="w-full border text-center p-2 mt-2 md:mt-5 rounded-lg">
              <button type="submit">Search</button>
            </div>
            {/* Additional fields specific to Outstation */}
          </form>
        );
      default:
        return null;
    }
  };

  return <div className="h-fit p-4">{renderForm()}</div>;
};

export default SearchForm;
