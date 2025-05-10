import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

// Sample blog post data (in a real app, this would come from a database or API)
const blogPosts = [
  {
    id: 1,
    title: "Les bases du développement C#",
    category: "C#",
    date: "10 Mai 2025",
    author: "WILFRED DJIKIAKAM",
    image: "https://via.placeholder.com/800x500?text=C%23+Development",
    excerpt: "Découvrez les fondamentaux du développement en C# et pourquoi c'est un excellent langage pour débuter dans la programmation.",
    tags: ["C#", "Programmation", "Débutant"]
  },
  {
    id: 2,
    title: "Comment créer un site web responsive",
    category: "Web Development",
    date: "25 Avril 2025",
    author: "WILFRED DJIKIAKAM",
    image: "https://via.placeholder.com/800x500?text=Responsive+Web+Design",
    excerpt: "Apprenez les techniques essentielles pour créer des sites web qui s'adaptent parfaitement à tous les appareils, des mobiles aux grands écrans.",
    tags: ["HTML", "CSS", "Responsive", "Web Design"]
  },
  {
    id: 3,
    title: "L'importance des tableaux de bord dans la prise de décision",
    category: "Business",
    date: "2 Avril 2025",
    author: "WILFRED DJIKIAKAM",
    image: "https://via.placeholder.com/800x500?text=Business+Dashboards",
    excerpt: "Comment les tableaux de bord bien conçus peuvent transformer la prise de décision dans votre entreprise et améliorer vos résultats.",
    tags: ["Tableaux de bord", "Business Intelligence", "Analyse de données"]
  },
  {
    id: 4,
    title: "Optimiser les performances de vos applications WinForm",
    category: "C#",
    date: "15 Mars 2025",
    author: "WILFRED DJIKIAKAM",
    image: "https://via.placeholder.com/800x500?text=WinForm+Performance",
    excerpt: "Découvrez les meilleures pratiques et techniques avancées pour améliorer les performances de vos applications WinForm en C#.",
    tags: ["C#", "WinForm", "Performance", "Optimisation"]
  },
  {
    id: 5,
    title: "Sécuriser vos applications web contre les attaques courantes",
    category: "Web Development",
    date: "28 Février 2025",
    author: "WILFRED DJIKIAKAM",
    image: "https://via.placeholder.com/800x500?text=Web+Security",
    excerpt: "Un guide complet pour protéger vos applications web contre les vulnérabilités les plus courantes et assurer la sécurité de vos utilisateurs.",
    tags: ["Sécurité", "Web", "OWASP", "Cybersécurité"]
  },
  {
    id: 6,
    title: "L'automatisation des tâches pour améliorer la productivité",
    category: "Productivité",
    date: "10 Février 2025",
    author: "WILFRED DJIKIAKAM",
    image: "https://via.placeholder.com/800x500?text=Task+Automation",
    excerpt: "Comment l'automatisation des tâches répétitives peut libérer du temps pour la créativité et l'innovation dans votre entreprise.",
    tags: ["Automatisation", "Productivité", "Efficacité", "Business"]
  },
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Extract unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Explorez mes derniers articles sur le développement, les technologies et les meilleures pratiques.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8" data-aos="fade-up">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher des articles..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:w-1/3">
                <select
                  className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category === 'all' ? 'Toutes les catégories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                          <span className="text-sm font-medium text-blue-800">WD</span>
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                      >
                        Lire plus
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
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun article trouvé</h3>
              <p className="text-gray-600 mb-6">
                Aucun article ne correspond à vos critères de recherche.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Article à la Une</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full">
                <img 
                  src="https://via.placeholder.com/800x800?text=Featured+Article"
                  alt="Les bases du développement C#" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium inline-block mb-4 w-fit">
                  C#
                </span>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Les bases du développement C#
                </h3>
                <p className="text-gray-600 mb-6">
                  Découvrez les fondamentaux du développement en C# et pourquoi c'est un excellent 
                  langage pour débuter dans la programmation. Cet article guide les débutants à travers
                  les concepts essentiels et les meilleures pratiques.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-blue-800">WD</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">WILFRED DJIKIAKAM</p>
                    <p className="text-gray-500 text-sm">10 Mai 2025</p>
                  </div>
                </div>
                <Link 
                  to="/blog/1" 
                  className="btn-primary inline-block self-start"
                >
                  Lire l'article complet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100" data-aos="fade-up">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Abonnez-vous à la Newsletter</h2>
              <p className="text-gray-600">
                Recevez mes derniers articles, tutoriels et conseils directement dans votre boîte mail.
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors"
              >
                S'abonner
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4 text-center">
              Je ne partage jamais vos informations. Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;