import React from 'react';

function ActorCard({ actor, onToggleFollow, isFollowed }) {
  return (
    <div className="rounded-xl shadow-lg p-6 bg-white dark:bg-gray-800 w-full max-w-xs text-center transition-transform transform hover:scale-105">
      <img src={actor.avatar} alt={actor.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
      <h2 className="text-xl font-semibold mb-1">{actor.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{actor.bio}</p>
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          isFollowed
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        onClick={() => onToggleFollow(actor.id)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}

export default ActorCard;
