import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      sidebar: {
        home: "Home",
        artists: "Artists",
        songs: "Songs",
        playlists: "Playlists",
        settings: "Settings",
        lightMode: "Light Mode",
        darkMode: "Dark Mode",
        language: "Language",
        english: "English",
        portuguese: "Portuguese",
      },
      songs: {
        title: "Songs",
        addSong: "Add Song",
        delete: "Delete",
        name: "Song Name",
        artist: "Artist",
        album: "Album",
      },
    },
  },
  pt: {
    translation: {
      sidebar: {
        home: "Início",
        artists: "Artistas",
        songs: "Músicas",
        playlists: "Playlists",
        settings: "Configurações",
        lightMode: "Modo Claro",
        darkMode: "Modo Escuro",
        language: "Idioma",
        english: "Inglês",
        portuguese: "Português",
      },
      songs: {
        title: "Músicas",
        addSong: "Adicionar Música",
        delete: "Excluir",
        name: "Nome da Música",
        artist: "Artista",
        album: "Álbum",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // Idioma padrão
  fallbackLng: "en", // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já protege contra XSS
  },
});

export default i18n;
