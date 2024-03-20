import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./Recipe";

const Food = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div className="container  bg-f7f7f7 max-w-1000 mx-auto min-h-screen p-30 rounded-2xl mt-20">
      <h2 className="text-center text-4xl mb-4 underline text-slate-500">
        Our Food and Best Recipes
      </h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="flex flex-row flex-wrap justify-center mt-20">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Results."}
      </div>
    </div>
  );
};

export default Food;
