import React from 'react';

function ArtistList({ artists }) {
  return (
    <ul>
      {artists.map(artist => (
        <li key={artist.key}>{artist.name}</li>
      ))}
    </ul>
  );
}

export default ArtistList;
