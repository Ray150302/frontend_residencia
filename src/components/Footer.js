import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Ecoturismo. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
