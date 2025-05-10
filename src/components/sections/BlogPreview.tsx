import React from 'react';
import { Link } from 'react-router-dom';

// Sample blog post data (in a real app, this would come from a database or API)
const blogPosts = [
  {
    id: 1,
    title: "Les bases du développement C#",
    category: "C#",
    date: "10 Mai 2025",
    image: "https://via.placeholder.com/800x500?text=C%23+Development",
    excerpt: "Découvrez les fondamentaux du développement en C# et pourquoi c'est un excellent langage pour débuter."
  },
  {
    id: 2,
    title: "Comment créer un site web responsive",
    category: "Web Development",
    date: "25 Avril 2025",
    image: "https://via.placeholder.com/800x500?text=Responsive+Web+Design",
    excerpt: "Apprenez les techniques essentielles pour créer des sites web qui s'adaptent parfaitement à tous les appareils."
  },
  {
    id: 3,
    title: "L'importance des tableaux de bord dans la prise de décision",
    category: "Business",
    date: "2 Avril 2025",
    image: "https://via.placeholder.com/800x500?text=Business+Dashboards",
    excerpt: "Comment les tableaux de bord bien conçus peuvent transformer la prise de décision dans votre entreprise."
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="blog-preview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Explorez mes derniers articles et tutoriels sur le développement, 
            les technologies et les meilleures pratiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={(post.id - 1) * 100}
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
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
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
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary inline-block">
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;