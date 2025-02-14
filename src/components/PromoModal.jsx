import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/474876278_122209486940209429_7469100596182183209_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PaqpZ8YJiLMQ7kNvgGc1dZ6&_nc_oc=AdhBZz2QG6H0Pv2F0aP1PdutUxnsx5DrN7ANpiURV3li_01vPval3EO3BPka3GP6xEc&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=ALuRZ7ij3Z7hF6yJlW1RwEC&oh=00_AYBpRJbUYZx8gsyxUWntXekUsbB-UzTdLiq_NQYiHXH_pA&oe=67B537D1",
"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/472100349_122204873660209429_1727233904450591906_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60v2JM9E7hwQ7kNvgGhCpAp&_nc_oc=Adh3DF8Cd9MapgPiJCRAcpGKBIGJrbR3P4IDtJ-nR49Wq_6soKa9ODATgo7GhVlg8kY&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=A39tFV_aI2Sr2is1_acRp_4&oh=00_AYCItp2NmvGbg6Pla2tMifm_dbmLOdwF36cNCuYq_YJU4w&oe=67B52A84",
  "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/475661299_122211069740209429_3404430855436628454_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TnGTvorCbR4Q7kNvgETh0-O&_nc_oc=Adg_g3-QcQwvEqNKKf1y2kvydrE3zpl3_fa2jrf4sSa9KAvaleyoJAIZ10U0u48w_fo&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Av3l2WM1zX0FJd0dXS2Jllj&oh=00_AYB-IXZokLDnwwQm7VC9dQy5NU76XEm2U54M-Xk3a2daNw&oe=67B5220A"
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
