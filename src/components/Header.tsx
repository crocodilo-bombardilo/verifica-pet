import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.webp';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-3 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Verifica Pet" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-secondary font-medium hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/" className="text-secondary font-medium hover:text-primary transition-colors">
            Kit Verifica Pet
          </Link>
          <Link to="/tags" className="text-secondary font-medium hover:text-primary transition-colors">
            Tag de Identificação e Rastreio
          </Link>
          <a
            href="https://app.verifica.pet/"
            className="bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Entrar
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <div className="container-custom flex flex-col space-y-4">
            <Link
              to="/"
              className="text-secondary font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/"
              className="text-secondary font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kit Verifica Pet
            </Link>
            <Link
              to="/tags"
              className="text-secondary font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tag de Identificação e Rastreio
            </Link>
            <a
              href="https://app.verifica.pet/"
              className="bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors inline-block w-max"
            >
              Entrar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
