import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MonitorSmartphone, 
  FileText, 
  ShoppingBag, 
  PieChart, 
  DatabaseBackup, 
  Laptop 
} from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" data-aos="fade-up">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 text-white rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="services-preview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Mes Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Je propose une variété de services numériques pour répondre à tous vos besoins informatiques, 
            du développement de sites et d'applications à la maintenance logicielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<MonitorSmartphone size={32} />}
            title="Création d'Applications"
            description="Développement d'applications Windows Forms performantes et adaptées à vos besoins métier spécifiques."
          />
          
          <ServiceCard
            icon={<FileText size={32} />}
            title="CV Professionnels"
            description="Création de CV professionnels et modernes qui vous démarqueront auprès des recruteurs."
          />
          
          <ServiceCard
            icon={<ShoppingBag size={32} />}
            title="Sites E-commerce"
            description="Conception et développement de sites e-commerce complets avec gestion des produits et des paiements."
          />
          
          <ServiceCard
            icon={<PieChart size={32} />}
            title="Tableaux de Bord"
            description="Création de tableaux de bord interactifs pour visualiser et analyser vos données d'entreprise."
          />
          
          <ServiceCard
            icon={<DatabaseBackup size={32} />}
            title="Hébergement de Sites"
            description="Solutions d'hébergement fiables et performantes pour vos sites web et applications."
          />
          
          <ServiceCard
            icon={<Laptop size={32} />}
            title="Maintenance Logicielle"
            description="Services de maintenance et d'optimisation pour garantir le bon fonctionnement de vos logiciels."
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-block">
            Tous mes services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;