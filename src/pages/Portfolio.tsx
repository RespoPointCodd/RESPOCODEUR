import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample project data (in a real app, this would come from a database or API)
const projects = [
  {
    id: 1,
    title: "MySCC Application",
    category: "Application WinForm",
    image: "https://via.placeholder.com/800x600?text=MySCC+Application",
    description: "Application de gestion complète développée en C# WinForm qui automatise les processus métier et améliore l'efficacité opérationnelle.",
    technologies: ["C#", "WinForms", "SQL Server", ".NET Framework"],
    year: 2023
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Site Web",
    image: "https://via.placeholder.com/800x600?text=E-commerce+Platform",
    description: "Plateforme e-commerce complète avec système de paiement intégré, gestion des produits et interface administrateur.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    year: 2022
  },
  {
    id: 3,
    title: "Company Dashboard",
    category: "Tableau de Bord",
    image: "https://via.placeholder.com/800x600?text=Company+Dashboard",
    description: "Tableau de bord interactif pour visualiser et analyser les données d'entreprise avec des graphiques et rapports en temps réel.",
    technologies: ["C#", ".NET", "SQL", "Charts.js"],
    year: 2023
  },
  {
    id: 4,
    title: "Professional CV Platform",
    category: "Site Web",
    image: "https://via.placeholder.com/800x600?text=CV+Platform",
    description: "Plateforme en ligne permettant aux utilisateurs de créer des CV professionnels avec différents modèles et options de personnalisation.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    year: 2022
  },
  {
    id: 5,
    title: "Inventory Management",
    category: "Application WinForm",
    image: "https://via.placeholder.com/800x600?text=Inventory+Management",
    description: "Système de gestion d'inventaire qui permet de suivre les stocks, les commandes et les fournisseurs.",
    technologies: ["C#", "WinForms", "MySQL", ".NET"],
    year: 2022
  },
  {
    id: 6,
    title: "Restaurant Website",
    category: "Site Web",
    image: "https://via.placeholder.com/800x600?text=Restaurant+Website",
    description: "Site web responsive pour un restaurant avec menu en ligne, réservations et informations de contact.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    year: 2021
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Portfolio</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Découvrez mes projets récents et les solutions que j'ai développées.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4" data-aos="fade-up">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('Application WinForm')} 
              className={`px-6 py-2 rounded-full ${filter === 'Application WinForm' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              Applications WinForm
            </button>
            <button 
              onClick={() => setFilter('Site Web')} 
              className={`px-6 py-2 rounded-full ${filter === 'Site Web' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              Sites Web
            </button>
            <button 
              onClick={() => setFilter('Tableau de Bord')} 
              className={`px-6 py-2 rounded-full ${filter === 'Tableau de Bord' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              Tableaux de Bord
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider inline-block mb-2 w-fit">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{project.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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

          {/* No Projects Found */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-600">
                Aucun projet ne correspond à ce filtre pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Projet Phare</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
            <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Découvrez mon projet le plus significatif et son impact sur les utilisateurs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <img 
                src="https://via.placeholder.com/800x600?text=MySCC+Application"
                alt="MySCC Application" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">MySCC Application</h3>
              <p className="text-gray-700 mb-6">
                MySCC est une application de gestion complète développée en C# WinForm qui 
                révolutionne la façon dont les entreprises camerounaises gèrent leurs opérations quotidiennes.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Caractéristiques clés :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Interface utilisateur intuitive et conviviale</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Système complet de gestion des données</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Rapports détaillés et tableaux de bord personnalisables</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Automatisation des processus métier</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Système de sécurité robuste avec gestion des rôles</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Technologies utilisées :</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">C#</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">WinForms</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">SQL Server</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">.NET Framework</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">Entity Framework</span>
                </div>
              </div>
              <Link 
                to="/portfolio/1" 
                className="btn-primary inline-block"
              >
                Découvrir MySCC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
              Un Projet en Tête ?
            </h2>
            <p className="text-lg mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
              Discutons de votre projet et découvrez comment je peux vous aider à le concrétiser.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;