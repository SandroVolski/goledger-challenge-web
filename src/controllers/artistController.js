import { artistService } from '../services/artistService';
import { Artist } from '../models/Artist'; // Modelo para estruturar dados (opcional)

export const artistController = {
  async listArtists() {
    const data = await artistService.getAll();
    return data.map(item => new Artist(item)); // Mapeia os dados para o modelo (opcional)
  },

  async createArtist(artistData) {
    const created = await artistService.create(artistData);
    return new Artist(created);
  },

  async updateArtist(artistData) {
    const updated = await artistService.update(artistData);
    return new Artist(updated);
  },

  async deleteArtist(key, cascade = false) {
    return await artistService.delete(key, cascade);
  },

  async readArtist(key) {
    const artist = await artistService.read(key);
    return new Artist(artist);
  },
};
