import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useState } from "react";

import { Searchbar } from './Searchbar';
import { Team } from './Team';
import { Mon } from './Mon';

import './index.css';

function App() {
  const queryClient = new QueryClient();

  const [searchTerm, setSearchTerm] = useState('pikachu');
  const [team, setTeam] = useState([]);

  const addToTeam = (data) => {
    const newTeam = [...team];
    newTeam.push(data);
    setTeam(newTeam);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container min-h-screen pl-8 pr-8 flex flex-col items-center justify-center bg-gradient-to-b from-slate-300 via-emerald-300 to-indigo-300">
        <h1 className="text-5xl font-bold mb-4">Thoughtworks Demo</h1>
        <Searchbar
          setSearchTerm={setSearchTerm}
        />
        <Mon searchTerm={searchTerm} addToTeam={addToTeam} />
        <Team
          team={team}
          setSearchTerm={setSearchTerm}
        />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;