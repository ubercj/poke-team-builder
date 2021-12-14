import React from 'react';

import { capitalize } from './utils';

export const Member = ({
  mon,
  isFetching,
  setSearchTerm,
  handleDelete
}) => {
  const largeScreen = window.matchMedia('(min-width: 1024px)').matches;

  const handleClickOnMon = () => {
    setSearchTerm(mon.name);
  }

  return (
    <figure className="w-full lg:w-1/3 flex lg:flex-col items-center mt-2">
      <div className="w-5/6 m-1 p-2 pl-4 pr-4 flex flex-col items-center rounded cursor-pointer hover:ring hover:ring-green-200" onClick={handleClickOnMon}>
        <h2 className="text-2xl font-semi">{capitalize(mon.name)}</h2>
        <img className={ isFetching ? "ease-in-out scale-150" : "ease-in-out scale-100" } src={mon.sprites.front_default} alt={mon.name} />
      </div>
      <button className="p-1 py-0.5 lg:p-2 mt-4 lg:w-1/2 self-start lg:self-auto border rounded bg-red-700 text-white text-xs hover:bg-red-800" onClick={() => handleDelete(mon.name)}>{largeScreen ? 'Remove' : 'X'}</button>
    </figure>
  );
}