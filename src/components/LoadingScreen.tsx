import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="w-64 h-64 md:w-80 md:h-80">
        <DotLottiePlayer
          src="https://lottie.host/66f34d43-bf2d-4b63-ab31-22c439926e54/q4FmFLJfba.lottie"
          autoplay
          loop
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-4 font-display font-medium text-primary tracking-widest uppercase text-sm"
        >
          Harap Tunggu...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;