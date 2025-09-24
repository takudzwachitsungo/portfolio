import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export const Loader = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);
  return <motion.div className="fixed inset-0 bg-[#0a192f] flex items-center justify-center z-50" initial={{
    opacity: 1
  }} exit={{
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }}>
      <div className="flex flex-col items-center">
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5
      }} className="w-20 h-20 mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path d="M 50,50 m 0,-40 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80" fill="none" strokeWidth="4" stroke="#0a192f" strokeLinecap="round" />
            <motion.path d="M 50,50 m 0,-40 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80" fill="none" strokeWidth="4" stroke="#64ffda" strokeLinecap="round" initial={{
            pathLength: 0
          }} animate={{
            pathLength: progress / 100
          }} transition={{
            duration: 0.2,
            ease: 'easeInOut'
          }} />
          </svg>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.5
      }} className="text-[#64ffda] font-mono text-sm">
          {Math.round(progress)}%
        </motion.div>
      </div>
    </motion.div>;
};