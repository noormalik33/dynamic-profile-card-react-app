// src/components/History.jsx
import React from 'react';

const History = ({ entries }) => {
  if (entries.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h3 className="text-lg font-semibold mb-2">Follow/Unfollow History</h3>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
        {entries.map((entry, idx) => (
          <li key={idx}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
