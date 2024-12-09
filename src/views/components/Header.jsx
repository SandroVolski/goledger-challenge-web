import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white border-b border-gray-300 fixed top-0 left-64 right-0 z-10">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Barra de busca centralizada */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder={t("Pesquisar")}
            className="w-1/2 p-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Perfil */}
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-700">Tom Cook</span>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
