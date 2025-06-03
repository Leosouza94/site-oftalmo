import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHandHoldingHeart, FaEye, FaUsers, FaGraduationCap, FaHospital } from 'react-icons/fa';

const ProjetosSociais = () => {
  const projetos = [
    {
      id: 1,
      title: 'Visão para Todos',
      description: 'Programa de atendimento oftalmológico gratuito para pessoas em situação de vulnerabilidade social. Realizamos consultas, exames e fornecemos óculos gratuitamente para quem não tem condições de arcar com os custos.',
      icon: <FaHandHoldingHeart className="text-5xl text-primary mb-4" />,
      image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Saúde Ocular nas Escolas',
      description: 'Levamos profissionais às escolas públicas para realizar triagem visual em crianças e adolescentes, identificando problemas de visão que podem afetar o aprendizado e encaminhando para tratamento adequado.',
      icon: <FaGraduationCap className="text-5xl text-primary mb-4" />,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Terceira Idade Enxergando Melhor',
      description: 'Programa dedicado aos idosos, com foco na prevenção e tratamento de doenças oculares comuns na terceira idade, como catarata e glaucoma, melhorando sua qualidade de vida e independência.',
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      image: 'https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Cirurgias Solidárias',
      description: 'Realizamos cirurgias oftalmológicas gratuitas para pessoas de baixa renda com problemas graves de visão. Contamos com uma equipe de médicos voluntários e parcerias com hospitais.',
      icon: <FaHospital className="text-5xl text-primary mb-4" />,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      <Header />
      <main>
        {/* Banner */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projetos Sociais</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Acreditamos que a saúde visual é um direito de todos. Conheça nossas iniciativas para levar atendimento oftalmológico de qualidade a quem mais precisa.
            </p>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FaEye className="text-6xl text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nosso Compromisso Social
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Na Clínica Oftalmológica, entendemos que nossa missão vai além do atendimento em nossas unidades. Temos um compromisso com a sociedade e trabalhamos ativamente para promover a saúde visual em comunidades carentes e grupos vulneráveis.
              </p>
              <p className="text-lg text-gray-700">
                Através de nossas iniciativas sociais, já atendemos mais de 5.000 pessoas e realizamos mais de 1.200 cirurgias gratuitas. Contamos com o apoio de parceiros e voluntários que compartilham nossa visão de um mundo onde todos possam enxergar melhor.
              </p>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="py-16 bg-secondary-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
              Conheça Nossos Projetos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projetos.map((projeto) => (
                <div key={projeto.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={projeto.image} 
                      alt={projeto.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-center">
                      {projeto.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-center text-primary mb-4">
                      {projeto.title}
                    </h3>
                    <p className="text-gray-700">
                      {projeto.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Participar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Como Você Pode Ajudar
              </h2>
              <p className="text-lg text-gray-700 mb-10">
                Existem diversas formas de contribuir com nossos projetos sociais e fazer parte dessa transformação na vida de muitas pessoas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Seja Voluntário</h3>
                  <p className="text-gray-700">
                    Profissionais da saúde, estudantes e pessoas com habilidades administrativas podem doar seu tempo e conhecimento.
                  </p>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Faça uma Doação</h3>
                  <p className="text-gray-700">
                    Contribuições financeiras nos ajudam a adquirir equipamentos, medicamentos e materiais necessários.
                  </p>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Divulgue Nosso Trabalho</h3>
                  <p className="text-gray-700">
                    Compartilhe nossas iniciativas em suas redes sociais e ajude a alcançar mais pessoas que precisam.
                  </p>
                </div>
              </div>
              
              <a 
                href="/#contato" 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300 mt-12"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjetosSociais;
