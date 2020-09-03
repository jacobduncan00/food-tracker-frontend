import React, { useState, useEffect } from "react";
import getDate from "../Tools/Date";
import sendInfo from "../Tools/ClientPush";
import toTitleCase from "../Tools/TitleCase";
import "../Styles/tailwind.css";

const SendInfo = () => {
  const [date, setDate] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [drinks, setDrinks] = useState("");
  const [headache, setHeadache] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    setDate(getDate());
  }, []);

  const handleBreakfastChange = (event: React.FormEvent<HTMLInputElement>) => {
    setBreakfast(event.currentTarget.value);
  };
  const handleLunchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLunch(event.currentTarget.value);
  };
  const handleDinnerChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDinner(event.currentTarget.value);
  };
  const handleSnacksChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSnacks(event.currentTarget.value);
  };
  const handleDrinksChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDrinks(event.currentTarget.value);
  };
  const handleHeadachesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHeadache(event.currentTarget.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const objectToSend = {
      date,
      breakfast,
      lunch,
      dinner,
      snacks,
      drinks,
      headache,
    };
    const result = await sendInfo(objectToSend);
    if (result === 1) {
      setBreakfast("");
      setLunch("");
      setDinner("");
      setSnacks("");
      setDrinks("");
      setHeadache("");
      setResponse("✅ Log entry successful!");
    } else {
      setBreakfast("");
      setLunch("");
      setDinner("");
      setSnacks("");
      setDrinks("");
      setHeadache("");
      setResponse("❌ Log entry un-successful!");
    }
  };
  return (
    <div className="log-info">
      <label className="block uppercase tracking-wide text-gray-800 text-xl font-bold mb-2">
        {date}
      </label>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Breakfast
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Waffles"
              value={toTitleCase(breakfast)}
              onChange={handleBreakfastChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Lunch
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-lunch"
              type="text"
              placeholder="Sandwich"
              value={toTitleCase(lunch)}
              onChange={handleLunchChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Dinner
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-dinner"
              type="text"
              placeholder="Steak"
              value={toTitleCase(dinner)}
              onChange={handleDinnerChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Snacks
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-snacks"
              type="text"
              placeholder="Chips"
              value={toTitleCase(snacks)}
              onChange={handleSnacksChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Drinks
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-drinks"
              type="text"
              placeholder="Coca-Cola"
              value={toTitleCase(drinks)}
              onChange={handleDrinksChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Headache
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-headaches"
              type="text"
              placeholder="Yes"
              value={toTitleCase(headache)}
              onChange={handleHeadachesChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Button
            </label>
            <button
              className="appearance-none block w-full bg-pink-400 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight hover:bg-green-400 hover:text-black hover:font-bold"
              id="grid-button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <label className="block uppercase tracking-wide text-gray-800 text-xl font-bold mb-2">
        {response}
      </label>
    </div>
  );
};

export default SendInfo;
