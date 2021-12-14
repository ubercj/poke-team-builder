import React from 'react';
import { useQuery } from 'react-query';

import { captureMon, capitalize } from './utils';

export const Mon = ({
  searchTerm,
  addToTeam,
  addToHistory,
}) => {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching
  } = useQuery(['mon', searchTerm], () => captureMon(searchTerm), {
    refetchInterval: 5000,
    onSuccess: (data) => { addToHistory(data.name); },
  });

  const handleClick = () => {
    addToTeam(data.name);
  }

  const renderMon = () => {
    if (isLoading) {
      return "Loading...";
    } 
    else if (isError) {
      return error.message;
    } 
    else {
      return (
        <>
          <div className="w-1/3 lg:max-w-sm flex flex-col">
            <h2 className="text-2xl text-center font-bold">{capitalize(data.name)}</h2>
            <img className={ isFetching ? "ease-in-out scale-125" : "ease-in-out scale-100" } src={data.sprites.front_default} alt={data.name} />
            <button className="border rounded p-2 my-2 bg-amber-300 hover:bg-amber-400" onClick={handleClick}>
              Add to team
            </button>
          </div>
          <div className="w-1/3 min-h-48 flex flex-col justify-evenly">
            <p><span className="font-bold">Dex #:</span> {data.id}</p>
            <p><span className="font-bold">Type 1:</span> {capitalize(data.types[0].type.name)}</p>
            <p><span className="font-bold">Type 2:</span> {data.types[1] ? capitalize(data.types[1].type.name) : 'None'}</p>
            <p><span className="font-bold">Weight (lbs):</span> {data.weight}</p>
          </div>
        </>
      );
    }
  }

  return (
    <div className="lg:w-1/3 my-8 flex justify-evenly">
      { renderMon() }
    </div>
  )
}