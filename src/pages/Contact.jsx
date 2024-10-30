import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MapPin, Send, Users, TagIcon, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0 }}
        >
          <img 
            src="https://media.admagazine.com/photos/62c70bf9ff99b3e5179312ec/master/w_1600,c_limit/ARAUCO-5.jpg" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <span className="inline-block  text-yellow-400 px-6   text-lg font-medium ">
            Contacto
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Tableros Maqui</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hablemos sobre las medidas y espacios de tus proyectos
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Consultas y Cotizaciones
                </h2>
                <p className="text-gray-600 mb-8">
                  Tienes dudas o necesitas asesoría en las medidas de tus proyectos, 
                  escríbenos o comunícate con nosotros.
                </p>

                {/* Features */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4"
                    {...fadeIn}
                  >
                    <div className="p-3 bg-yellow-400/10 rounded-xl">
                      <TagIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Cotiza con nosotros</h3>
                      <p className="text-gray-500 text-sm">Precios competitivos y presupuestos detallados</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4"
                    {...fadeIn}
                  >
                    <div className="p-3 bg-yellow-400/10 rounded-xl">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Asesoría gratuita</h3>
                      <p className="text-gray-500 text-sm">Expertos a tu disposición para guiarte</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4"
                    {...fadeIn}
                  >
                    <div className="p-3 bg-yellow-400/10 rounded-xl">
                      <Sparkles className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Consulta promociones</h3>
                      <p className="text-gray-500 text-sm">Descubre nuestras ofertas especiales</p>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5" />
                    <span>+51 999 999 999</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5" />
                    <span>contacto@tablerosmaqui.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>Lima, Perú</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-700">Nombre</span>
                    </label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full bg-gray-50 focus:bg-white transition-colors" 
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-700">Apellido</span>
                    </label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full bg-gray-50 focus:bg-white transition-colors" 
                      value={formData.apellido}
                      onChange={(e) => setFormData({...formData, apellido: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Email</span>
                  </label>
                  <input 
                    type="email" 
                    className="input input-bordered w-full bg-gray-50 focus:bg-white transition-colors" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">Mensaje</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered h-32 bg-gray-50 focus:bg-white transition-colors" 
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-lg w-full bg-orange-400 hover:bg-orange-500 text-white border-none"
                  type="submit"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;