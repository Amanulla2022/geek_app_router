import React, { useEffect, useState } from "react";

const DetailedRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const storedRecipe = sessionStorage.getItem("selectedRecipe");
    if (storedRecipe) {
      setRecipe(JSON.parse(storedRecipe));
    }
  }, []);

  if (!recipe) {
    return <div className="mt-20">No recipe found</div>;
  }

  const {
    idMeal,
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
    strInstructions,
    strSource,
    strYoutube,
    strIngredient1,
    strMeasure1,
    strIngredient2,
    strMeasure2,
    strIngredient3,
    strMeasure3,
    strIngredient4,
    strMeasure4,
    strIngredient5,
    strMeasure5,
    strIngredient6,
    strMeasure6,
    strIngredient7,
    strMeasure7,
    strIngredient8,
    strMeasure8,
    strIngredient9,
    strMeasure9,
    strIngredient10,
    strMeasure10,
  } = recipe;

  const instructionParagraphs = strInstructions
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  const instructionGroups = [];
  for (let i = 0; i < instructionParagraphs.length; i += 5) {
    instructionGroups.push(instructionParagraphs.slice(i, i + 5));
  }

  const ingredients = [
    { ingredient: strIngredient1, measure: strMeasure1 },
    { ingredient: strIngredient2, measure: strMeasure2 },
    { ingredient: strIngredient3, measure: strMeasure3 },
    { ingredient: strIngredient4, measure: strMeasure4 },
    { ingredient: strIngredient5, measure: strMeasure5 },
    { ingredient: strIngredient6, measure: strMeasure6 },
    { ingredient: strIngredient7, measure: strMeasure7 },
    { ingredient: strIngredient8, measure: strMeasure8 },
    { ingredient: strIngredient9, measure: strMeasure9 },
    { ingredient: strIngredient10, measure: strMeasure10 },
  ].filter(({ ingredient }) => ingredient && ingredient.trim() !== "");

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const ingredientGroups = chunkArray(ingredients, 3);

  const handleCopyId = () => {
    navigator.clipboard.writeText(idMeal);
    alert("Meal Id Copied!!!");
  };

  return (
    <div className="mt-20 mb-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/3">
          <img src={strMealThumb} alt={strMeal} className="rounded-lg" />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col gap-6">
            <p
              className="absolute top-20 right-20 underline font-bold text-sm hover:cursor-pointer"
              onClick={handleCopyId}
            >
              Meal Id : <span>{idMeal}</span>
            </p>
            <h2 className="text-2xl font-semibold text-yellow-700">
              Meal Name : <span className="underline"> {strMeal} </span>
            </h2>
            <h3 className="text-xl font-mediumtext-green-700 text-green-700">
              Type : <span>{strArea}</span>
            </h3>
            <h4 className="text-lg font-normal ext-red-700">
              Category : <span>{strCategory}</span>
            </h4>
          </div>
          <p className="font-semibold text-2xl my-4 text-pink-700">
            Ingredients:
          </p>
          {ingredientGroups.map((group, index) => (
            <ul key={index} className="flex gap-12">
              {group.map(({ ingredient, measure }, i) => (
                <li
                  key={i}
                  className="bg-purple-400 p-2 m-1 text-white rounded-full"
                >
                  <span>{measure}</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          ))}

          <div className=" flex gap-4 my-4">
            <p>Read and make : </p>
            <a
              className="text-blue-700 underline"
              href={strSource}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Recipe
            </a>
          </div>
          <div className="flex gap-4 ">
            <p>Watch and make : </p>
            <a
              className="text-blue-700 underline"
              href={strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Youtube Video
            </a>
          </div>
        </div>
      </div>
      <div className="w-full ml-4 mt-4">
        <p className="font-semibold text-lg">Read the detail instruction :</p>
        <div className="flex flex-row flex-wrap">
          {instructionGroups.map((group, index) => (
            <div key={index} className="w-full  ml-4 mb-4">
              {group}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedRecipe;
