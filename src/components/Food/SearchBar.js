import React from "react";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form
      className="flex item-start justify-start ml-20 mt-8 gap-4"
      onSubmit={handleSubmit}
    >
      <input
        value={query}
        className=" w-1/3 border rounded-lg bg-blue-600 text-lg text-white"
        placeholder="Search Recipes...."
        name="query"
        disabled={isLoading}
        onChange={(event) => setQuery(event.target.value)}
      />
      <input
        disabled={isLoading || !query}
        type="submit"
        className="bg-green-500 text-white rounded-full py-2 px-2"
        value="Search"
      />
    </form>
  );
};

export default SearchBar;
