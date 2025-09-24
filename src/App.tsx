import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
export function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return <div className="bg-background text-[#8892b0] min-h-screen w-full overflow-x-hidden">
      <ParticleBackground />
      <AnimatePresence mode="wait">
        {isLoading ? <Loader key="loader" /> : <>
            <Navigation />
            <main className="container mx-auto px-6 md:px-24 lg:px-36 xl:px-48 relative z-10">
              <Hero />
              <About />
              <Experience />
              <Projects />
            </main>
            <Footer />
          </>}
      </AnimatePresence>
    </div>;
}