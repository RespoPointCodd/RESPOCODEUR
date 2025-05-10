import React from 'react';
import { 
  Monitor, 
  FileText, 
  ShoppingBag, 
  PieChart, 
  Database, 
  Laptop,
  Smartphone,
  Server,
  Clock,
  Award
} from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-up">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 text-white rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <h4 className="font-semibold text-gray-700 mb-3">Ce que j'offre:</h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Mes Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Découvrez la gamme complète de services que je propose pour répondre à vos besoins numériques.
          </p>
        </div>
      </section>

      {/* Services Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800" data-aos="fade-up">
              Des Solutions Adaptées à Vos Besoins
            </h2>
            <p className="text-lg text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="100">
              Je propose une gamme complète de services numériques pour vous aider à atteindre vos objectifs. 
              Disponible 24/24, je m'engage à fournir des solutions efficaces et sur mesure pour chaque projet.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-3">
                <Clock size={24} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Disponibilité 24/24</h3>
              </div>
              <p className="text-gray-700">
                Je suis disponible à tout moment pour répondre à vos besoins et assurer 
                un support continu pour tous vos projets numériques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Services Principaux</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Monitor size={32} />}
              title="Applications WinForm"
              description="Développement d'applications Windows Forms personnalisées pour répondre à vos besoins métier spécifiques."
              features={[
                "Interfaces intuitives et conviviales",
                "Gestion de données efficace",
                "Intégration avec vos systèmes existants",
                "Support et maintenance continue",
                "Créateur de l'application MySCC"
              ]}
            />
            
            <ServiceCard
              icon={<FileText size={32} />}
              title="CV Professionnels"
              description="Création de CV modernes et efficaces qui mettent en valeur votre parcours et vos compétences."
              features={[
                "Mise en page professionnelle",
                "Optimisation pour les ATS",
                "Adaptation à votre secteur d'activité",
                "Formats imprimables et numériques",
                "Conseils personnalisés"
              ]}
            />
            
            <ServiceCard
              icon={<ShoppingBag size={32} />}
              title="Sites E-commerce"
              description="Conception et développement de boutiques en ligne complètes et performantes pour vendre vos produits."
              features={[
                "Design responsive et attractif",
                "Gestion des produits et du stock",
                "Système de paiement sécurisé",
                "Optimisation SEO pour la visibilité",
                "Interface d'administration conviviale"
              ]}
            />
            
            <ServiceCard
              icon={<PieChart size={32} />}
              title="Tableaux de Bord"
              description="Création de tableaux de bord interactifs pour visualiser et analyser vos données d'entreprise."
              features={[
                "Visualisations claires et intuitives",
                "Données en temps réel",
                "Filtres et analyses personnalisables",
                "Exportation de rapports",
                "Tableaux de bord adaptés à vos KPIs"
              ]}
            />
            
            <ServiceCard
              icon={<Server size={32} />}
              title="Hébergement de Sites"
              description="Solutions d'hébergement fiables et performantes pour vos sites web et applications."
              features={[
                "Serveurs sécurisés et fiables",
                "Temps de chargement optimisés",
                "Sauvegarde régulière des données",
                "Support technique disponible",
                "Solutions adaptées à votre trafic"
              ]}
            />
            
            <ServiceCard
              icon={<Laptop size={32} />}
              title="Maintenance Logicielle"
              description="Services de maintenance et d'optimisation pour garantir le bon fonctionnement de vos logiciels."
              features={[
                "Mises à jour régulières",
                "Résolution rapide des problèmes",
                "Optimisation des performances",
                "Sécurisation de vos données",
                "Support technique continu"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Services Complémentaires</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Smartphone size={32} />}
              title="Transformation en Applications Mobiles"
              description="Conversion de sites web en applications mobiles fonctionnelles pour Android et iOS."
              features={[
                "Interfaces adaptées aux mobiles",
                "Fonctionnalités natives",
                "Expérience utilisateur optimisée",
                "Publication sur les stores",
                "Mises à jour et maintenance"
              ]}
            />
            
            <ServiceCard
              icon={<Database size={32} />}
              title="Gestion MySQL"
              description="Conception et gestion de bases de données MySQL pour vos applications et sites web."
              features={[
                "Modélisation de données efficace",
                "Optimisation des requêtes",
                "Sécurisation des données",
                "Migration et conversion de bases",
                "Administration et maintenance"
              ]}
            />
            
            <ServiceCard
              icon={<Clock size={32} />}
              title="Automatisation des Tâches"
              description="Automatisation des processus et tâches répétitives pour améliorer l'efficacité de votre entreprise."
              features={[
                "Identification des processus optimisables",
                "Développement de scripts d'automatisation",
                "Intégration avec vos outils existants",
                "Formation à l'utilisation",
                "Support et maintenance"
              ]}
            />
            
            <ServiceCard
              icon={<Award size={32} />}
              title="Formation et Conseil"
              description="Services de formation et de conseil pour vous aider à tirer le meilleur parti de vos outils numériques."
              features={[
                "Formation personnalisée",
                "Documentation détaillée",
                "Conseils d'optimisation",
                "Support post-formation",
                "Accompagnement continu"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Mon Processus de Travail</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
            <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Une approche méthodique pour garantir des résultats de qualité à chaque étape de votre projet.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-500"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 mb-12" data-aos="fade-right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">1. Consultation</h3>
                      <p className="text-gray-600">
                        Je commence par comprendre vos besoins, objectifs et contraintes pour définir 
                        clairement la portée du projet.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg shadow-lg mx-4 my-2">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 md:hidden">
                    {/* Empty div for layout on mobile */}
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 mb-12" data-aos="fade-left">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:hidden">
                    {/* Empty div for layout on mobile */}
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg shadow-lg mx-4 my-2">
                    2
                  </div>
                  <div className="flex-1 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">2. Planification</h3>
                      <p className="text-gray-600">
                        Je développe un plan détaillé incluant les fonctionnalités, 
                        les délais et les livrables pour votre projet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 mb-12" data-aos="fade-right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">3. Développement</h3>
                      <p className="text-gray-600">
                        Je travaille à la création de votre solution, en maintenant une communication 
                        régulière pour vous tenir informé de l'avancement.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-lg shadow-lg mx-4 my-2">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 md:hidden">
                    {/* Empty div for layout on mobile */}
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 mb-12" data-aos="fade-left">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:hidden">
                    {/* Empty div for layout on mobile */}
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-orange-500 text-white font-bold text-lg shadow-lg mx-4 my-2">
                    4
                  </div>
                  <div className="flex-1 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">4. Tests & Révisions</h3>
                      <p className="text-gray-600">
                        Je teste rigoureusement la solution pour garantir sa qualité, 
                        et effectue les ajustements nécessaires selon vos retours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative z-10" data-aos="fade-right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">5. Livraison & Support</h3>
                      <p className="text-gray-600">
                        Je livre la solution finalisée et reste disponible pour le support, 
                        la maintenance et les évolutions futures.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg shadow-lg mx-4 my-2">
                    5
                  </div>
                  <div className="flex-1 md:pl-8 md:hidden">
                    {/* Empty div for layout on mobile */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-lg mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
              Contactez-moi dès aujourd'hui pour discuter de vos besoins et 
              découvrir comment je peux vous aider à concrétiser votre vision.
            </p>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;