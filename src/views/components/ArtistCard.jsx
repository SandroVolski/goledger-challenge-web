// src/views/components/ArtistCard.jsx
import React from 'react';

function ArtistCard({ artist }) {
  return (
    <div className="bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors cursor-pointer">
      <h2 className="font-bold">{artist.name}</h2>
      {/* Adicione mais detalhes do artista aqui */}
    </div>
  );
}

export default ArtistCard;
