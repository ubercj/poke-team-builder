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
    onSuccess: (data) => { 
      addToHistory(data.name);
      // console.info(data);
    },
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
    } else if (data.name === '') {
      return '';
    }
    else {
      return (
        <>
          <div className="w-1/2 lg:w-1/4 lg:max-w-sm flex flex-col justify-between">
            <h2 className="text-2xl text-center font-bold">{capitalize(data.name)}</h2>
            <img className={ isFetching ? "ease-in-out scale-125" : "ease-in-out scale-100" } src={data.sprites.other["official-artwork"].front_default} alt={data.name} />
            <button className="border rounded p-2 my-2 bg-amber-300 hover:bg-amber-400" onClick={handleClick}>
              Add to team
            </button>
          </div>
          <div className="w-1/2 lg:w-1/2 ml-6 min-h-48 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 flex flex-col justify-between lg:justify-start mb-2">
              <h5 className="text-lg lg:mb-4 underline">Basic Info</h5>
              <p className="lg:mb-2"><span className="font-bold">Dex #:</span> {data.id}</p>
              <p className="lg:mb-2"><span className="font-bold">Type 1:</span> {capitalize(data.types[0].type.name)}</p>
              <p className="lg:mb-2"><span className="font-bold">Type 2:</span> {data.types[1] ? capitalize(data.types[1].type.name) : 'None'}</p>
              <p className="lg:mb-2"><span className="font-bold">Weight (lbs):</span> {data.weight}</p>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between lg:justify-start">
              <h5 className="text-lg lg:mb-4 underline">Base Stats</h5>
              <p className="lg:mb-2"><span className="font-bold">HP:</span> {data.stats[0].base_stat}</p>
              <p className="lg:mb-2"><span className="font-bold">Attack:</span> {data.stats[1].base_stat}</p>
              <p className="lg:mb-2"><span className="font-bold">Defense:</span> {data.stats[2].base_stat}</p>
              <p className="lg:mb-2"><span className="font-bold">Sp. Att:</span> {data.stats[3].base_stat}</p>
              <p className="lg:mb-2"><span className="font-bold">Sp. Def:</span> {data.stats[4].base_stat}</p>
              <p className="lg:mb-2"><span className="font-bold">Speed:</span> {data.stats[5].base_stat}</p>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="lg:w-full my-8 px-4 flex justify-evenly">
      { renderMon() }
    </div>
  )
}