import React from 'react';
import { 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CircleDot,
  Copyright,
  Instagram,
  Youtube,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1 - Sobre la empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
            <img 
                src="https://tablerosmaqui.com/wp-content/uploads/2024/02/Logotipo-web-tableros-maqui-180-x-60-color-blanco.png"
                alt="TablerosMaqui Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Especialistas en venta y corte de melamina para tus proyectos y necesidades. 
              Calidad y precisión en cada corte.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                <li key={item} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                  <a href="#" className="text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-sm">Calle Felipe Pinglo 112, Apima – Paucarpata</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-sm">958 207 058 - 947 613 047</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-sm">54 292851</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-sm">ventas@tablerosmaqui.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm">Lun - Sáb: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-2 text-sm text-white">
            <Copyright className="w-4 h-4" />
            <p>{new Date().getFullYear()} Tableros Maqui. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;