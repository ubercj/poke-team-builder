import React from 'react';

export const Mon = ({details, startingText, invalidText, handleClick}) => {
  const renderDetails = () => {
    if(details === startingText || details === invalidText) {
      return <p>{details}</p>
    }
    else {
      return (
        <div>
          <h2>{details.name}</h2>
          <img src={details.sprite} alt={details.name}/>
          <p>Dex #: {details.id}</p>
          <p>Type 1: {details.type1}</p>
          <p>Type 2: {details.type2}</p>
          <p>Weight (lbs): {details.weight}</p>
          <button onClick={handleClick}>Add to team</button>
        </div>
      )
    }
  }

  return (
    <>
      {renderDetails()}
    </>
  )
}