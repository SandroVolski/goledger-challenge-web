import api from './api';

export const artistService = {
  async getAll() {
    // Obter todos os artistas
    const response = await api.post('/api/query/search', {
      query: {
        selector: {
          '@assetType': 'artist', // Tipo de ativo: artista
        },
      },
    });
    return response.data;
  },

  async create(artistData) {
    // Criar um novo artista
    const response = await api.post('/api/invoke/createAsset', {
      '@assetType': 'artist',
      '@key': artistData.key, // Chave única do artista
      name: artistData.name,  // Nome do artista
    });
    return response.data;
  },

  async update(artistData) {
    // Atualizar um artista existente
    const response = await api.post('/api/invoke/updateAsset', {
      '@assetType': 'artist',
      '@key': artistData.key,
      name: artistData.name,
    });
    return response.data;
  },

  async delete(key, cascade = false) {
    // Deletar um artista (com ou sem cascade)
    const response = await api.post('/api/invoke/deleteAsset', {
      '@assetType': 'artist',
      '@key': key,
      cascade,
    });
    return response.data;
  },

  async read(key) {
    // Obter detalhes de um artista específico
    const response = await api.post('/api/query/readAsset', {
      '@assetType': 'artist',
      '@key': key,
    });
    return response.data;
  },
};
