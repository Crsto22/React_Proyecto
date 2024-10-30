import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    MessageCircle,
    Star,
    Shield,
    Clock,
    ArrowRight,
    Heart,
    Info,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

const brands = [
    {
        id: 1,
        name: "Masisa",
        image:
            "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-04.png",
    },
    {
        id: 2,
        name: "Arauco",
        image:
            "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-02.png",
    },
    {
        id: 3,
        name: "Novopan",
        image:
            "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-03.png",
    },
    {
        id: 4,
        name: "LP Chile",
        image:
            "https://tablerosmaqui.com/wp-content/uploads/2024/02/Logos-clientes-tableros-maqui-01.png",
    },
];

const images = [
    {
        url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920",
        alt: "Modern Melamina Interior",
    },
    {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920",
        alt: "Elegant Workspace Design",
    },
    {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920",
        alt: "Contemporary Furniture",
    },
];

const features = [
    {
        icon: <Star className="w-6 h-6 text-yellow-400" />,
        title: "Calidad Premium",
        description: "Materiales de la más alta calidad",
    },
    {
        icon: <Shield className="w-6 h-6 text-blue-400" />,
        title: "Garantía Total",
        description: "Satisfacción garantizada",
    },
    {
        icon: <Clock className="w-6 h-6 text-green-400" />,
        title: "Entrega Rápida",
        description: "Envíos en tiempo récord",
    },
];

const ServiceCard = ({ imageSrc, title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} 
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
        >
            <motion.div
                className="mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg"
                />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 text-center mb-4">{description}</p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-orange-600 hover:bg-yellow-600 text-white  btn-wide"
            >
                Ver más
            </motion.button>
        </motion.div>
    );
};

const Home = () => {
    

    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000, stopOnInteraction: false }),
    ]);
    const services = [
        {
            imageSrc:
                "https://tablerosmaqui.com/wp-content/uploads/2024/02/Imagen-servicios-inicio-venta-de-melamina.jpg",
            title: "Venta de Melamina",
            description:
                "Te ofrecemos variedad, colores y diferentes marcas de melamina.",
        },
        {
            imageSrc:
                "https://tablerosmaqui.com/wp-content/uploads/2024/02/Imagen-servicios-inicio-cortes-especiales.jpg",
            title: "Cortes Especiales",
            description:
                "Realizamos diferentes tipos de cortes según tu proyecto o gusto del cliente.",
        },
        {
            imageSrc:
                "https://tablerosmaqui.com/wp-content/uploads/2024/02/Imagen-servicios-inicio-enchapados-curvo.jpg",
            title: "Enchapados Curvos",
            description:
                "Todo lo que necesitas para tus proyectos con enchapados curvos con nosotros.",
        },
    ];

    const [emblaRef1] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1.5,
                startDelay: 0,
            }),
        ]
    );

    return (
        <div className="min-h-screen">
                   
                <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-8 md:mt-0">
                    <div className="container mx-auto px-4 h-screen flex items-center">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <motion.h1
                                    className="text-5xl md:text-6xl font-bold leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    Melamina para tus{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                                        artes y proyectos
                                    </span>
                                </motion.h1>

                                <motion.p
                                    className="text-lg text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    Transformamos tus ideas en realidad con los mejores materiales
                                    y acabados del mercado. Diseños únicos que reflejan tu estilo
                                    personal.
                                </motion.p>

                                <div className="grid grid-cols-3 gap-4 my-8">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="card bg-gray-800/50 p-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                                        >
                                            <div className="flex flex-col items-center text-center gap-2">
                                                {feature.icon}
                                                <h3 className="font-semibold">{feature.title}</h3>
                                                <p className="text-sm text-gray-400">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <motion.a
                                        href="https://wa.me/+1234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white btn-lg gap-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        Cotiza WhatsApp
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Right Image */}
                            <div className="relative hidden md:block">
                                <motion.div
                                    className="relative w-full h-[600px] rounded-2xl overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <div className="overflow-hidden" ref={emblaRef}>
                                        <div className="flex h-[600px]">
                                            {images.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className="flex-[0_0_100%] min-w-0 relative"
                                                >
                                                    <img
                                                        src={image.url}
                                                        alt={image.alt}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
                    {/* About Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="py-16 px-4 md:px-8"
                    >
                        <div className="container mx-auto max-w-5xl">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <motion.div
                                    initial={{ x: -50 }}
                                    whileInView={{ x: 0 }}
                                    className="md:w-1/2 w-10/12"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <Info className="text-yellow-600 w-6 h-6" />
                                        <h2 className="text-3xl font-bold text-gray-800">
                                            Acerca de NOSOTROS
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Iniciamos operaciones en la ciudad de Arequipa a partir del
                                        año 2020 con mucha tenacidad y perseverancia nos hemos
                                        mantenido ante la situación que vivíamos en el país.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Somos «Tableros Maqui» un equipo de trabajo que día a día
                                        vamos mejorando para ofrecerte un servicio y productos de
                                        calidad.
                                    </p>
                                    <button className="btn bg-orange-500 hover:bg-orange-800  text-white gap-2">
                                        Ver más <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 50 }}
                                    whileInView={{ x: 0 }}
                                    className="md:w-1/2 w-10/12"
                                >
                                    <img
                                        src="https://tablerosmaqui.com/wp-content/uploads/2024/02/Imagen-nosotros-inicio-web.jpg"
                                        alt="Carpintería"
                                        className="rounded-lg shadow-xl md:h-max h-52 w-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="py-16 px-4 md:px-8"
                    >
                        <div className="container mx-auto max-w-5xl">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <motion.div
                                    initial={{ x: 50 }}
                                    whileInView={{ x: 0 }}
                                    className="md:w-1/2 w-10/12"
                                >
                                    <img
                                        src="https://tablerosmaqui.com/wp-content/uploads/2024/03/Imagen-inicio-tienes-un-proyecto-web-2.jpg"
                                        alt="Carpintería"
                                        className="rounded-lg shadow-xl md:h-max h-52  w-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ x: -50 }}
                                    whileInView={{ x: 0 }}
                                    className="md:w-1/2 w-10/12"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <Info className="text-yellow-600 w-6 h-6" />
                                        <h2 className="text-3xl font-bold text-gray-800">
                                            TU PROYECTO CON NOSOTROS
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Solicita una asesoría GRATUITA o envíanos tus medidas para
                                        que nuestros asesores te brinden la atención oportuna.
                                    </p>

                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://wa.me/yourphonenumber"
                                        className="btn text-white gap-2  rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Cotiza WhatsApp
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                </div>
                <section className="py-16 px-4 ">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }} // Animación cada vez que el título se vuelve visible
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                SERVICIOS DE CALIDAD
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Te ofrecemos servicios realizados con maquinaria de primera
                                tecnología y contamos con personal calificado para brindarte una
                                mejor asesoría para la ejecución de tus proyectos.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <ServiceCard
                                        imageSrc={service.imageSrc}
                                        title={service.title}
                                        description={service.description}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-16 bg-gray-50 -mt-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Marcas <span className="text-yellow-600">Destacadas</span>
                            </h2>
                            <p className="text-gray-600 mt-2">Distribuidores Oficiales</p>
                        </div>

                        <div className="overflow-hidden" ref={emblaRef1}>
                            <div className="flex">
                                {[...brands, ...brands].map((brand, index) => (
                                    <div
                                        key={`${brand.id}-${index}`}
                                        className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333333%] lg:flex-[0_0_25%] min-w-0 px-2 md:px-4"
                                    >
                                        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 h-24 md:h-32 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={brand.image}
                                                alt={`${brand.name} logo`}
                                                className="max-w-full h-auto max-h-16 md:max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            
        </div>
    );
};
export default Home;
