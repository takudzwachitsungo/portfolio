import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
export const Footer = () => {
  const socialLinks = [{
    icon: <Github size={20} />,
    url: 'https://github.com/takudzwachitsungo',
    label: "GitHub Profile"
  }, {
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/takudzwa-chitsungo-097523227',
    label: "LinkedIn Profile"
  }, {
    icon: <Twitter size={20} />,
    url: 'https://twitter.com/dalathefirst',
    label: "Twitter Profile"
  }, {
    icon: <Instagram size={20} />,
    url: 'https://www.instagram.com/dalathefirst',
    label: "Instagram Profile"
  }];
  const socialVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <footer className="py-6 text-center relative z-10">
      {/* Desktop Side Social Links */}
      <motion.div className="hidden md:flex flex-col fixed left-6 bottom-0 items-center" variants={socialVariants} initial="hidden" animate="show">
        {socialLinks.map((link, i) => <motion.a key={i} href={link.url} className="p-2.5 text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300" target="_blank" rel="noopener noreferrer" variants={itemVariants} aria-label={link.label}>
            {link.icon}
          </motion.a>)}
        <motion.div variants={itemVariants} className="w-px h-24 bg-[#8892b0] mt-4"></motion.div>
      </motion.div>
      {/* Desktop Side Email */}
      <motion.div className="hidden md:flex flex-col fixed right-6 bottom-0 items-center" variants={socialVariants} initial="hidden" animate="show">
        <motion.a href="mailto:hello@takudzwachitsungo.com" className="font-mono text-xs tracking-widest text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300 [writing-mode:vertical-rl]" variants={itemVariants}>
          hello@takudzwachitsungo.com
        </motion.a>
        <motion.div variants={itemVariants} className="w-px h-24 bg-[#8892b0] mt-4"></motion.div>
      </motion.div>
      {/* Mobile Social Links */}
      <div className="md:hidden flex justify-center space-x-5 mb-4">
        {socialLinks.map((link, i) => <a key={i} href={link.url} className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300" target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            {link.icon}
          </a>)}
      </div>
      {/* Copyright */}
      <div className="font-mono text-xs text-[#8892b0] mt-8">
        <a href="#" className="hover:text-[#64ffda] transition-colors duration-300">
          Designed & Built by Takudzwa Chitsungo
        </a>
        <p className="mt-2 text-[#8892b0]/60">© 2023 All Rights Reserved</p>
      </div>
    </footer>;
};