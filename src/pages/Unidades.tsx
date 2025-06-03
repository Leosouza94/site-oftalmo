import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWheelchair, FaParking, FaBusAlt, FaWifi } from 'react-icons/fa';

const Unidades = () => {
  const unidades = [
    {
      id: 1,
      nome: 'Unidade Paulista',
      endereco: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100',
      telefone: '(11) 3000-0000',
      email: 'paulista@clinicaoftalmo.com.br',
      horario: 'Segunda a Sexta: 8h às 19h | Sábados: 8h às 13h',
      imagem: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      facilidades: ['Acessibilidade', 'Estacionamento', 'Próximo ao metrô', 'Wi-Fi gratuito'],
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976469797574!2d-46.65390548502164!3d-23.563203284683526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1622824792462!5m2!1spt-BR!2sbr'
    },
    {
      id: 2,
      nome: 'Unidade Moema',
      endereco: 'Alameda dos Maracatins, 780 - Moema, São Paulo - SP, 04089-001',
      telefone: '(11) 3001-0001',
      email: 'moema@clinicaoftalmo.com.br',
      horario: 'Segunda a Sexta: 8h às 19h | Sábados: 8h às 13h',
      imagem: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      facilidades: ['Acessibilidade', 'Estacionamento', 'Wi-Fi gratuito'],
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2982323946225!2d-46.66784168502105!3d-23.59373478466963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a26e89aca8f%3A0x6b6e2a4a9f9a7a9a!2sAlameda%20dos%20Maracatins%2C%20780%20-%20Moema%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004089-001!5e0!3m2!1spt-BR!2sbr!4v1622824892462!5m2!1spt-BR!2sbr'
    },
    {
      id: 3,
      nome: 'Unidade Tatuapé',
      endereco: 'Rua Tuiuti, 2500 - Tatuapé, São Paulo - SP, 03307-000',
      telefone: '(11) 3002-0002',
      email: 'tatuape@clinicaoftalmo.com.br',
      horario: 'Segunda a Sexta: 8h às 19h | Sábados: 8h às 13h',
      imagem: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      facilidades: ['Acessibilidade', 'Estacionamento', 'Próximo ao metrô', 'Wi-Fi gratuito'],
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1234567890123!2d-46.56789012345678!3d-23.54321098765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f8c61d9d8ab%3A0x9a9f5c9c9b9a9a9a!2sRua%20Tuiuti%2C%202500%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003307-000!5e0!3m2!1spt-BR!2sbr!4v1622824992462!5m2!1spt-BR!2sbr'
    }
  ];

  const getFacilidadeIcon = (facilidade) => {
    switch (facilidade) {
      case 'Acessibilidade':
        return <FaWheelchair className="mr-2 text-primary" />;
      case 'Estacionamento':
        return <FaParking className="mr-2 text-primary" />;
      case 'Próximo ao metrô':
        return <FaBusAlt className="mr-2 text-primary" />;
      case 'Wi-Fi gratuito':
        return <FaWifi className="mr-2 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <main>
        {/* Banner */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Unidades</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Estamos presentes em diferentes regiões do Brasil para oferecer atendimento oftalmológico de qualidade perto de você.
            </p>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Estrutura Moderna e Acolhedora
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Todas as nossas unidades contam com equipamentos de última geração, ambientes confortáveis e equipe altamente qualificada para proporcionar a melhor experiência aos nossos pacientes.
              </p>
              <p className="text-lg text-gray-700">
                Escolha a unidade mais próxima de você e agende sua consulta. Estamos prontos para cuidar da sua saúde visual com excelência e dedicação.
              </p>
            </div>
          </div>
        </section>

        {/* Unidades */}
        <section className="py-16 bg-secondary-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
              Conheça Nossas Unidades
            </h2>
            
            <div className="space-y-16">
              {unidades.map((unidade) => (
                <div key={unidade.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full">
                      <img 
                        src={unidade.imagem} 
                        alt={`Unidade ${unidade.nome}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {unidade.nome}
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                          <span>{unidade.endereco}</span>
                        </div>
                        <div className="flex items-center">
                          <FaPhone className="text-primary mr-3 flex-shrink-0" />
                          <span>{unidade.telefone}</span>
                        </div>
                        <div className="flex items-center">
                          <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
                          <span>{unidade.email}</span>
                        </div>
                        <div className="flex items-start">
                          <FaClock className="text-primary mt-1 mr-3 flex-shrink-0" />
                          <span>{unidade.horario}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-2">Facilidades:</h4>
                        <div className="flex flex-wrap gap-3">
                          {unidade.facilidades.map((facilidade, index) => (
                            <div key={index} className="flex items-center bg-secondary-50 px-3 py-1 rounded-full">
                              {getFacilidadeIcon(facilidade)}
                              <span>{facilidade}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <a 
                        href="/#contato" 
                        className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                      >
                        Agendar Consulta
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="font-bold text-gray-800 mb-4">Como Chegar:</h4>
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <iframe 
                        src={unidade.mapa} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title={`Mapa da unidade ${unidade.nome}`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Unidades;
