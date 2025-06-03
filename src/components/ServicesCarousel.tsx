import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const services = [
    {
      id: 1,
      image: service1,
      title: 'Exame de Vista Completo',
      description: 'Avaliação completa da saúde ocular e acuidade visual para diagnóstico preciso.'
    },
    {
      id: 2,
      image: service2,
      title: 'Tratamentos Especializados',
      description: 'Procedimentos avançados com equipamentos de última geração para diversas patologias oculares.'
    },
    {
      id: 3,
      image: service3,
      title: 'Cirurgia de Catarata',
      description: 'Procedimento moderno e seguro para restaurar a visão afetada pela catarata.'
    },
    {
      id: 4,
      image: service1,
      title: 'Tratamento de Glaucoma',
      description: 'Diagnóstico precoce e tratamento eficaz para prevenir a perda de visão causada pelo glaucoma.'
    },
    {
      id: 5,
      image: service2,
      title: 'Cirurgia Refrativa',
      description: 'Correção de miopia, hipermetropia e astigmatismo com técnicas modernas e eficientes.'
    },
    {
      id: 6,
      image: service3,
      title: 'Adaptação de Lentes de Contato',
      description: 'Avaliação especializada e adaptação de lentes de contato para diferentes necessidades visuais.'
    }
  ];

  return (
    <div className="py-12 bg-secondary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Nossos Serviços
        </h2>
        <div className="px-4 md:px-12">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                    <a 
                      href="#contato" 
                      className="mt-4 inline-block text-primary hover:text-primary-dark font-medium"
                    >
                      Saiba mais →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
