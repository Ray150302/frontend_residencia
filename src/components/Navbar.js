import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Importa los íconos
import logo from '../assets/logo.jpeg'; // Asegúrate de que esta ruta sea correcta

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <span className="text-white text-2xl font-bold">ECOTURISMO</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white hover:text-gray-300 flex items-center">
            <FaSignInAlt className="mr-2" /> Iniciar sesión
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300 flex items-center">
            <FaUserPlus className="mr-2" /> Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
