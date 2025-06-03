import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta oftalmológica.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre a Clínica */}
          <div>
            <h3 className="text-xl font-bold mb-4">Clínica Oftalmológica</h3>
            <p className="mb-4">
              Oferecemos tratamentos oftalmológicos de alta qualidade com profissionais experientes e tecnologia avançada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary-100 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary-100 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary-100 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary-100 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-secondary-100 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary-100 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-secondary-100 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-secondary-100 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-secondary-100 transition-colors">Exame de Vista</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-100 transition-colors">Cirurgia de Catarata</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-100 transition-colors">Tratamento de Glaucoma</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-100 transition-colors">Cirurgia Refrativa</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-100 transition-colors">Lentes de Contato</a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                <span>contato@clinicaoftalmo.com.br</span>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábados: 8h às 13h</p>
                </div>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-2"
                >
                  <FaWhatsapp className="mr-2" />
                  Fale pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-primary-dark py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Clínica Oftalmológica. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">
              Desenvolvido com <span className="text-red-500">❤</span> por Sua Empresa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
