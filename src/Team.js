import React from 'react';
import { useQueries } from 'react-query';
import uniqid from 'uniqid';

import { Member } from './Member';
import { captureMon } from './utils';

export const Team = ({
  team,
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
  
  const renderTeam = () => {
    if(mons.length < 1) {
      return <p>Add a Pokemon to your team and they will appear here.</p>
    } else {
      return mons.map(mon => {
        return (
          <Member key={uniqid()} mon={mon.data} isFetching={mon.isFetching} setSearchTerm={setSearchTerm} />
        );
      });
    }
  }

  return (
    <div className="border rounded-md p-4 mb-6">
      <h2>Your Team</h2>
      <div className="flex justify-evenly">
        {renderTeam()}
      </div>
    </div>
  );
}