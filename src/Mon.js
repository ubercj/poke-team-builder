import React from 'react';
import { useQuery } from 'react-query';

import { captureMon, capitalize } from './utils';

export const Mon = ({
  searchTerm,
  addToTeam,
}) => {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching
  } = useQuery(['mon', searchTerm], () => captureMon(searchTerm), { refetchInterval: 5000 });

  const handleClick = () => {
    addToTeam(data.name);
  }

  const renderMon = () => {
    if (isLoading) {
      return "Loading...";
    } 
    else if (isError) {
      return "An error has occurred: " + error.message;
    } 
    else {
      return (
        <>
          <h2 className="text-2xl font-semi">{capitalize(data.name)}</h2>
          <img className={ isFetching ? "ease-in-out bg-green-200" : "ease-in-out bg-transparent"} src={data.sprites.front_default} alt={data.name} />
          <p>Dex #: {data.id}</p>
          <p>Type 1: {capitalize(data.types[0].type.name)}</p>
          <p>Type 2: {data.types[1] ? capitalize(data.types[1].type.name) : 'None'}</p>
          <p>Weight (lbs): {data.weight}</p>
          <button className="border rounded p-2 mt-2 mb-2 bg-amber-300 hover:bg-amber-400" onClick={handleClick}>
            Add to team
          </button>
        </>
      );
    }
  }

  return (
    <div className="mt-2 min-h-[300px] flex flex-col items-center">
      { renderMon() }
    </div>
  )
}