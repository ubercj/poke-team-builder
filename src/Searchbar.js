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
    <form onSubmit={handleSubmit}>
      <input
        className="border rounded p-2"
        placeholder={'Type a Pokemon\'s name and press Enter.'}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  );
}