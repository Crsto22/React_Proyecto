import React, { useEffect, useRef, useState } from "react";
import { Facebook, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Users, Clock, Calendar } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {  Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const position = [-16.41416431755467, -71.50462072792388];

const Nosotros = () => {


  useEffect(() => {
    const map = document.querySelector('.leaflet-container');
    if (map) {
      window.dispatchEvent(new Event('resize'));
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.admagazine.com/photos/62c70bffff99b3e5179312ee/master/pass/ARAUCO-1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4"
        >
          <div className="text-center">
            <h2 className="text-yellow-400 font-medium mb-2">Acerca de</h2>
            <h1 className="text-6xl font-bold text-white mb-4">Nosotros</h1>
            <h3 className="text-3xl font-light text-white/90">
              Tableros Maqui
            </h3>
          </div>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Venta y corte de Melamina
                </h2>
                <div className="h-1 w-20 bg-yellow-400"></div>
              </div>

              <div className="space-y-4 text-gray-700 text-lg">
                <p className="leading-relaxed">
                  Iniciamos operaciones en la ciudad de Arequipa a partir del
                  año 2020 con mucha tenacidad y perseverancia nos hemos
                  mantenido ante la situación que vivíamos en el país.
                </p>
                <p className="leading-relaxed">
                  Somos «Tableros Maqui» un equipo de trabajo que día a día
                  vamos mejorando para ofrecerte un servicio y productos de
                  calidad.
                </p>
              </div>

              <div className="pt-6">
                <p className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  Síguenos en nuestras redes sociales
                  <ArrowRight className="w-4 h-4 text-yellow-500" />
                </p>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Facebook size={20} />
                  <span className="font-medium">Síguenos en Facebook</span>
                </motion.a>
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative md:h-[600px]  rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/271719029_130467932778351_6262976151442988038_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEZsaZsxLYAfHty3r9PA0Btul9Zrnjb_Iy6X1mueNv8jBXMoauzwn-B-kp4HcslL_lj4hf12xfI3Lwsn-algjkL&_nc_ohc=__EKSKWbje8Q7kNvgEcqzHk&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=APZ_tnclsNt-n4DPw7UyVAS&oh=00_AYArwZhZoByXHuxsKo5etGSh-uQ3STpGDb46yyyZbZba9w&oe=672841F9"
                  alt="Tableros Maqui Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-8 border-gray-100 rounded-full -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="mb-20 md:mb-12 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <CheckCircle2 className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={400} duration={2} />+
                </h3>
                <p className="text-gray-600 mt-2">Proyectos completos</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Users className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={30} duration={2} />+
                </h3>
                <p className="text-gray-600 mt-2">Clientes felices</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Clock className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={100} duration={2} />%
                </h3>
                <p className="text-gray-600 mt-2">Puntualidad</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Calendar className="w-12 h-12 text-orange-400" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  <Counter end={5} duration={2} />
                </h3>
                <p className="text-gray-600 mt-2">Años de servicio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="xl:max-w-7xl lg:max-w-6xl md:max-w-1xl sm:max-w-xl max-w-sm mx-auto mb-10"
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Encuéntranos
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos ubicados en el corazón de Arequipa, listos para atenderte con la mejor calidad y servicio.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6">
            <h2 className="text-2xl font-bold text-white">Información de Contacto</h2>
          </div>

          <div className="p-8 space-y-8">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-orange-50 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Dirección</h3>
                <p className="text-gray-600">Av. Pizarro 123, Arequipa, Perú</p>
                <a
                  href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 mt-2 text-sm"
                >
                  Ver en Google Maps
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-orange-50 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Teléfono</h3>
                <a
                  href="tel:+51954123456"
                  className="text-orange-600 hover:text-orange-600 transition-colors"
                >
                  +51 954 123 456
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-orange-50 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Correo</h3>
                <a
                  href="mailto:contacto@tablerosmaqui.com"
                  className="text-orange-600 hover:text-orange-600 transition-colors"
                >
                  contacto@tablerosmaqui.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-orange-50 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Horario de Atención</h3>
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Lunes a Viernes</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Sábados</span>
                    <span className="font-medium">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Domingos</span>
                    <span className="font-medium text-red-500">Cerrado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[600px] rounded-2xl overflow-hidden shadow-2xl hidden md:block"
        >
          <MapContainer
            center={position}
            zoom={16}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup className="rounded-lg">
                <div className="p-2">
                  <h3 className="font-bold text-gray-900 mb-1">Tableros Maqui</h3>
                  <p className="text-gray-600 text-sm">Av. Pizarro 123, Arequipa, Perú</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <a
                      href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                    >
                      Cómo llegar
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default Nosotros;
