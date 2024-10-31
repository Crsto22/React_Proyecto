import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/425426809_122096030270209429_2863954408808311620_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFcQdinG-OsA7IZZKzv6u1IqLp8iE8V6uuounyITxXq60paZTG1k8PiR_eN2Zgy1kgLPid3vtjaW-gUxkx5FmjB&_nc_ohc=BL7-ZLcWMfIQ7kNvgG4Fw0I&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Aa2XOxaOckkkOEEwJ1Y_ItE&oh=00_AYBdweoe-UWkw7vmPDHJ00U4VvUKR69VOa5jlifC6XG0cA&oe=672894C0",
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/429794898_122119081166209429_4350728774061128670_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH0PX8jiPj-B_7SedO508JzylA2RZRiwW7KUDZFlGLBbhhuCpApzz5Mv5mHBoFJ4L6lzr0l1s8vavD9P46KhdWS&_nc_ohc=4ka62g8E7dAQ7kNvgHQt_Sm&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=A2cWRuRsrjPyvzdkGLpEuHB&oh=00_AYCc-oEEhyF3CBHz6RJy12DgQgEBdBMjT3Rkh26_7p9TqQ&oe=67289838",
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/435075687_122131597568209429_1689610710073477991_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfZ9gTqZVcXMeisxmXHNBHuLg1yzUni0e4uDXLNSeLR8YBwbNdY2k1G4sjbNN6dJK-xfczOADTe3UdfR2Ln7ep&_nc_ohc=IqppD97VRz8Q7kNvgHLdxaH&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Ag87FMP_XHRJhDnS6aSuTg6&oh=00_AYCr0G5Ywi_fiogyslFfrrUwECt6kv7ZcYKpywTBl6QUzw&oe=6728899D"
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const PromoModal = ({ isOpen, onClose }) => {
  const randomImage = getRandomImage(); // Obtener una imagen al azar

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white/100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Image section */}
            <div className="relative h-full bg-yellow-100">
              <img 
                src={randomImage} // Usar la imagen al azar
                alt="Promoción especial" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoModal;
