// src/components/Auth/SignUp.jsx
import React, { useState } from 'react';

const SignUp = ({ onToggle }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    // Save user to localStorage
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    setSuccess(true);
    setError('');
    setForm({ name: '', email: '', password: '' });

    // Delay to redirect to login
    setTimeout(() => {
      onToggle(); // Switch to Login page
    }, 1500);
  };

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-2">Account created! Redirecting to login...</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input-field"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn-primary w-full">Create Account</button>
      </form>

      <p className="text-sm mt-4">
        Already have an account?{' '}
        <button onClick={onToggle} className="text-blue-500 underline">
          Log in
        </button>
      </p>
    </div>
  );
};

export default SignUp;
