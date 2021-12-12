import React from 'react';

import { capitalize } from './utils';

export const Member = ({
  mon,
  isFetching,
  setSearchTerm,
  handleDelete
}) => {
  const handleClickOnMon = () => {
    setSearchTerm(mon.name);
  }

  return (
    <figure className="w-1/4 flex flex-col m-3">
      <div className="m-1 p-2 flex flex-col items-center rounded cursor-pointer hover:ring hover:ring-green-200" onClick={handleClickOnMon}>
        <h2 className="text-2xl font-semi">{capitalize(mon.name)}</h2>
        <img className={ isFetching ? "ease-in-out scale-125" : "ease-in-out scale-100" } src={mon.sprites.front_default} alt={mon.name} />
        <p>Dex #: {mon.id}</p>
        <p>Type 1: {capitalize(mon.types[0].type.name)}</p>
        <p>Type 2: {mon.types[1] ? capitalize(mon.types[1].type.name) : 'None'}</p>
        <p>Weight (lbs): {mon.weight}</p>
      </div>
      <button className="p-2 mt-2 border rounded bg-red-700 text-white hover:bg-red-800" onClick={() => handleDelete(mon.name)}>Remove</button>
    </figure>
  );
}