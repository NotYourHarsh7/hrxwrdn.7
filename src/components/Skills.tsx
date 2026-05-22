import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Embedded Systems',
    emoji: '⚙️',
    skills: ['ESP32 / ESP-IDF', 'Microcontrollers', 'Sensor Integration', 'UART / I2C / SPI', 'Embedded C/C++'],
  },
  {
    title: 'Edge AI & Robotics',
    emoji: '🤖',
    skills: ['TinyML', 'Computer Vision', 'Autonomous Systems', 'Robotics', 'AI Inference'],
  },
  {
    title: 'Programming & Development',
    emoji: '🛠️',
    skills: ['C/C++', 'Python', 'Git / GitHub', 'Linux', 'Bash'],
  },
  {
    title: 'Tools & Platforms',
    emoji: '🔧',
    skills: ['Linux', 'VS Code', 'KiCad', 'Arduino IDE', 'PlatformIO'],
  },
  {
    title: 'Electronics & Hardware',
    emoji: '⚡',
    skills: ['Circuit Design', 'PCB Prototyping', 'Power Systems', 'Motor Drivers', 'FPV Systems'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block font-mono text-sm text-purple-400 mb-2">{'// skills'}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15 }}
              className="p-5 sm:p-6 rounded-2xl bg-surface-light/50 border border-gray-800 hover:border-purple-500/20 transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <span className="text-xl sm:text-2xl">{cat.emoji}</span>
                <h3 className="text-base sm:text-lg font-bold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
