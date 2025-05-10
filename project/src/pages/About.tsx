import React from 'react';
import { BookOpen, Briefcase, GraduationCap, MapPin, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">À Propos de Moi</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Découvrez mon parcours, mes compétences et ma passion pour le développement.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://i.imgur.com/XXXXXXXXX.jpg" 
                  alt="WILFRED DJIKIAKAM" 
                  className="w-full h-auto"
                />
              </div>
              {/* Background decorative elements */}
              <div className="absolute top-8 left-8 w-full h-full bg-blue-500 opacity-20 rounded-lg z-0 transform -rotate-3"></div>
              <div className="absolute top-4 left-4 w-full h-full bg-orange-500 opacity-20 rounded-lg z-0 transform rotate-2"></div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                <span className="text-blue-600">WILFRED </span>
                <span className="text-gray-700">DJIKIAKAM</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Je suis un développeur camerounais âgé de 27 ans, passionné par la création 
                de solutions numériques efficaces et adaptées aux besoins de mes clients.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Avec 3 ans d'expérience dans le domaine du développement, je me spécialise en C# 
                et HTML, créant aussi bien des applications de bureau que des sites web modernes et réactifs.
              </p>
              
              <div className="flex items-center mb-4 text-gray-700">
                <MapPin size={20} className="mr-2 text-blue-600" />
                <span>Douala, Bonaberie-Bonassa, Cameroun</span>
              </div>
              
              <div className="flex items-center mb-6 text-gray-700">
                <Heart size={20} className="mr-2 text-orange-600" />
                <span>Originaire de Bafang, Ouest Cameroun</span>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Nom Professionnel
                </h3>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">
                    <span className="text-blue-600">RESPO</span>
                    <span className="text-orange-500">_CODEUR</span>
                  </span>
                </div>
                <p className="text-gray-700 mt-3 italic">
                  "du code propre, des idées simples, des solutions efficaces"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Parcours Académique & Professionnel</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Education */}
            <div data-aos="fade-right">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <GraduationCap size={28} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Formation</h3>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">Master 1</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">En cours</span>
                  </div>
                  <p className="text-gray-600 mb-2">Institut Universitaire des Leaders (Campus Bateau)</p>
                  <p className="text-gray-500 text-sm">Douala, Cameroun</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">Licence en Informatique</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2022</span>
                  </div>
                  <p className="text-gray-600 mb-2">Institut Universitaire des Leaders</p>
                  <p className="text-gray-500 text-sm">Douala, Cameroun</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div data-aos="fade-left">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Briefcase size={28} className="text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Expérience</h3>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">Développeur Freelance</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2022 - Présent</span>
                  </div>
                  <p className="text-gray-600 mb-2">RESPO_CODEUR</p>
                  <ul className="text-gray-600 list-disc list-inside mt-2 space-y-1">
                    <li>Création d'applications WinForm en C#</li>
                    <li>Développement de sites web</li>
                    <li>Création de l'application MySCC</li>
                    <li>Maintenance logicielle et support client</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">Développeur Junior</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2020 - 2022</span>
                  </div>
                  <p className="text-gray-600 mb-2">Entreprise ABC</p>
                  <ul className="text-gray-600 list-disc list-inside mt-2 space-y-1">
                    <li>Développement d'applications métier</li>
                    <li>Intégration de bases de données</li>
                    <li>Support technique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Compétences Techniques</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">C#</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Développement C#</h3>
              <p className="text-gray-600">
                Création d'applications Windows Forms, manipulation de données, 
                interfaces utilisateur, logique métier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">HTML</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Développement Web</h3>
              <p className="text-gray-600">
                Création de sites web responsives, intégration de CSS, 
                interfaces interactives, compatibilité multiplateforme.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">SQL</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">MySQL & Bases de Données</h3>
              <p className="text-gray-600">
                Conception de bases de données, requêtes SQL, optimisation, 
                gestion des données, intégration avec applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">MS</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Microsoft Office</h3>
              <p className="text-gray-600">
                Maîtrise avancée de Word et Excel, création de documents professionnels, 
                analyse de données et tableaux croisés dynamiques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="400">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-red-600">App</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Applications Mobiles</h3>
              <p className="text-gray-600">
                Conversion de sites web en applications mobiles, 
                interfaces adaptatives, fonctionnalités natives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="500">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-yellow-600">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Maintenance</h3>
              <p className="text-gray-600">
                Maintenance logicielle, dépannage, optimisation, 
                mise à jour et amélioration des applications existantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Information Personnelle</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Origine</h3>
                  <p className="text-gray-700">
                    Originaire de Bafang, dans l'Ouest du Cameroun, fils de Silewou Emmanuel et de Mejoupe Lucie Chantal.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Philosophie Professionnelle</h3>
                  <p className="text-gray-700">
                    <span className="italic text-blue-700">"du code propre, des idées simples, des solutions efficaces"</span> - 
                    Ce slogan guide mon approche du développement, en privilégiant la qualité, 
                    la clarté et l'efficacité dans chaque projet que j'entreprends.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Réalisations</h3>
                  <p className="text-gray-700">
                    Créateur de l'application WinForm "MySCC", qui a permis d'optimiser les processus 
                    de gestion pour plusieurs entreprises camerounaises.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Vision</h3>
                  <p className="text-gray-700">
                    Je m'efforce de contribuer au développement technologique du Cameroun en créant 
                    des solutions adaptées au contexte local et accessibles aux entreprises de toutes tailles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;