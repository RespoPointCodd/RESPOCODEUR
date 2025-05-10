import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const HeroSection: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: [
          "Développeur C#",
          "Développeur Web",
          "Créateur d'Applications",
          "Expert en Solutions Numériques"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-orange-500 opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-400 opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span>Bonjour, je suis </span>
              <br />
              <span style={{ color: 'var(--primary-orange)' }}>WILFRED </span>
              <span style={{ color: 'var(--primary-blue)' }}>DJIKIAKAM</span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-6">
              <span className="mr-2">Je suis</span>
              <span className="font-semibold" ref={typedRef}></span>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg">
              {/* Slogan with gradient text */}
              <span className="text-gradient font-medium text-xl block mb-2">
                "du code propre, des idées simples, des solutions efficaces"
              </span>
              Avec 3 ans d'expérience, je développe des solutions numériques adaptées à vos besoins, 
              des sites web professionnels aux applications métier.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                Voir mon travail
              </Link>
              <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md transition-colors">
                Me contacter
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative" data-aos="fade-left">
            <div className="relative z-10 rounded-lg overflow-hidden border-4 border-gray-800 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://i.imgur.com/XXXXXXXXX.jpg" 
                alt="WILFRED DJIKIAKAM" 
                className="w-full h-auto"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-8 right-8 w-full h-full bg-blue-500 opacity-20 rounded-lg z-0 transform rotate-3"></div>
            <div className="absolute top-4 right-4 w-full h-full bg-orange-500 opacity-20 rounded-lg z-0 transform -rotate-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;