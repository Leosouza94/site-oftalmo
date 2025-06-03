import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const banners = [
    {
      id: 1,
      image: banner1,
      title: 'Visão Saudável',
      description: 'Cuidamos da sua visão com o que há de melhor em oftalmologia',
      buttonText: 'Agende sua Consulta',
      buttonLink: '#contato'
    },
    {
      id: 2,
      image: banner2,
      title: 'Tecnologia Avançada',
      description: 'Equipamentos modernos para diagnósticos precisos e tratamentos eficazes',
      buttonText: 'Conheça Nossa Clínica',
      buttonLink: '#sobre'
    },
    {
      id: 3,
      image: banner3,
      title: 'Atendimento Familiar',
      description: 'Cuidamos de toda a família com carinho e profissionalismo',
      buttonText: 'Nossos Serviços',
      buttonLink: '#servicos'
    }
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{banner.title}</h2>
                  <p className="text-lg md:text-xl text-white mb-6">{banner.description}</p>
                  <a 
                    href={banner.buttonLink} 
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    {banner.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainBanner;
