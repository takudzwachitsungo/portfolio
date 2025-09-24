import React, { useCallback } from 'react';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Particles from '@tsparticles/react';
export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  return <Particles id="tsparticles" init={particlesInit} options={{
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#64ffda'
      },
      links: {
        color: '#64ffda20',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: false,
        speed: 0.5,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 40
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: {
          min: 1,
          max: 3
        }
      }
    },
    detectRetina: true
  }} className="fixed inset-0 -z-10" />;
};