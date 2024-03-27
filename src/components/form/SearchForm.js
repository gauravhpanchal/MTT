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
          <form className="grid md:flex items-center grid-cols-1 md:gap-3 gap-5">
            <div className="flex gap-3 w-[310px] justify-between md:w-full ">
              {/* FROM */}
              <div className="flex w-[48%] flex-col">
                <label className="text-textSecondary md:text-sm text-xs">
                  FROM
                </label>
                <input
                  type="text"
                  list="fromList"
                  // value={fromDate}
                  placeholder="Ex: Mumbai"
                  onChange={handleFromDateChange}
                  className="h-10 border w-[150px] px-2 text-sm rounded-lg border-borderColor"
                />
                <datalist id="fromList">
                  <option value="Andheri">Andheri</option>
                  <option value="Bandra">Bandra</option>
                  <option value="Borivali">Borivali</option>
                  <option value="Chembur">Chembur</option>
                  <option value="Dadar">Dadar</option>
                  <option value="Dharavi">Dharavi</option>
                  <option value="Goregaon">Goregaon</option>
                  <option value="Juhu">Juhu</option>
                  <option value="Kandivali">Kandivali</option>
                  <option value="Malad">Malad</option>
                  <option value="Mulund">Mulund</option>
                  <option value="Santacruz">Santacruz</option>
                  <option value="Thane">Thane</option>
                  <option value="Vashi">Vashi</option>
                </datalist>
              </div>
              {/* TO */}
              <div className="flex w-[48%] flex-col">
                <label className="text-textSecondary md:text-sm text-xs">
                  TO
                </label>
                <input
                  type="text"
                  list="toList"
                  placeholder="Ex: Pune"
                  // value={toDate}
                  onChange={handleToDateChange}
                  className="h-10 border w-[150px] px-2 text-sm rounded-lg border-borderColor"
                />
                <datalist id="toList">
                  <option value="Andheri">Andheri</option>
                  <option value="Bandra">Bandra</option>
                  <option value="Borivali">Borivali</option>
                  <option value="Chembur">Chembur</option>
                  <option value="Dadar">Dadar</option>
                  <option value="Dharavi">Dharavi</option>
                  <option value="Goregaon">Goregaon</option>
                  <option value="Juhu">Juhu</option>
                  <option value="Kandivali">Kandivali</option>
                  <option value="Malad">Malad</option>
                  <option value="Mulund">Mulund</option>
                  <option value="Santacruz">Santacruz</option>
                  <option value="Thane">Thane</option>
                  <option value="Vashi">Vashi</option>
                </datalist>
              </div>
            </div>
            <div className="flex gap-3 w-[310px] justify-between md:w-full ">
              {/* PICK-UP DATE */}
              <div className="flex md:w-[50%] w-[150px] flex-col">
                <label className="text-textSecondary md:text-sm text-xs">
                  PICK-UP DATE
                </label>
                <input
                  type="date"
                  value={toDate}
                  placeholder="Pick Date"
                  onChange={handleToDateChange}
                  className="h-10 border   px-2 rounded-lg  text-sm border-borderColor"
                />
              </div>
              {/* PICK-UP TIME */}
              <div className="flex md:w-[50%] w-[150px] flex-col">
                <label className="text-textSecondary md:text-sm text-xs">
                  PICK-UP TIME
                </label>
                <input
                  type="time"
                  // value={toDate}
                  onChange={handleToDateChange}
                  className="h-10 border px-2 rounded-lg border-borderColor"
                />
              </div>
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
