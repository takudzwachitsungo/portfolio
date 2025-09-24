import React, { useEffect, useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'About',
    href: '#about',
    id: 'about'
  }, {
    name: 'Experience',
    href: '#experience',
    id: 'experience'
  }, {
    name: 'Projects',
    href: '#projects',
    id: 'projects'
  }];
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (isOpen && !event.target.closest('nav') && !event.target.closest('button')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm py-4 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <nav className="flex items-center justify-between">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
            <a href="#" className="text-[#64ffda] font-mono text-xl flex items-center" aria-label="Logo">
              <span className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors text-2xl font-bold">
                T
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                C
              </span>
            </a>
          </motion.div>
          {/* Desktop Navigation */}
          <motion.ul className="hidden md:flex space-x-8 items-center" variants={navVariants} initial="hidden" animate="visible">
            {navItems.map((item, i) => <motion.li key={i} variants={itemVariants}>
                <a href={item.href} className={`text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 font-mono text-sm relative ${activeSection === item.id ? 'text-[#64ffda]' : ''}`}>
                  <span className="text-[#64ffda]">{`0${i + 1}. `}</span>
                  {item.name}
                  {activeSection === item.id && <motion.span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#64ffda]/30" layoutId="activeSection" />}
                </a>
              </motion.li>)}
            <motion.li variants={itemVariants}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-[#64ffda] text-[#64ffda] rounded px-4 py-2 hover:bg-[#64ffda]/10 transition-all duration-300 font-mono text-sm">
                Resume
              </a>
            </motion.li>
          </motion.ul>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#64ffda] z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div className="fixed inset-0 bg-[#112240]/90 backdrop-blur-md flex flex-col justify-center items-center md:hidden z-40" initial={{
        opacity: 0,
        x: '100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '100%'
      }} transition={{
        type: 'tween',
        duration: 0.3
      }}>
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => <motion.a key={i} href={item.href} className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 font-mono text-lg" onClick={() => setIsOpen(false)} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: i * 0.1
          }}>
                  <span className="text-[#64ffda] block text-center text-sm mb-1">{`0${i + 1}.`}</span>
                  {item.name}
                </motion.a>)}
              <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-[#64ffda] text-[#64ffda] rounded px-6 py-3 mt-4 hover:bg-[#64ffda]/10 transition-all duration-300 font-mono" onClick={() => setIsOpen(false)} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: navItems.length * 0.1
          }}>
                Resume
              </motion.a>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};