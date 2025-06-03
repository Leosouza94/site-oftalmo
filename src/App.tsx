import Header from './components/Header';
import MainBanner from './components/MainBanner';
import ServicesCarousel from './components/ServicesCarousel';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PartnersSection from './components/PartnersSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainBanner />
        
        {/* Sobre Nós */}
        <section id="sobre" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Sobre Nossa Clínica
                </h2>
                <p className="text-gray-700 mb-4">
                  Bem-vindo à Clínica Oftalmológica, onde oferecemos tratamentos oftalmológicos de alta qualidade com profissionais experientes e tecnologia avançada. Nossa missão é proporcionar saúde visual e cuidados completos para toda a família.
                </p>
                <p className="text-gray-700 mb-4">
                  Fundada em 2010, nossa clínica tem se destacado pela excelência no atendimento e pelos resultados que transformam a vida de nossos pacientes. Contamos com uma equipe de oftalmologistas altamente qualificados e comprometidos com o seu bem-estar visual.
                </p>
                <p className="text-gray-700 mb-6">
                  Nosso ambiente foi projetado para oferecer o máximo de conforto e tranquilidade durante o seu tratamento. Utilizamos equipamentos modernos e seguimos rigorosos protocolos de biossegurança.
                </p>
                <a 
                  href="#contato" 
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Agende sua Consulta
                </a>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Equipe da Clínica Oftalmológica" 
                    className="relative z-10 rounded-lg shadow-xl w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Serviços */}
        <section id="servicos">
          <ServicesCarousel />
        </section>
        
        {/* Convênios */}
        <section id="convenios">
          <PartnersSection />
        </section>
        
        {/* Depoimentos */}
        <Testimonials />
        
        {/* Blog */}
        <BlogSection />
        
        {/* Contato */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
