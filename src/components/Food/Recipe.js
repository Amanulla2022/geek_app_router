import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  const handleDetailsClick = () => {
    sessionStorage.setItem("selectedRecipe", JSON.stringify(recipe));
  };

  return (
    <div className="w-1/5 bg-white m-4 rounded-lg pb-10">
      <h3 className="font-semibold text-center uppercase underline mb-2">
        {strMeal}
      </h3>
      <img src={strMealThumb} alt={strMeal} className="rounded-3xl w-full" />
      <div className="px-10 text-center">
        <span className="text-gray-600 mb-2">{strCategory}</span>

        <Link
          className="block bg-FFBA5A text-white py-2 rounded-lg no-underline bg-gray-700"
          to={{ pathname: `/food/${idMeal}` }}
          onClick={handleDetailsClick}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
