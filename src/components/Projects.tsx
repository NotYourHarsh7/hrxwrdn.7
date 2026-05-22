import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, ChevronRight, Layers } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

// Custom brand icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block font-mono text-sm text-purple-400 mb-2">{'// my work'}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Each project represents a unique challenge solved with creative engineering and modern technologies.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white bg-surface-light/50 border border-gray-800 hover:border-purple-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-5 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectProject(project)}
              >
                {/* Card with gradient border on hover */}
                <div className="relative bg-surface-light border border-gray-800 group-hover:border-transparent rounded-2xl overflow-hidden transition-all duration-500">
                  {/* Gradient border effect */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Thumbnail */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-surface-light/50 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white backdrop-blur-md"
                        style={{ backgroundColor: `${project.color}33`, borderColor: `${project.color}55`, borderWidth: 1 }}
                      >
                        <Layers className="w-3 h-3" />
                        {project.category}
                      </span>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <span className="px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono text-gray-300 bg-black/30 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    {/* Hover overlay with "View Project" */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-purple-600/20 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredId === project.id ? 0 : 20,
                          opacity: hoveredId === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        View Project
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-400 font-medium mt-0.5">{project.subtitle}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 line-clamp-2">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-surface/50 text-gray-400 border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-800">
                      <span className="text-xs text-gray-500 font-medium">{project.role}</span>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
