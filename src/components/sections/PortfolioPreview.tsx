import React from 'react';
import { Link } from 'react-router-dom';

// Sample project data (in a real app, this would come from a database or API)
const projects = [
  {
    id: 1,
    title: "MySCC Application",
    category: "Application WinForm",
    image: "https://via.placeholder.com/600x400?text=MySCC+Application",
    description: "Application de gestion développée en C# WinForm."
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Site Web",
    image: "https://via.placeholder.com/600x400?text=E-commerce+Platform",
    description: "Plateforme e-commerce complète avec système de paiement."
  },
  {
    id: 3,
    title: "Company Dashboard",
    category: "Tableau de Bord",
    image: "https://via.placeholder.com/600x400?text=Company+Dashboard",
    description: "Tableau de bord pour visualiser les données d'entreprise."
  }
];

const PortfolioPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="portfolio-preview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Découvrez mes projets récents et les solutions que j'ai développées 
            pour répondre aux besoins de mes clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              data-aos="fade-up"
              data-aos-delay={(project.id - 1) * 100}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <span className="bg-blue-600 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  to={`/portfolio/${project.id}`} 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                >
                  Voir détails
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary inline-block">
            Voir tous les projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;