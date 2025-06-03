import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLightbulb, FaChartLine, FaHeartbeat, FaGlasses, FaRegLightbulb } from 'react-icons/fa';

const NossosProjetos = () => {
  const projetos = [
    {
      id: 1,
      title: 'Tecnologia em Diagnóstico Ocular',
      description: 'Investimos constantemente em equipamentos de última geração para diagnósticos mais precisos e tratamentos menos invasivos. Nossa clínica conta com tomografia de coerência óptica (OCT), microscópios especializados e sistemas de mapeamento da córnea.',
      status: 'Em andamento',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaLightbulb className="text-5xl text-primary mb-4" />
    },
    {
      id: 2,
      title: 'Centro de Excelência em Cirurgia Refrativa',
      description: 'Estamos desenvolvendo um centro especializado em cirurgias refrativas com tecnologia de ponta, oferecendo correção de miopia, hipermetropia e astigmatismo com técnicas minimamente invasivas e recuperação rápida.',
      status: 'Em implementação',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaHeartbeat className="text-5xl text-primary mb-4" />
    },
    {
      id: 3,
      title: 'Pesquisa em Tratamentos para Degeneração Macular',
      description: 'Em parceria com universidades e centros de pesquisa, estamos investindo em estudos sobre novos tratamentos para degeneração macular relacionada à idade, uma das principais causas de perda de visão em idosos.',
      status: 'Em desenvolvimento',
      image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaChartLine className="text-5xl text-primary mb-4" />
    },
    {
      id: 4,
      title: 'Óculos Inteligentes para Baixa Visão',
      description: 'Estamos desenvolvendo, em parceria com empresas de tecnologia, óculos inteligentes que auxiliam pessoas com baixa visão a terem maior autonomia no dia a dia, utilizando realidade aumentada e inteligência artificial.',
      status: 'Fase de testes',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: <FaGlasses className="text-5xl text-primary mb-4" />
    }
  ];

  return (
    <div>
      <Header />
      <main>
        {/* Banner */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Projetos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça as iniciativas que estamos desenvolvendo para revolucionar o cuidado com a saúde ocular e proporcionar tratamentos cada vez mais eficazes.
            </p>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FaRegLightbulb className="text-6xl text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Inovação e Excelência
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Na Clínica Oftalmológica, acreditamos que a inovação constante é essencial para oferecer o melhor tratamento aos nossos pacientes. Por isso, investimos em projetos que combinam tecnologia de ponta, pesquisa científica e atendimento humanizado.
              </p>
              <p className="text-lg text-gray-700">
                Nossos projetos são desenvolvidos por equipes multidisciplinares, que incluem oftalmologistas, engenheiros, pesquisadores e especialistas em tecnologia, sempre com o objetivo de melhorar a qualidade de vida das pessoas através da saúde visual.
              </p>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="py-16 bg-secondary-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
              Projetos em Desenvolvimento
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
                    <div className="mb-4 flex justify-center">
                      <span className="inline-block bg-primary-100 text-primary text-sm font-medium px-3 py-1 rounded-full">
                        {projeto.status}
                      </span>
                    </div>
                    <p className="text-gray-700">
                      {projeto.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parcerias */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Nossas Parcerias
              </h2>
              <p className="text-lg text-gray-700 mb-10">
                Desenvolvemos nossos projetos em colaboração com instituições renomadas, unindo conhecimento e recursos para alcançar resultados excepcionais.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <div className="bg-secondary-50 p-6 rounded-lg h-32 flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/150x80?text=Universidade" 
                    alt="Logo Universidade" 
                    className="max-h-16"
                  />
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg h-32 flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/150x80?text=Instituto" 
                    alt="Logo Instituto de Pesquisa" 
                    className="max-h-16"
                  />
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg h-32 flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/150x80?text=Tech+Company" 
                    alt="Logo Empresa de Tecnologia" 
                    className="max-h-16"
                  />
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg h-32 flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/150x80?text=Hospital" 
                    alt="Logo Hospital" 
                    className="max-h-16"
                  />
                </div>
              </div>
              
              <a 
                href="/#contato" 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300 mt-12"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NossosProjetos;
