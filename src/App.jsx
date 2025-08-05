// src/App.jsx
import React, { useState } from 'react';

import ActorCard from './components/ActorCard';
import actorsData from './data/actors';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import History from './components/History';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [followedActors, setFollowedActors] = useState({});
  const [history, setHistory] = useState([]);

  const toggleFollow = (id) => {
    setFollowedActors((prev) => {
      const newStatus = !prev[id];
      const updated = { ...prev, [id]: newStatus };
      const actor = actorsData.find((a) => a.id === id);
      setHistory((h) => [
        ...h,
        `${actor.name} was ${newStatus ? 'followed' : 'unfollowed'} at ${new Date().toLocaleTimeString()}`
      ]);
      return updated;
    });
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowSignUp(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const filteredActors = actorsData.filter((actor) =>
    actor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen flex flex-col bg-cover bg-center`}
      style={{
        backgroundImage: `url('https://images.splitshire.com/full/A-Modern,-Elegant-Corporate-Office-Portrait-Background_BJlUw.png')`
      }}
    >
      <main className="flex-grow p-6 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md">
        {!isLoggedIn ? (
          showSignUp ? (
            <SignUp onAuth={handleLogin} onToggle={() => setShowSignUp(false)} />
          ) : (
            <Login onAuth={handleLogin} onToggle={() => setShowSignUp(true)} />
          )
        ) : (
          <>
            <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <h1 className="text-3xl font-bold">🎭 Pakistani Actors</h1>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="input-field w-48"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={toggleTheme} className="btn-primary">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button
                  onClick={handleLogout}
                  className="btn-primary bg-red-500 hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {filteredActors.map((actor) => (
                <ActorCard
                  key={actor.id}
                  actor={actor}
                  isFollowed={!!followedActors[actor.id]}
                  onToggleFollow={toggleFollow}
                />
              ))}
            </section>

            <History entries={history} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
