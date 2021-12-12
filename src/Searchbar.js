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
    <form className="w-1/2" onSubmit={handleSubmit}>
      <input
        className="w-5/6 border rounded p-2"
        placeholder={'Type a Pokemon\'s name'}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit" className="border rounded p-2 ml-2 bg-amber-300">Search</button>
    </form>
  );
}