import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-24">
      <motion.div initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} viewport={{
      once: true,
      margin: '-100px'
    }} className="max-w-xl mx-auto text-center">
        <p className="font-mono text-[#64ffda] mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">
          Get In Touch
        </h2>
        <p className="text-[#8892b0] mb-12">
          I'm currently open to new opportunities and collaborations. Whether
          you're looking for a developer for your project, have a question about
          my work, or just want to connect, my inbox is always open!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.3
        }}>
            <a href="mailto:hello@takudzwachitsungo.com" className="inline-flex items-center gap-2 border border-[#64ffda] text-[#64ffda] rounded px-8 py-4 font-mono hover:bg-[#64ffda]/10 transition-all duration-300">
              <Mail size={18} />
              <span>Send Email</span>
            </a>
          </motion.div>
          <motion.div whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.3
        }}>
            <a href="https://www.linkedin.com/in/takudzwachitsungo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#64ffda]/10 text-[#64ffda] rounded px-8 py-4 font-mono hover:bg-[#64ffda]/20 transition-all duration-300">
              <span>LinkedIn</span>
              <Send size={18} className="-rotate-45" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>;
};