import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // This is a mock submission for demonstration
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Contact</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Restons en Contact
              </h2>
              
              <p className="text-gray-700 mb-8">
                Je suis disponible 24/24 pour répondre à vos questions et discuter de vos projets. 
                N'hésitez pas à me contacter par le moyen qui vous convient le mieux.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="rounded-full p-3 bg-blue-100 mr-4">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Téléphone / WhatsApp</h3>
                    <p className="text-gray-700">+237 672922360</p>
                    <p className="text-gray-600 text-sm mt-1">Disponible 24/24</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full p-3 bg-blue-100 mr-4">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-700">respopointcodd@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full p-3 bg-blue-100 mr-4">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                    <p className="text-gray-700">Douala, Bonaberie-Bonassa</p>
                    <p className="text-gray-700">Cameroun</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Réseaux Sociaux</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/respocodeur" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/wilfred_djikiakam" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/wilfred_djikiakam" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/wilfred-djikiakam" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://wa.me/237672922360" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                  >
                    <MessageSquare size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Envoyez-moi un Message
                </h2>
                
                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom Complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Application WinForm">Application WinForm</option>
                      <option value="Site Web">Site Web</option>
                      <option value="CV Professionnel">CV Professionnel</option>
                      <option value="Tableau de Bord">Tableau de Bord</option>
                      <option value="Hébergement">Hébergement</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre question..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Localisation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md" data-aos="fade-up">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              {/* Embed a Google Maps iframe here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127505.33625911522!2d9.640018871974962!3d4.052391789776778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128340344df9%3A0x62ec2f7cf5e9dea8!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2s!4v1643731283582!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation à Douala, Cameroun"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Questions Fréquentes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6" data-aos="fade-up">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Quels sont vos délais de réalisation typiques ?
                </h3>
                <p className="text-gray-700">
                  Les délais varient selon la complexité du projet. Un site web simple peut prendre 1-2 semaines, 
                  tandis qu'une application plus complexe peut nécessiter 4-8 semaines. Je fournis toujours une 
                  estimation précise après la consultation initiale.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Comment se déroule le processus de paiement ?
                </h3>
                <p className="text-gray-700">
                  Je demande généralement un acompte de 50% au début du projet, avec le solde payable à la livraison. 
                  Pour les projets plus importants, nous pouvons établir un calendrier de paiement par étapes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Proposez-vous un support après la livraison du projet ?
                </h3>
                <p className="text-gray-700">
                  Oui, je propose un support technique pendant 3 mois après la livraison pour tous les projets. 
                  Des contrats de maintenance à plus long terme sont également disponibles pour garantir 
                  le bon fonctionnement continu de votre solution.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Pouvez-vous travailler sur des projets à distance ?
                </h3>
                <p className="text-gray-700">
                  Absolument ! Je travaille avec des clients du monde entier. Grâce aux outils de communication 
                  modernes, nous pouvons collaborer efficacement à distance, avec des réunions régulières 
                  par vidéoconférence et un suivi de projet transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;