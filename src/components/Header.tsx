import { useState } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta oftalmológica.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Clínica<span className="text-secondary">Oftalmo</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary font-medium">Início</a>
            <a href="/#sobre" className="text-gray-700 hover:text-primary font-medium">Sobre</a>
            <a href="/#servicos" className="text-gray-700 hover:text-primary font-medium">Serviços</a>
            <a href="/unidades" className="text-gray-700 hover:text-primary font-medium">Unidades</a>
            <a href="/projetos-sociais" className="text-gray-700 hover:text-primary font-medium">Projetos Sociais</a>
            <a href="/nossos-projetos" className="text-gray-700 hover:text-primary font-medium">Nossos Projetos</a>
            <a href="/#blog" className="text-gray-700 hover:text-primary font-medium">Blog</a>
            <a href="/#contato" className="text-gray-700 hover:text-primary font-medium">Contato</a>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <FaPhone className="text-primary mr-2" />
              <span className="text-gray-700">(11) 3000-0000</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              <FaWhatsapp className="mr-2" />
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Início</a>
              <a href="/#sobre" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Sobre</a>
              <a href="/#servicos" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Serviços</a>
              <a href="/unidades" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Unidades</a>
              <a href="/projetos-sociais" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Projetos Sociais</a>
              <a href="/nossos-projetos" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Nossos Projetos</a>
              <a href="/#blog" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Blog</a>
              <a href="/#contato" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>Contato</a>
            </nav>
            <div className="mt-4 flex flex-col space-y-3">
              <div className="flex items-center">
                <FaPhone className="text-primary mr-2" />
                <span className="text-gray-700">(11) 3000-0000</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition duration-300"
              >
                <FaWhatsapp className="mr-2" />
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
