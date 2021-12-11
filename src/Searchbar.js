import React from "react";

export const Searchbar = ({
  placeholder,
  searchTerm,
  setSearchTerm,
  fetchDetails,
}) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDetails(searchTerm.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border rounded p-2"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}