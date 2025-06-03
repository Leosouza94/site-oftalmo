import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Paciente',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      stars: 5,
      text: 'Fiquei encantada com o atendimento da clínica. Os oftalmologistas são extremamente atenciosos e competentes. Minha consulta foi completa e esclarecedora. Recomendo a todos!'
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Paciente',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      stars: 5,
      text: 'Excelente atendimento! A clínica é moderna, limpa e organizada. Os médicos são muito profissionais e explicam todo o diagnóstico detalhadamente. Estou muito satisfeito com os óculos que adquiri após a consulta.'
    },
    {
      id: 3,
      name: 'Mariana Costa',
      role: 'Paciente',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      stars: 5,
      text: 'Minha experiência foi incrível! Desde a recepção até o pós-atendimento, tudo foi perfeito. O ambiente é acolhedor e os profissionais são extremamente qualificados. A cirurgia de catarata foi um sucesso. Já indiquei para toda minha família.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          O Que Nossos Pacientes Dizem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-secondary-50 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-primary opacity-20 text-4xl" />
                <p className="text-gray-700 italic px-6 py-2">
                  {testimonial.text}
                </p>
                <FaQuoteRight className="absolute bottom-0 right-0 text-primary opacity-20 text-4xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
