import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Consulta de Rotina'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio bem-sucedido
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });
    
    // Limpar formulário após envio
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: 'Consulta de Rotina'
    });
    
    // Em uma implementação real, aqui seria feita a integração com backend
  };

  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta oftalmológica.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div id="contato" className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
            Entre em Contato
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Formulário de Contato */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Serviço Desejado
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="Consulta de Rotina">Consulta de Rotina</option>
                      <option value="Exame de Vista">Exame de Vista</option>
                      <option value="Tratamento de Glaucoma">Tratamento de Glaucoma</option>
                      <option value="Cirurgia de Catarata">Cirurgia de Catarata</option>
                      <option value="Cirurgia Refrativa">Cirurgia Refrativa</option>
                      <option value="Adaptação de Lentes de Contato">Adaptação de Lentes de Contato</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
            
            {/* Informações de Contato */}
            <div className="bg-primary text-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Endereço</h4>
                  <p>Av. Paulista, 1000 - Bela Vista</p>
                  <p>São Paulo - SP, 01310-100</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábados: 8h às 13h</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Contato</h4>
                  <p>Telefone: (11) 3000-0000</p>
                  <p>E-mail: contato@clinicaoftalmo.com.br</p>
                </div>
                
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    Fale pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão flutuante do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default ContactForm;
