import React from "react";
import uniqid from 'uniqid';

import { capitalize } from "./utils";

export const HistoryBox = ({
  searchHistory,
  setSearchHistory,
  setSearchTerm
}) => {
  const showClearLink = searchHistory.length > 0;

  const renderHistory = () => {
    return searchHistory.map(name => {
      return (
        <p key={uniqid()} className="max-w-1/3 mr-2 text-blue-500 cursor-pointer hover:underline" onClick={() => setSearchTerm(name)}>
          {capitalize(name)}
        </p>
      );
    })
  }

  return (
    <div className="lg:absolute lg:left-0 lg:top-24 lg:my-auto bg-white/50 p-4 rounded">
      <h2 className="text-xl text-center">Search History</h2>
      <div className="flex flex-wrap lg:flex-col lg:flex-nowrap lg:pl-5">
        { renderHistory() }
      </div>
      { showClearLink ? 
        <p
          onClick={() => setSearchHistory([]) }
          className="text-xs text-left text-red-700 cursor-pointer hover:underline"  
        >
          Clear
        </p> : null }
    </div>
  );
}