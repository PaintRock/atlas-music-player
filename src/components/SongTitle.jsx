import React from 'react';

export default function SongTitle({ title ="Song Title", artist = "Artist Name" }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{artist}</p>
    </div>
  );
}