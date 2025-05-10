import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesPreview from '../components/sections/ServicesPreview';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import BlogPreview from '../components/sections/BlogPreview';
import ContactCTA from '../components/sections/ContactCTA';

const Home: React.FC = () => {
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
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
};

export default Home;