import React from 'react';
import uniqid from 'uniqid';

import { Member } from './Member';

export const Team = ({
  team,
  setSearchTerm,
}) => {
  const renderTeam = () => {
    if(team.length < 1) {
      return <p>Add a Pokemon to your team to see them show up here.</p>
    } else {
      return team.map((mon) => {
        return(
        <Member key={uniqid()} mon={mon} setSearchTerm={setSearchTerm}/>
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