import React, { useState, useEffect } from "react";
import api from "../../services/api";

function SongsPage() {
  const [songs, setSongs] = useState([]); // Array vazio por padrão
  const [loading, setLoading] = useState(false);

  // Função para buscar músicas
  const fetchSongs = async () => {
    setLoading(true);
    try {
      const response = await api.post("/api/query/search", {
        query: { selector: { "@assetType": "song" } },
      });
      console.log("Dados retornados pela API:", response.data);

      // Verifica se o resultado é um array válido
      const fetchedSongs = Array.isArray(response.data.result)
        ? response.data.result
        : [];
      setSongs(fetchedSongs);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
      setSongs([]); // Define como array vazio em caso de erro
    } finally {
      setLoading(false);
    }
  };

  // Função para excluir uma música
  const deleteSong = async (songKey) => {
    try {
      await api.post("/api/tx/deleteAsset", {
        "@key": songKey,
        cascade: false, // Define se deve deletar em cascata
      });
      console.log("Música excluída:", songKey);
      // Atualiza a lista de músicas após a exclusão
      setSongs(songs.filter((song) => song["@key"] !== songKey));
    } catch (error) {
      console.error("Erro ao excluir música:", error);
    }
  };

  useEffect(() => {
    fetchSongs(); // Carrega as músicas ao montar o componente
  }, []);

  return (
    <div className="p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Músicas</h1>

      {loading ? (
        <p>Carregando músicas...</p>
      ) : songs.length > 0 ? (
        <ul className="space-y-2">
          {songs.map((song, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white shadow"
            >
              <div>
                <p className="font-semibold">Nome: {song.name || "Sem Nome"}</p>
                <p className="text-sm text-gray-600">
                  Artista: {song.artist || "Desconhecido"}
                </p>
                <p className="text-sm text-gray-600">
                  Ano: {song.year || "Desconhecido"}
                </p>
              </div>
              <button
                onClick={() => deleteSong(song["@key"])}
                className="p-2 bg-red-600 text-white rounded-lg"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma música encontrada.</p>
      )}
    </div>
  );
}

export default SongsPage;
