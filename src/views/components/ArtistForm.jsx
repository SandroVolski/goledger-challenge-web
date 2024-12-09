// src/views/components/ArtistForm.jsx
import React, { useState, useEffect } from 'react';

function ArtistForm({ onSubmit, initialData, onCancel }) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    const key = initialData?.key || `artist_${Date.now()}`; 
    onSubmit({ key, name });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-neutral-800 p-4 rounded">
      <div>
        <label className="block mb-1">Nome do Artista</label>
        <input
          className="w-full p-2 rounded bg-neutral-700 text-white"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Ex: The Beatles"
        />
      </div>
      <div className="flex space-x-2">
        <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">
          Salvar
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default ArtistForm;
