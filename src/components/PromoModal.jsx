import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PromoModal = ({ isOpen, onClose }) => {
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
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/425426809_122096030270209429_2863954408808311620_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFcQdinG-OsA7IZZKzv6u1IqLp8iE8V6uuounyITxXq60paZTG1k8PiR_eN2Zgy1kgLPid3vtjaW-gUxkx5FmjB&_nc_ohc=BL7-ZLcWMfIQ7kNvgG4Fw0I&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Aa2XOxaOckkkOEEwJ1Y_ItE&oh=00_AYBdweoe-UWkw7vmPDHJ00U4VvUKR69VOa5jlifC6XG0cA&oe=672894C0" 
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
