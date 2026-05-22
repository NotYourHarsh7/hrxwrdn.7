import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, MapPin, Calendar } from 'lucide-react';

interface AcademicItem {
  id: number;
  institution: string;
  focus: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  techUsed: string[];
  color: string;
}

const academicHighlights: AcademicItem[] = [
  {
    id: 1,
    institution: 'Delhi Technological University (DTU)',
    focus: 'Electronics & VLSI Design Engineering',
    location: 'Delhi, India',
    period: '2025 – 2029 (Expected)',
    description: 'Pursuing undergraduate degree with a focus on hardware design, embedded systems, and signal processing.',
    achievements: [
      'Active member of robotics and electronics technical societies',
      'Exploring advanced microcontrollers and PCB design',
      'Coursework in Digital Electronics and C Programming'
    ],
    techUsed: ['C/C++', 'Arduino', 'Digital Logic', 'Circuit Design'],
    color: '#7c3aed',
  },
];

function AcademicCard({ item, index, isInView }: { item: AcademicItem; index: number; isInView: boolean }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      className="relative"
    >
      <div
        className={`relative rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
          isExpanded
            ? 'bg-surface-light/70 border-purple-500/30 shadow-lg shadow-purple-500/5'
            : 'bg-surface-light/30 border-gray-800 hover:border-gray-700'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
          <div
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${item.color}20` }}
          >
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">{item.focus}</h3>
                <p className="text-sm sm:text-base font-medium" style={{ color: item.color }}>{item.institution}</p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 mt-1"
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                {item.period}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                {item.location}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-0 space-y-4">
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
                <div>
                  <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Highlights</h4>
                  <div className="space-y-2">
                    {item.achievements.map((a, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1 text-xs">▸</span>
                        <span className="text-xs sm:text-sm text-gray-400">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block font-mono text-sm text-purple-400 mb-2">{'// academics'}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Academic{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {academicHighlights.map((item, i) => (
            <AcademicCard key={item.id} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
