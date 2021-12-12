import React from 'react';
import { useQuery } from 'react-query';

export const Mon = ({
  searchTerm,
  addToTeam,
}) => {
  const captureMon = () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`)
      .then((res) => {
        return res.json();
      });

  const { data, error, isLoading, isError, isFetching } = useQuery(['mon', searchTerm], captureMon);

  if (isLoading) {
    return "Loading...!";
  }

  if (isError) {
    return "An error has occurred: " + error.message;
  }

  const handleClick = () => {
    addToTeam(data);
  }

  return (
    <div className="mt-2">
      <h2 className="text-3xl font-bold underline">{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Dex #: {data.id}</p>
      <p>Type 1: {data.types[0].type.name}</p>
      <p>Type 2: {data.types[1] ? data.types[1].type.name : 'None'}</p>
      <p>Weight (lbs): {data.weight}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
      <button className="border rounded p-2 mt-2 mb-2 bg-amber-300 hover:bg-amber-400" onClick={handleClick}>
        Add to team
      </button>
    </div>
  );
}