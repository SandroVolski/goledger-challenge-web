import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./views/components/Sidebar";
import Header from "./views/components/Header";
import Home from "./views/pages/Home";
import ArtistsPage from "./views/pages/ArtistsPage";
import SongsPage from "./views/pages/SongsPage";
import PlaylistsPage from "./views/pages/PlaylistsPage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar fixa */}
        <Sidebar />

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col ml-64"> {/* Adicionado `ml-64` */}
          <Header />
          <main className="pt-16 px-6 bg-gray-100 h-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/songs" element={<SongsPage />} />
              <Route path="/playlists" element={<PlaylistsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
