import React from "react";
import qoutesList from "../../Qoutes.json";
import shareOnTwitter from "./ShareOnTwitter";
import { FaShareAlt } from "react-icons/fa";

const Qoutes = () => {
  return (
    <>
      {qoutesList.map((quote, index) => (
        <div className="md:m-24 m-8 mt-24" key={index}>
          <div className="w-full p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {quote.quote}
            </h5>
            <div className="flex justify-around w-full mt-2">
              <p className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
                {quote.author}
              </p>
              <button onClick={() => shareOnTwitter(quote)}>
                <FaShareAlt className="text-blue-700 font-bold text-2xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Qoutes;
