import React from 'react';

export const Team = ({
  team,
  setDetails,
}) => {
  const handleClickOnMon = (mon) => {
    setDetails(mon);
  }

  const renderTeam = () => {
    if(team.length < 1) {
      return <p>Add a Pokemon to your team to see them show up here.</p>
    } else {
      return team.map((mon) => {
        return(
        <div className="flex flex-col items-center cursor-pointer m-2 hover:bg-slate-50" key={mon.id} onClick={() => handleClickOnMon(mon)}>
          <h4>{mon.name}</h4>
          <img src={mon.sprite} alt={mon.name}/>
        </div>
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