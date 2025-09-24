import React, { Children } from 'react';
import { motion } from 'framer-motion';
export const Skills = () => {
  const skillCategories = [{
    category: 'Languages & Frameworks',
    skills: [{
      name: 'Python',
      icon: '🐍'
    }, {
      name: 'React',
      icon: '⚛️'
    }, {
      name: 'Flutter/Dart',
      icon: '📱'
    }, {
      name: 'Java/Spring',
      icon: '☕'
    }]
  }, {
    category: 'Technologies',
    skills: [{
      name: 'AI/ML',
      icon: '🧠'
    }, {
      name: 'Firebase',
      icon: '🔥'
    }, {
      name: 'Blockchain',
      icon: '⛓️'
    }, {
      name: 'Big Data',
      icon: '📊'
    }]
  }];
  const container = {
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
  const item = {
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
  return <section id="skills" className="py-16">
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
            <span className="text-[#64ffda] font-mono mr-2">02.</span> Skills
          </h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </div>
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => <div key={categoryIndex}>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-6 pl-2 border-l-4 border-[#64ffda]">
                {category.category}
              </h3>
              <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            margin: '-100px'
          }}>
                {category.skills.map((skill, index) => <motion.div key={index} variants={item} className="bg-[#112240] p-6 rounded-md flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 border border-[#233554] hover:border-[#64ffda] group shadow-md hover:shadow-xl">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-[#ccd6f6] font-semibold group-hover:text-[#64ffda] transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </motion.div>)}
              </motion.div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[#8892b0] italic">
            "The capacity to learn is a gift; the ability to learn is a skill;
            the willingness to learn is a choice."
          </p>
          <p className="text-[#64ffda] mt-2 font-mono text-sm">
            — Brian Herbert
          </p>
        </div>
      </motion.div>
    </section>;
};