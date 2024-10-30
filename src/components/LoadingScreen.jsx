import React, { useEffect } from 'react';
import Mano from '../img/mano.png';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading, setShowLoading }) => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: (i) => ({
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1, 1, 0.8],
      transition: {
        duration: 4,
        times: [0, 0.1, 0.9, 1],
        delay: i * 0.5,
        repeat: Infinity,
        repeatDelay: 1
      }
    })
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
          animate={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          exit={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative flex flex-col items-center"
          >
            {/* SVG Container */}
            <motion.div
              animate={{ 
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="md:w-24 md:h-24 w-20 h-20 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                className="w-full h-full"
              >
                {/* Path rojo */}
                <motion.path
                  style={{ 
                    fill: '#751314',
                    strokeWidth: '0'
                  }}
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  d="M 89.266411,306.7595 C 42.108757,259.619 18,234.83806 18,233.5061 18,231.13009 126.64066,122 129.006,122 131.37179,122 273,264.14057 273,266.51492 273,268.86377 164.33389,378 161.99515,378 c-0.80428,0 -33.53221,-32.05822 -72.728739,-71.2405 z"
                />

                {/* Path verde */}
                <motion.path
                  style={{ 
                    fill: '#71ad2d',
                    strokeWidth: '0'
                  }}
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  d="M 244.04699,356.5126 222.5,335.02519 252.14478,305.2626 c 16.30462,-16.36943 30.17962,-30.81559 30.83333,-32.10257 1.52859,-3.00941 1.52906,-10.30925 8.5e-4,-13.32006 -0.65324,-1.28698 -22.07177,-23.27278 -47.59675,-48.85733 l -46.40904,-46.51737 21.31658,-21.23263 C 223.43428,130.13986 232.35367,122 233.55578,122 c 1.24776,0 27.59472,25.64714 73.19684,71.2526 C 363.01694,249.52105 378,265.03004 378,267.00091"
                />

                {/* Path amarillo */}
                <motion.path
                  style={{ 
                    fill: '#f1a648',
                    strokeWidth: '0'
                  }}
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  d="m 347.54937,357.02065 -21.04673,-20.97936 30.19022,-30.27064 c 16.60462,-16.64886 30.66653,-31.53744 31.24868,-33.08575 1.35307,-3.59865 1.352,-8.77588 -0.003,-12.3698 -0.58356,-1.54831 -22.18995,-23.98222 -48.01421,-49.85315 L 292.97159,163.4239 313.8343,142.71195 C 329.27269,127.38513 335.31705,122 337.08175,122 c 1.82272,0 18.8427,16.43819 72.21868,69.75 38.40867,38.3625 70.42454,70.875 71.14637,72.25 0.79849,1.52102 1.0009,3.28319 0.51688,4.5 -1.3767,3.46105 -108.3233,109.5 -110.43728,109.5 -1.17692,0 -10.14465,-8.18805 -22.97703,-20.97935 z"
                />

                {/* Efecto de brillo */}
                <motion.circle
                  r="5"
                  fill="#fff"
                  filter="url(#glow)"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    x: [0, 100, 200],
                    y: [0, -50, -100],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />

                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: 1, 
                y: -20
              }}
              transition={{
                duration: 1.5,
                delay: 0.5
              }}
              className="w-auto h-24 md:-mt-3 "
            >
              <img 
                src={Mano} 
                alt="Logo" 
                className="md:h-16 h-11 md:w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;