// src/router/AppRouter.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../views/pages/Home';
import ArtistsPage from '../views/pages/ArtistsPage';
import AlbumsPage from '../views/pages/AlbumsPage';
import SongsPage from '../views/pages/SongsPage';
import PlaylistsPage from '../views/pages/PlaylistsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'artists', element: <ArtistsPage /> },
      { path: 'albums', element: <AlbumsPage /> },
      { path: 'songs', element: <SongsPage /> },
      { path: 'playlists', element: <PlaylistsPage /> }
    ]
  }
]);

export default router;
