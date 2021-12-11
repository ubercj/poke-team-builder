// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from 'react-query';

import { useState } from "react";

import { Searchbar } from './Searchbar';
import { Team } from './Team';
import { Mon } from './Mon';

function App() {
  const startingText = 'Enter a Pokemon\'s name!';
  const invalidText = 'Invalid search.';
  const [searchTerm, setSearchTerm] = useState('');
  const [details, setDetails] = useState('');
  const [team, setTeam] = useState([]);


  const fetchDetails = async (mon) => {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${mon}/`);
      const data = await result.json();
      const newDetails = getDetails(data);
      setDetails(newDetails);
    } catch(error) {
      console.log(error);
      setDetails(invalidText);
    }
  }

  const getDetails = (data) => {
    let type2;
    if(data.types[1]) {
      type2 = data.types[1].type.name;
    } else {
      type2 = 'none';
    }

    return {
      name: data.name,
      id: data.id,
      sprite: data.sprites.front_default,
      type1: data.types[0].type.name,
      type2: type2,
      weight: data.weight,
    }
  }

  const handleClick = () => {
    const newTeam = [...team];
    newTeam.push(details);
    setTeam(newTeam);
  }

  return (
    <main className="App">
      <h1>Thoughtworks Demo</h1>
      <Searchbar 
        placeholder={"Type something, stupid."}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        fetchDetails={fetchDetails}
      />
      <Mon 
        details={details}
        startingText={startingText}
        invalidText={invalidText}
        handleClick={handleClick}
      />
      <Team
        team={team}
        setDetails={setDetails}
      />
    </main>
  );
}

export default App;