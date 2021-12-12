import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useState } from "react";

import { Searchbar } from './Searchbar';
import { Team } from './Team';
import { Mon } from './Mon';

import './index.css';
import { HistoryBox } from './HistoryBox';

function App() {
  const queryClient = new QueryClient();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [team, setTeam] = useState([]);

  const addToHistory = (name) => {
    if (!searchHistory.includes(name)) {
      const newHistory = [...searchHistory];
      newHistory.push(name);
      setSearchHistory(newHistory);
    }
  }

  const addToTeam = (data) => {
    if (team.length < 6) {
      const newTeam = [...team];
      newTeam.push(data);
      setTeam(newTeam);
    } else {
      console.warn("A trainer can only carry 6 Pokemon at one time!");
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container min-h-screen pl-8 pr-8 flex flex-col items-center justify-center bg-gradient-to-b from-slate-300 via-emerald-300 to-indigo-300">
        <h1 className="text-5xl font-bold mb-4">Thoughtworks Demo</h1>
        <Searchbar
          setSearchTerm={setSearchTerm}
        />
        <Mon
          searchTerm={searchTerm}
          addToTeam={addToTeam}
          addToHistory={addToHistory}
        />
        <Team
          team={team}
          setTeam={setTeam}
          setSearchTerm={setSearchTerm}
        />
        <HistoryBox
          searchHistory={searchHistory}
          setSearchTerm={setSearchTerm}
        />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;