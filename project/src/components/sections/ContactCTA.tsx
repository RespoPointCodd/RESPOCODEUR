import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
            Je suis disponible 24/24 pour vous aider à transformer vos idées en solutions efficaces.
            Contactez-moi dès aujourd'hui pour discuter de votre projet.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6" data-aos="fade-up" data-aos-delay="200">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Me contacter
            </Link>
            <Link 
              to="/portfolio" 
              className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Voir mon portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;