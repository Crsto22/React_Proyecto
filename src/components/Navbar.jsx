import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Wrench, MessageCircle, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Inicio', icon: Home, path: '/home' },
    { title: 'Nosotros', icon: Users, path: '/nosotros' },
    { title: 'Servicios', icon: Wrench, path: '/servicios' },
    { title: 'Contacto', icon: MessageCircle, path: '/contacto' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`relative transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur shadow-md' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img 
                src="https://tablerosmaqui.com/wp-content/uploads/2024/02/cropped-cropped-Logotipo-web-tableros-maqui-180-x-60-a-color.png"
                alt="TablerosMaqui Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
              <Link 
                to="/contacto"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotiza en WhatsApp</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
            <div className="px-3 py-2">
              <Link 
                to="/contacto"
                className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotiza en WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-400" />
    </nav>
  );
};

export default Navbar;
