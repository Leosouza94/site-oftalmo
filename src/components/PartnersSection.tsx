//import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Amil',
      logo: 'https://via.placeholder.com/150x80?text=Amil',
      alt: 'Logo Amil'
    },
    {
      id: 2,
      name: 'Unimed',
      logo: 'https://via.placeholder.com/150x80?text=Unimed',
      alt: 'Logo Unimed'
    },
    {
      id: 3,
      name: 'Bradesco Saúde',
      logo: 'https://via.placeholder.com/150x80?text=Bradesco',
      alt: 'Logo Bradesco Saúde'
    },
    {
      id: 4,
      name: 'SulAmérica',
      logo: 'https://via.placeholder.com/150x80?text=SulAmerica',
      alt: 'Logo SulAmérica'
    },
    {
      id: 5,
      name: 'Porto Seguro',
      logo: 'https://via.placeholder.com/150x80?text=Porto+Seguro',
      alt: 'Logo Porto Seguro'
    },
    {
      id: 6,
      name: 'NotreDame Intermédica',
      logo: 'https://via.placeholder.com/150x80?text=NotreDame',
      alt: 'Logo NotreDame Intermédica'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Convênios Aceitos
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-24"
            >
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className="max-h-16 max-w-full"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Trabalhamos com os principais convênios do mercado. 
            Entre em contato para verificar cobertura específica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
