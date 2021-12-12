import React from 'react';

export const Member = ({
  mon,
  setSearchTerm,
}) => {
  const handleClickOnMon = () => {
    setSearchTerm(mon.name);
  }

  return (
    <div className="mt-2" onClick={handleClickOnMon}>
      <h2 className="text-3xl font-bold underline">{mon.name}</h2>
      <img src={mon.sprites.front_default} alt={mon.name} />
      <p>Dex #: {mon.id}</p>
      <p>Type 1: {mon.types[0].type.name}</p>
      <p>Type 2: {mon.types[1] ? mon.types[1].type.name : 'None'}</p>
      <p>Weight (lbs): {mon.weight}</p>
    </div>
  );
}