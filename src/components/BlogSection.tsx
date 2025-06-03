import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Como manter a saúde dos seus olhos',
      excerpt: 'Descubra as melhores práticas para manter seus olhos saudáveis e prevenir problemas visuais com nossa rotina recomendada de cuidados diários.',
      author: 'Dr. Carlos Santos',
      date: '15 de maio de 2025',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Saúde Ocular'
    },
    {
      id: 2,
      title: 'Mitos e verdades sobre cirurgia refrativa',
      excerpt: 'Você conhece os fatos sobre a cirurgia refrativa? Neste artigo, desmistificamos as informações incorretas e explicamos como o procedimento realmente funciona.',
      author: 'Dra. Renata Oliveira',
      date: '10 de maio de 2025',
      image: 'https://images.unsplash.com/photo-1581585095852-97958afb5b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Cirurgias'
    },
    {
      id: 3,
      title: 'A importância dos exames oftalmológicos regulares',
      excerpt: 'Saiba por que as consultas periódicas ao oftalmologista são fundamentais para manter a saúde visual e prevenir problemas mais sérios no futuro.',
      author: 'Dra. Mariana Costa',
      date: '5 de maio de 2025',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Prevenção'
    }
  ];

  return (
    <div id="blog" className="py-16 bg-secondary-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Blog e Novidades
          </h2>
          <a 
            href="/blog" 
            className="hidden md:inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            Ver todos os artigos
            <FaArrowRight className="ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-primary-50 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FaUser className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <a 
                  href={`/blog/${post.id}`} 
                  className="inline-block text-primary hover:text-primary-dark font-medium"
                >
                  Ler mais →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href="/blog" 
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            Ver todos os artigos
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
