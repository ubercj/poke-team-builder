import React from 'react';

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
    <figure className="flex flex-col m-3">
      <div className="m-1 p-2 rounded cursor-pointer hover:ring hover:ring-green-200" onClick={handleClickOnMon}>
        <h2 className="text-3xl font-bold underline">{mon.name}</h2>
        <img className={ isFetching ? "transition ease-in-out bg-green-200" : "transition ease-in-out bg-transparent"} src={mon.sprites.front_default} alt={mon.name} />
        <p>Dex #: {mon.id}</p>
        <p>Type 1: {mon.types[0].type.name}</p>
        <p>Type 2: {mon.types[1] ? mon.types[1].type.name : 'None'}</p>
        <p>Weight (lbs): {mon.weight}</p>
      </div>
      <button className="p-2 mt-2 border rounded bg-red-700 text-white hover:bg-red-800" onClick={() => handleDelete(mon.name)}>Remove</button>
    </figure>
  );
}