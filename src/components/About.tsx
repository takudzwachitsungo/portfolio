import React from 'react';
import { motion } from 'framer-motion';
export const About = () => {
  return <section id="about" className="py-24">
      <motion.div initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} viewport={{
      once: true,
      margin: '-100px'
    }}>
        <div className="flex items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mr-4 whitespace-nowrap">
            <span className="text-[#64ffda] font-mono mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <div className="space-y-4 text-[#8892b0]">
              <p className="text-lg">
                I'm a . My expertise spans across <span className="text-[#64ffda]">web development</span>,{' '}
                <span className="text-[#64ffda]">mobile applications</span>, and{' '}
                <span className="text-[#64ffda]">AI-driven systems</span>.
              </p>
              <p>
                I have hands-on experience building scalable applications across multiple domains, including{' '}
                <span className="text-[#64ffda]">retail analytics</span>,{' '}
                <span className="text-[#64ffda]">enterprise systems</span>,{' '}
                <span className="text-[#64ffda]">digital wellness</span>, and{' '}
                <span className="text-[#64ffda]">smart utilities</span>. My technical background is complemented 
                by a solid understanding of business processes, allowing me to create solutions that are both 
                technically sound and strategically impactful.
              </p>
              <p>
                I am passionate about emerging technologies and continuously explore opportunities in AI, 
                machine learning, blockchain, and smart enterprise systems to drive digital transformation 
                in business and society.
              </p>
              <div className="mt-6">
                <h3 className="text-[#ccd6f6] font-semibold mb-3">
                  Technologies I work with:
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {['Python', 'React', 'Flutter/Dart', 'Java/Spring', 'Firebase', 'AI/ML', 'PostgreSQL', 'Blockchain'].map((tech, i) => <li key={i} className="flex items-start">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span className="font-mono text-sm">{tech}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative group">
            <div className="relative z-10">
              <div className="relative rounded overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[#64ffda] opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img src="https://tinyurl.com/kpd5cm7c" alt="Takudzwa Chitsungo" className="rounded grayscale group-hover:grayscale-0 transition-all duration-300 z-0 hover:scale-105" />
              </div>
            </div>
            <div className="absolute -inset-1.5 border border-[#64ffda] rounded translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
          </div>
        </div>
      </motion.div>
    </section>;
};