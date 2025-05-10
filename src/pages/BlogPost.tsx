import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Tag, Calendar, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// Sample blog post data (in a real app, this would come from a database or API)
const blogPostsData = [
  {
    id: 1,
    title: "Les bases du développement C#",
    category: "C#",
    date: "10 Mai 2025",
    author: "WILFRED DJIKIAKAM",
    image: "https://via.placeholder.com/1200x600?text=C%23+Development",
    readTime: "8 min",
    tags: ["C#", "Programmation", "Débutant"],
    content: `
      <h2>Introduction au C#</h2>
      <p>C# (prononcé "C sharp") est un langage de programmation moderne, orienté objet et de type sécurisé développé par Microsoft. Il fait partie de la plateforme .NET et est largement utilisé pour développer des applications de bureau, des applications web, des jeux et bien plus encore.</p>
      
      <p>Que vous soyez un débutant complet en programmation ou que vous veniez d'un autre langage, C# offre une syntaxe claire et une courbe d'apprentissage relativement douce qui en fait un excellent choix pour commencer.</p>
      
      <h2>Pourquoi choisir C# ?</h2>
      <p>Voici quelques raisons pour lesquelles C# est un excellent langage à apprendre :</p>
      
      <ul>
        <li><strong>Polyvalent</strong> : Utilisez C# pour développer presque n'importe quel type d'application.</li>
        <li><strong>Soutenu par Microsoft</strong> : Bénéficiez d'outils de développement puissants comme Visual Studio.</li>
        <li><strong>Grande communauté</strong> : Accédez à une vaste communauté et à de nombreuses ressources d'apprentissage.</li>
        <li><strong>Opportunités d'emploi</strong> : Les développeurs C# sont très demandés sur le marché du travail.</li>
        <li><strong>Moderne et évolutif</strong> : C# continue d'évoluer avec de nouvelles fonctionnalités ajoutées régulièrement.</li>
      </ul>
      
      <h2>Premiers pas avec C#</h2>
      <p>Pour commencer avec C#, vous devez d'abord installer les outils nécessaires :</p>
      
      <ol>
        <li>Téléchargez et installez le <a href="https://dotnet.microsoft.com/download" target="_blank">.NET SDK</a> (Software Development Kit).</li>
        <li>Choisissez un éditeur de code ou un IDE (Environnement de Développement Intégré). Visual Studio Community Edition est gratuit et très puissant pour C#.</li>
        <li>Créez votre premier projet "Hello World".</li>
      </ol>
      
      <h3>Votre premier programme C#</h3>
      <p>Voici à quoi ressemble un programme C# simple qui affiche "Hello, World!" :</p>
      
      <pre><code>
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.ReadLine();
        }
    }
}
      </code></pre>
      
      <p>Expliquons ce code ligne par ligne :</p>
      
      <ul>
        <li><code>using System;</code> - Cette ligne importe l'espace de noms System, qui contient des fonctionnalités fondamentales.</li>
        <li><code>namespace HelloWorld</code> - Définit un espace de noms pour notre code.</li>
        <li><code>class Program</code> - Définit une classe nommée Program.</li>
        <li><code>static void Main(string[] args)</code> - Le point d'entrée de notre application.</li>
        <li><code>Console.WriteLine("Hello, World!");</code> - Affiche le texte à l'écran.</li>
        <li><code>Console.ReadLine();</code> - Attend que l'utilisateur appuie sur Entrée avant de fermer la console.</li>
      </ul>
      
      <h2>Concepts fondamentaux en C#</h2>
      
      <h3>Variables et types de données</h3>
      <p>En C#, vous devez déclarer le type de chaque variable. Voici les types de base :</p>
      
      <ul>
        <li><code>int</code> - Pour les nombres entiers</li>
        <li><code>double</code> / <code>float</code> - Pour les nombres décimaux</li>
        <li><code>bool</code> - Pour les valeurs booléennes (true/false)</li>
        <li><code>char</code> - Pour un seul caractère</li>
        <li><code>string</code> - Pour les chaînes de caractères</li>
      </ul>
      
      <p>Exemple de déclaration de variables :</p>
      
      <pre><code>
int age = 25;
double price = 19.99;
bool isAvailable = true;
char grade = 'A';
string name = "John Doe";
      </code></pre>
      
      <h3>Structures conditionnelles</h3>
      <p>Les structures conditionnelles vous permettent d'exécuter différents blocs de code selon certaines conditions :</p>
      
      <pre><code>
int age = 20;

if (age >= 18)
{
    Console.WriteLine("Vous êtes majeur.");
}
else
{
    Console.WriteLine("Vous êtes mineur.");
}
      </code></pre>
      
      <h3>Boucles</h3>
      <p>Les boucles permettent d'exécuter un bloc de code plusieurs fois :</p>
      
      <pre><code>
// Boucle for
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"Itération {i}");
}

// Boucle while
int j = 0;
while (j < 5)
{
    Console.WriteLine($"Itération {j}");
    j++;
}
      </code></pre>
      
      <h2>Prochaines étapes</h2>
      <p>Maintenant que vous connaissez les bases, voici ce que vous pourriez explorer ensuite :</p>
      
      <ol>
        <li>La programmation orientée objet en C# (classes, héritage, encapsulation)</li>
        <li>Les collections (listes, dictionnaires, tableaux)</li>
        <li>La gestion des exceptions</li>
        <li>LINQ (Language Integrated Query)</li>
        <li>Les interfaces graphiques avec WinForms ou WPF</li>
        <li>Le développement web avec ASP.NET</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>C# est un langage puissant et accessible qui ouvre de nombreuses possibilités. Avec sa syntaxe claire et ses fonctionnalités modernes, il constitue un excellent choix pour les débutants en programmation ainsi que pour les développeurs expérimentés.</p>
      
      <p>N'hésitez pas à pratiquer régulièrement, à explorer la documentation officielle et à rejoindre des communautés de développeurs C# pour continuer votre apprentissage.</p>
    `
  }
];

// Related posts (in a real app, these would be dynamically generated based on content similarity)
const relatedPosts = [
  {
    id: 4,
    title: "Optimiser les performances de vos applications WinForm",
    category: "C#",
    date: "15 Mars 2025",
    image: "https://via.placeholder.com/400x300?text=WinForm+Performance",
  },
  {
    id: 2,
    title: "Comment créer un site web responsive",
    category: "Web Development",
    date: "25 Avril 2025",
    image: "https://via.placeholder.com/400x300?text=Responsive+Web+Design",
  },
  {
    id: 5,
    title: "Sécuriser vos applications web contre les attaques courantes",
    category: "Web Development",
    date: "28 Février 2025",
    image: "https://via.placeholder.com/400x300?text=Web+Security",
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '1', 10);
  
  const post = blogPostsData.find(post => post.id === postId) || blogPostsData[0];
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [postId]);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="max-w-3xl text-center text-white">
              <div className="mb-4">
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full uppercase font-semibold tracking-wider">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-up">{post.title}</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base opacity-90">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
                <Link to="/blog" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6">
                  <ArrowLeft size={16} className="mr-2" />
                  Retour aux articles
                </Link>
                
                <div className="prose max-w-none prose-lg prose-blue mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                {/* Tags */}
                <div className="border-t border-gray-200 pt-6 mt-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag size={18} className="text-gray-600 mr-1" />
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                    <Share2 size={18} className="mr-2" />
                    Partager cet article
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="Partager sur Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                      aria-label="Partager sur LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Author */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 mt-8" data-aos="fade-up">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-blue-800">WD</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Développeur C# et HTML avec 3 ans d'expérience, créateur de l'application MySCC 
                      et spécialiste en développement d'applications métier et sites web.
                    </p>
                    <Link to="/about" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-aos="fade-left">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Articles similaires</h3>
                <div className="space-y-6">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex space-x-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">{relatedPost.date}</span>
                        <Link to={`/blog/${relatedPost.id}`}>
                          <h4 className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                        </Link>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-aos="fade-left" data-aos-delay="100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Catégories</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">C#</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">8</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Web Development</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Business</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Productivité</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">7</span>
                  </div>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-6 text-white" data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4">Abonnez-vous</h3>
                <p className="mb-4 opacity-90">
                  Recevez mes derniers articles et tutoriels directement dans votre boîte mail.
                </p>
                <form>
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full px-4 py-2 mb-3 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-blue-50 transition-colors"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;