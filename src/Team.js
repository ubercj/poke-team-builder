import React from 'react';
import { useQueries } from 'react-query';
import uniqid from 'uniqid';

import { Member } from './Member';
import { captureMon } from './utils';

export const Team = ({
  team,
  setTeam,
  setSearchTerm,
}) => {
  const mons = useQueries(
    team.map(name => {
      return {
        queryKey: ['mon', name],
        queryFn: () => captureMon(name),
        refetchInterval: 10000,
      }
    })
  );
  
  const handleDelete = (target) => {
    const newTeam = team.filter(name => name !== target);
    setTeam(newTeam);
  }

  const renderTeam = () => {
    if(mons.length < 1) {
      return <p>Add a Pokemon to your team and they will appear here.</p>
    } else {
      return mons.map(mon => {
        return (
          <Member
            key={uniqid()}
            mon={mon.data}
            isFetching={mon.isFetching}
            setSearchTerm={setSearchTerm}
            handleDelete={handleDelete}
          />
        );
      });
    }
  }

  return (
    <div className="w-2/3 border rounded-md p-4 mb-6">
      <h2 className="text-3xl font-bold text-center">Your Team</h2>
      <div className="flex flex-wrap justify-evenly">
        {renderTeam()}
      </div>
    </div>
  );
}