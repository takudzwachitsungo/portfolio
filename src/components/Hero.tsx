import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4"
        >
          Takudzwa Chitsungo
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-[#8892b0] mb-6"
        >
          Software Developer & AI/ML Engineer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl text-lg text-[#8892b0] mb-12 leading-relaxed"
        >
          I'm a results-driven Software Developer specializing in AI-driven applications,
          web development, and mobile solutions. I build innovative systems that integrate
          artificial intelligence, blockchain, and big data analytics to solve real-world
          challenges.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="inline-block border border-[#64ffda] text-[#64ffda] rounded px-7 py-4 font-mono hover:bg-[#64ffda]/10 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">View My Projects</span>
            <span className="absolute inset-0 bg-[#64ffda]/0 group-hover:bg-[#64ffda]/5 transition-all duration-300"></span>
          </a>
          <a href="#contact" className="inline-block bg-[#64ffda]/10 text-[#64ffda] rounded px-7 py-4 font-mono hover:bg-[#64ffda]/20 transition-all duration-300">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
