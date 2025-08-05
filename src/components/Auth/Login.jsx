import React, { useState } from 'react';

const Login = ({ onAuth, onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!email || !password) {
      setError('Please fill in all fields.');
    } else if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError('Invalid credentials or no account found.');
    } else {
      setError('');
      onAuth();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: `url('https://images.splitshire.com/full/A-Modern,-Elegant-Corporate-Office-Portrait-Background_BJlUw.png')`
      }}
    >
      <div className="w-full max-w-sm bg-white/80 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white uppercase">
            Welcome to "Dynamic Profile Card" React App
          </h1>
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-300 tracking-wide mt-1">
           <b>BY NOOR MALIK</b> 
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?{' '}
          <button onClick={onToggle} className="text-blue-500 hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
