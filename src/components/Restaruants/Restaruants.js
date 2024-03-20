import React, { useState } from "react";
import data from "./Data";
import { RiMapPinUserFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const starsArray = Array.from({ length: 5 }, (_, index) => {
    if (index < filledStars) {
      return (
        <span key={index}>
          <FaStar className="text-yellow-400 text-2xl" />
        </span>
      );
    } else if (hasHalfStar && index === filledStars) {
      return (
        <span key={index}>
          <FaStar className="text-red-400 text-2xl" />
        </span>
      ); // Half star
    } else {
      return (
        <span key={index}>
          <FaStar className="text-gray-300 text-2xl" />
        </span>
      ); // Empty star
    }
  });

  return <div className="flex gap-1">{starsArray}</div>;
};

const Home = () => {
  const [food, setFood] = useState(data);
  function filterData(name) {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(name.trim().toLowerCase())
    );
    setFood(filteredData);
  }

  const filterRatingWise = (e) => {
    const targetRating = parseFloat(e.target.value);
    const filteredData = data.filter((item) => {
      const rating = Math.floor(item.rating);
      return rating === targetRating && item.rating >= targetRating;
    });
    setFood(filteredData);
  };
  return (
    <main className="mt-24 mb-12  ">
      <div className="flex md:flex-row gap-8 flex-col md:justify-between pl-16 pr-24">
        <input
          type="text"
          name="search"
          placeholder="Search Restaruants..."
          onChange={(e) => {
            filterData(e.target.value);
          }}
          className="border-2 h-10 w-48"
        />
        <div>
          <label id="ratings">Minimum Rating : </label>
          <input
            type="number"
            name="ratings"
            min={0}
            max={5}
            onChange={filterRatingWise}
            className="border-2 h-8"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap rounded-sm">
        {food.map((item) => {
          return (
            <div
              key={item._id.$oid}
              className="flex flex-col gap-8 m-14 md:w-1/4 h-auto border rounded p-4 shadow-md"
            >
              <div className="flex gap-3 flex-col bg-white-100 pl-2">
                <div className="flex items-center gap-4">
                  <h4 className="text-2xl">{item.name}</h4>
                  <StarRating rating={item.rating} />
                </div>
                <p className="flex items-center align-middle text-slate-600 gap-3 ">
                  <RiMapPinUserFill />
                  {item.address}, {item["address line 2"]}
                </p>
                <p className=" text-slate-600">
                  {item.outcode} {item.postcode}
                </p>
              </div>
              <div className="bg-slate-200 flex gap-4 flex-col pl-2">
                <p className="flex items-center align-middle text-green-600 gap-2">
                  <GiForkKnifeSpoon />
                  <span className="text-lg">{item.type_of_food}</span>
                </p>
                <a href="/" className="text-blue-400 text-lg hover:underline">
                  Visit Menu
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center items-center align-middle">
        <FaChevronLeft className="mr-2  text-green-400 " />
        <p className="border py-2 px-4 rounded-lg  text-white bg-blue-500">1</p>
        <p className="border py-2 px-4 rounded-lg  text-blue-400">2</p>
        <p className="border py-2 px-4 rounded-lg  text-blue-400">3</p>
        <p className="border py-2 px-4 rounded-lg  text-blue-400">...</p>
        <FaChevronRight className="ml-2 text-red-400" />
      </div>
    </main>
  );
};

export default Home;
