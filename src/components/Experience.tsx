import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "University of Zimbabwe",
      title: "Honours Student",
      period: "2020 - 2024",
      duties: [
        "Graduated with Upper Second Class Honours in Business Management Systems Designs and Applications",
        "Focus on integrating business processes with technological solutions",
        "Developing expertise in system design and business applications"
      ]
    },
    {
      company: "CICOSY ZIMBABWE",
      title: "Software Developer",
      period: "Aug 2023 - Present",
      duties: [
        "Develop and maintain enterprise software solutions using Java and Spring MVC",
        "Design and implement scalable web applications and microservices",
        "Collaborate with cross-functional teams to deliver high-quality software solutions"
      ]
    },
    {
      company: "iZone Hub",
      title: "Programme Facilitator",
      period: "Jun 2022 - Present",
      duties: [
        "Lead technology workshops and training sessions for aspiring developers",
        "Develop and execute project plans for tech education initiatives",
        "Coordinate and manage tech-focused events and programming workshops"
      ]
    },
    {
      company: "Crossroads Recruitment Experts",
      title: "Graphic Designer",
      period: "May 2023 - Jul 2023",
      duties: [
        "Created professional visual designs using Adobe Photoshop and CorelDRAW",
        "Developed branding materials and marketing collateral",
        "Collaborated with recruitment team to design engaging job postings and company profiles"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mr-4 whitespace-nowrap">
                <span className="text-[#64ffda] font-mono mr-2">03.</span> Education
              </h2>
              <div className="h-px bg-[#233554] flex-grow" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#112240]/20 rounded-md p-6 hover:bg-[#112240]/40 transition-colors duration-300"
            >
              <h3 className="text-xl text-[#ccd6f6] mb-1 flex flex-wrap items-center gap-2">
                <span className="font-semibold">{experiences[0].title}</span>
                <span className="text-[#64ffda]">@ {experiences[0].company}</span>
              </h3>
              <p className="font-mono text-sm text-[#8892b0] mb-6">{experiences[0].period}</p>
              <ul className="space-y-4">
                {experiences[0].duties.map((duty, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-[#64ffda] mr-2 mt-1.5"></span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Work Experience Column */}
          <div>
            <div className="flex items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mr-4 whitespace-nowrap">
                <span className="text-[#64ffda] font-mono mr-2">04.</span> Work Experience
              </h2>
              <div className="h-px bg-[#233554] flex-grow" />
            </div>
            <div className="space-y-12">
              {experiences.slice(1).map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#112240]/20 rounded-md p-6 hover:bg-[#112240]/40 transition-colors duration-300"
                >
                  <h3 className="text-xl text-[#ccd6f6] mb-1 flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{exp.title}</span>
                    <span className="text-[#64ffda]">@ {exp.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-[#8892b0] mb-6">{exp.period}</p>
                  <ul className="space-y-4">
                    {exp.duties.map((duty, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-[#64ffda] mr-2 mt-1.5"></span>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};