import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useState } from "react";

import { Searchbar } from './Searchbar';
import { Team } from './Team';
import { Mon } from './Mon';
import { HistoryBox } from './HistoryBox';

import './index.css';

function App() {
  const queryClient = new QueryClient();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [team, setTeam] = useState([]);
  const [showError, setShowError] = useState(false);

  const addToHistory = (name) => {
    if (name && !searchHistory.includes(name)) {
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
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-full min-h-screen flex flex-col lg:flex-row pl-8 pr-8 bg-gradient-to-b from-slate-300 via-emerald-300 to-indigo-300">
        <div className="w-full lg:w-10/12 max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center lg:text-5xl font-bold mt-4 mb-4">Thoughtworks Demo</h1>
          <div className="lg:w-full lg:flex lg:justify-center lg:items-start">
            <Searchbar
              setSearchTerm={setSearchTerm}
            />
            <Mon
              searchTerm={searchTerm}
              addToTeam={addToTeam}
              addToHistory={addToHistory}
            />
          </div>
          { showError ? 
            <div
              onClick={() => setShowError(false)}
              className="absolute top-0 flex justify-center items-center z-10 w-full h-screen lg:h-full bg-white/30 cursor-pointer"
            >
              <p className="text-xl lg:text-3xl p-8 border rounded bg-orange-700 text-white">A trainer can only carry up to 6 Pokemon at a time!</p>
            </div>
            : null }
          <Team
            team={team}
            setTeam={setTeam}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <HistoryBox
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
          setSearchTerm={setSearchTerm}
        />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;