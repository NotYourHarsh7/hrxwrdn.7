import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  Layers,
  X,
} from 'lucide-react';
import { type Project } from '../data/projects';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen py-20 sm:py-28"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: `${project.color}33`, borderColor: `${project.color}55`, borderWidth: 1 }}
            >
              <Layers className="w-3 h-3" />
              {project.category}
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-purple-400 font-medium">{project.subtitle}</p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-5 sm:mt-6">
            {[
              { icon: User, label: 'Role', value: project.role },
              { icon: Clock, label: 'Duration', value: project.duration },
              { icon: Calendar, label: 'Year', value: project.year },
            ].map((meta) => (
              <div key={meta.label} className="flex items-center gap-2 text-sm text-gray-400">
                <meta.icon className="w-4 h-4 text-purple-400" />
                <span className="text-gray-500">{meta.label}:</span>
                <span className="text-white font-medium">{meta.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 sm:mb-16"
        >
          {/* Main image */}
          <div
            className="relative rounded-2xl overflow-hidden bg-surface-light border border-gray-800 group cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                src={project.images[activeImageIndex]}
                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                className="w-full h-64 sm:h-80 md:h-[480px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-xs text-white font-mono">
              {activeImageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`relative rounded-xl overflow-hidden flex-1 h-16 sm:h-20 border-2 transition-all cursor-pointer ${
                  activeImageIndex === i
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                    : 'border-gray-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main content - 2 cols */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-5 sm:p-8 rounded-2xl bg-surface-light/50 border border-gray-800"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{project.longDescription}</p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-5 sm:p-8 rounded-2xl bg-surface-light/50 border border-gray-800"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                The Challenge
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-5 sm:p-8 rounded-2xl bg-surface-light/50 border border-gray-800"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                The Solution
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-5 sm:p-8 rounded-2xl bg-surface-light/50 border border-gray-800"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-surface/30 border border-gray-800/50 hover:border-purple-500/20 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 sm:space-y-6">
            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-surface-light border border-gray-700 text-white font-semibold text-sm sm:text-base hover:border-purple-500/30 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GithubIcon className="w-4 h-4" />
                View Source Code
              </motion.a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-5 sm:p-6 rounded-2xl bg-surface-light/50 border border-gray-800"
            >
              <h3 className="font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-5 sm:p-6 rounded-2xl bg-surface-light/50 border border-gray-800"
            >
              <h3 className="font-bold text-white mb-4">Project Info</h3>
              <div className="space-y-3">
                {[
                  { label: 'Role', value: project.role, icon: User },
                  { label: 'Duration', value: project.duration, icon: Clock },
                  { label: 'Year', value: project.year, icon: Calendar },
                  { label: 'Category', value: project.category, icon: Layers },
                ].map((info) => (
                  <div key={info.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <info.icon className="w-3.5 h-3.5" />
                      {info.label}
                    </div>
                    <span className="text-white font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Color accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative overflow-hidden p-5 sm:p-6 rounded-2xl border border-gray-800"
              style={{ background: `linear-gradient(135deg, ${project.color}15, transparent)` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl" style={{ backgroundColor: `${project.color}30` }} />
              <h3 className="font-bold text-white mb-2">Interested in a similar project?</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">Let's discuss how I can help bring your ideas to life.</p>
              <motion.button
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                style={{ backgroundColor: project.color }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <motion.img
              key={activeImageIndex}
              src={project.images[activeImageIndex]}
              alt=""
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
