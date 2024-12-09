import React from "react";
import { FaHome, FaMusic, FaUsers, FaFolder } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="w-64 bg-gray-900 text-gray-200 h-screen fixed z-10">
      {/* Logo */}
      <div className="p-4 text-xl font-bold bg-gray-800 text-white">
        <span className="text-indigo-500">SoundLedger</span>
      </div>

      {/* Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/"
          className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition"
        >
          <FaHome className="mr-3" /> {t("sidebar.home")}
        </Link>
        <Link
          to="/artists"
          className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition"
        >
          <FaUsers className="mr-3" /> {t("sidebar.artists")}
        </Link>
        <Link
          to="/songs"
          className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition"
        >
          <FaMusic className="mr-3" /> {t("sidebar.songs")}
        </Link>
        <Link
          to="/playlists"
          className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition"
        >
          <FaFolder className="mr-3" /> {t("sidebar.playlists")}
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
