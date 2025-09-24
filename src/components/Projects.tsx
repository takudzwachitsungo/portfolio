import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'AI-Driven Retail Analytics System',
    description: 'Developed a people detection and footfall tracking system for retail stores. Implemented object tracking algorithms (Euclidean Distance Tracker) to count customers in real time and designed analytics dashboards for decision-making.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    github: '#',
    external: '#',
    tech: ['Python', 'OpenCV', 'YOLOv8', 'Streamlit']
  }, {
    title: 'Mental Wellness AI Companion',
    description: 'Built an AI-powered mobile app to support individuals facing depression and stress. Features include AI therapy chat sessions, blogs, quotes, motivational content, and community sections for sharing stories and making connections.',
    image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    github: '#',
    external: '#',
    tech: ['Flutter', 'OpenAI API', 'Firebase']
  }, {
    title: 'Electric Fault Reporting App',
    description: 'Designed a mobile app that allows citizens to report electric faults to ZESA. Features include real-time navigation to the nearest office, form submissions for queries, and modern UI with splash and onboarding screens.',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    github: '#',
    external: '#',
    tech: ['Flutter', 'Google Maps API', 'Firebase']
  }, {
    title: 'Web3 Crowdfunding Platform',
    description: 'Built a decentralized crowdfunding system where project managers can launch campaigns. Integrated cryptocurrency payments and NFT rewards for global contributors, with features for campaign creation and wallet authentication.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    github: '#',
    external: '#',
    tech: ['Django', 'PostgreSQL', 'Blockchain', 'Smart Contracts']
  }];
  return <section id="projects" className="py-24">
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
        <div className="flex items-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mr-4 whitespace-nowrap">
            <span className="text-[#64ffda] font-mono mr-2">04.</span> Some
            Things I've Built
          </h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </div>
        <div className="space-y-12">
          {projects.map((project, i) => <motion.div key={i} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: i * 0.1
        }} viewport={{
          once: true,
          margin: '-50px'
        }} className="group">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Project Image */}
                <div className="md:w-72 flex-shrink-0">
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md">
                    <div className="relative aspect-video bg-[#112240] overflow-hidden rounded-md">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </a>
                </div>
                {/* Project Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-semibold text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                      <ExternalLink size={18} className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                  <p className="text-[#8892b0] mb-4">{project.description}</p>
                  {project.stats && <div className="flex items-center gap-1.5 text-[#8892b0] mb-4 font-mono text-sm">
                      <Star size={16} className="text-[#64ffda]" />
                      <span>{project.stats}</span>
                    </div>}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((tech, j) => <span key={j} className="px-3 py-1 text-xs rounded-full font-mono" style={{
                  backgroundColor: getTagColor(tech).bg,
                  color: getTagColor(tech).text
                }}>
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">
            View Full Project Archive
            <ExternalLink size={16} className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </motion.div>
    </section>;
};
// Helper function to get tag colors based on tech
function getTagColor(tech: string) {
  const colors = {
    React: {
      bg: 'rgba(97, 218, 251, 0.1)',
      text: '#61DAFB'
    },
    Express: {
      bg: 'rgba(68, 68, 68, 0.1)',
      text: '#FFFFFF'
    },
    Python: {
      bg: 'rgba(55, 118, 171, 0.1)',
      text: '#3776AB'
    },
    OpenCV: {
      bg: 'rgba(92, 183, 90, 0.1)',
      text: '#5CB75A'
    },
    YOLOv8: {
      bg: 'rgba(255, 87, 51, 0.1)',
      text: '#FF5733'
    },
    Streamlit: {
      bg: 'rgba(255, 77, 79, 0.1)',
      text: '#FF4D4F'
    },
    Django: {
      bg: 'rgba(43, 121, 107, 0.1)',
      text: '#2B796B'
    },
    PostgreSQL: {
      bg: 'rgba(51, 103, 145, 0.1)',
      text: '#336791'
    },
    Blockchain: {
      bg: 'rgba(240, 142, 53, 0.1)',
      text: '#F08E35'
    },
    'Smart Contracts': {
      bg: 'rgba(139, 82, 255, 0.1)',
      text: '#8B52FF'
    },
    Flutter: {
      bg: 'rgba(69, 208, 250, 0.1)',
      text: '#45D0FA'
    },
    'OpenAI API': {
      bg: 'rgba(16, 163, 127, 0.1)',
      text: '#10A37F'
    },
    Firebase: {
      bg: 'rgba(255, 202, 40, 0.1)',
      text: '#FFCA28'
    },
    'Spotify API': {
      bg: 'rgba(30, 215, 96, 0.1)',
      text: '#1ED760'
    },
    Heroku: {
      bg: 'rgba(79, 45, 127, 0.1)',
      text: '#4F2D7F'
    }
  };
  return colors[tech] || {
    bg: 'rgba(100, 255, 218, 0.1)',
    text: '#64ffda'
  };
}