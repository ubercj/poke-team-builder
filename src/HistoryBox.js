import React from "react";

import { capitalize } from "./utils";

export const HistoryBox = ({
  searchHistory,
  setSearchTerm
}) => {
  const renderHistory = () => {
    return searchHistory.map(name => {
      return (
        <p className="mr-2 text-blue-500 cursor-pointer hover:underline" onClick={() => setSearchTerm(name)}>
          {capitalize(name)}
        </p>
      );
    })
  }

  return (
    <div>
      <h2>Search History</h2>
      <div className="flex">
        { renderHistory() }
      </div>
    </div>
  );
}