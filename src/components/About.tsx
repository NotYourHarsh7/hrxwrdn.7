import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Zap, Coffee, MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Embedded Systems', desc: 'Designing hardware-software systems' },
  { icon: Palette, label: 'Edge AI', desc: 'AI inference on low-power devices' },
  { icon: Zap, label: 'PCB Designing', desc: 'Creating custom hardware circuits' },
  { icon: Coffee, label: 'AI Model Integration', desc: 'Deploying AI on edge hardware' },
];

const timeline = [
  { year: '2025', title: 'Learning Embedded Systems', place: 'Self', icon: Briefcase },
  { year: '2025', title: 'B.Tech in Electronics', place: 'DTU', icon: GraduationCap },
  { year: '2024', title: 'AISSCE', place: 'SRDAV', icon: GraduationCap },
  { year: '2022', title: 'AISSE', place: 'SFS', icon: GraduationCap },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="inline-block font-mono text-sm text-purple-400 mb-2">{'// about me'}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Turning Ideas Into{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="gradient-border p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full rounded-2xl bg-surface-light overflow-hidden flex items-center justify-center">
                      <img
                        src="/images/profile.jpg"
                        alt="Harshwardhan Ahlawat"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-surface-light flex items-center justify-center">
                    <span className="text-[8px] sm:text-[10px]">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Harshwardhan Ahlawat</h3>
                  <p className="text-purple-400 font-medium">Electronics Engineering Student</p>
                  <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>DTU, Delhi, India</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm an incoming 2nd-year Electronics Engineering student at DTU with a deep fascination for the hardware-software interface.
                  My core interests lie in embedded systems, low-level programming, and edge AI.
                </p>
                <p>
                  I love bringing concepts to life, whether it's by optimizing microcontrollers or designing complex systems. 
                  Always eager to learn more about the intersection of AI, hardware design, and efficient computing.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 pt-6 border-t border-gray-800">
                {[
                  { label: 'Commits', value: '12K+' },
                  { label: 'PRs Merged', value: '850+' },
                  { label: 'Stars', value: '2.5K' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2">
              {['Embedded Systems', 'Edge AI', 'AI/ML', 'Microcontrollers', 'Microprocessors', 'Low-Level Programming', 'Systems Design'].map((tag) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right column - highlights & what I love */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group p-4 sm:p-5 rounded-2xl bg-surface-light/50 border border-gray-800 hover:border-purple-500/30 transition-all cursor-default"
                  whileHover={{ scale: 1.03, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-3 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-colors">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{item.label}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* What I love section */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-light/50 border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-pink-400" />
                <h4 className="font-semibold text-white">What Drives Me</h4>
              </div>
              <div className="space-y-3">
                {[
                  { emoji: '🚀', text: 'Building products that make a difference' },
                  { emoji: '🎨', text: 'Crafting pixel-perfect, accessible designs' },
                  { emoji: '🤝', text: 'Bonding with Homies' },
                  { emoji: '🌍', text: 'Contributing to the open-source community' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="text-lg">{item.emoji}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini timeline */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-light/50 border border-gray-800">
              <h4 className="font-semibold text-white mb-4">Journey</h4>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px h-full min-h-[20px] bg-gray-800 mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <span className="text-xs font-mono text-cyan-400">{item.year}</span>
                      <h5 className="text-sm font-medium text-white">{item.title}</h5>
                      <p className="text-xs text-gray-500">{item.place}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
