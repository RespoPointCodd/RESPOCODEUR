import React from 'react';
import { Link } from 'react-router-dom';
import { Code, MoonStar as Mortar, BookOpen, Map } from 'lucide-react';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about-preview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">À Propos de Moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://i.imgur.com/XXXXXXXXX.jpg" 
                alt="WILFRED DJIKIAKAM" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              <span className="text-blue-600">RESPO</span>
              <span className="text-orange-500">_CODEUR</span>
            </h3>
            <p className="text-gray-700 mb-6">
              Je m'appelle WILFRED DJIKIAKAM, développeur camerounais âgé de 27 ans, connu dans le monde du code sous le nom de RESPO_CODEUR. 
              Avec 3 ans d'expérience dans le développement, je me spécialise en C# et HTML.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <div className="rounded-full p-2 bg-blue-100 mr-3">
                  <Code size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Compétences</h4>
                  <p className="text-gray-600">C#, HTML, MySQL, Word, Excel</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full p-2 bg-orange-100 mr-3">
                  <Mortar size={20} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Éducation</h4>
                  <p className="text-gray-600">Master 1, Institut Universitaire des Leaders</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full p-2 bg-purple-100 mr-3">
                  <BookOpen size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Projets</h4>
                  <p className="text-gray-600">Créateur de l'application "MySCC"</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full p-2 bg-green-100 mr-3">
                  <Map size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Localisation</h4>
                  <p className="text-gray-600">Douala, Bonaberie-Bonassa</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-primary inline-block mt-4">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;