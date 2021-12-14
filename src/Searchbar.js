import React, { useState } from "react";

export const Searchbar = ({
  setSearchTerm,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const _searchTerm = inputValue.toLowerCase();
    setSearchTerm(_searchTerm);
  }

  return (
    <form className="w-full px-6 lg:mt-6 flex justify-evenly lg:justify-center" onSubmit={handleSubmit}>
      <input
        className="lg:w-1/2 border rounded p-2 lg:text-2xl"
        placeholder={'Type a Pokemon\'s name'}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit" className="lg:w-1/6 border rounded p-2 ml-2 lg:text-2xl bg-amber-300 hover:bg-amber-400">Search</button>
    </form>
  );
}