import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2, Copy, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'harshwardhanahlawat964@gmail.com', href: 'mailto:harshwardhanahlawat964@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Delhi,IN', href: '#' },
  { icon: Phone, label: 'Phone', value: '+91 7302307918', href: 'tel:+917302307918' },
];

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/NotYourHarsh7', handle: '@NotYourHarsh7' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshwardhanahlawat/', handle: '/in/Harshwardhan Ahlawat' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/notyourharsh_.7?igsh=ODA0aDFxdXMzaTEy', handle: '@notyourharsh_.7' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('alex@alexchen.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block font-mono text-sm text-purple-400 mb-2">{'// contact'}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5 sm:space-y-6"
          >
            {/* Contact details */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-light/50 border border-gray-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Get In Touch</h3>
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <info.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-sm font-medium text-white">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Quick copy email */}
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dashed border-gray-700 text-sm text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy email address
                  </>
                )}
              </button>
            </div>

            {/* Social links */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-light/50 border border-gray-800 space-y-3">
              <h3 className="text-lg font-bold text-white">Socials</h3>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <social.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{social.label}</p>
                      <p className="text-xs text-gray-500">{social.handle}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-sm font-semibold text-green-400">Available for work</span>
              </div>
              <p className="text-xs text-gray-400">
                I'm currently accepting new projects and freelance opportunities. Let's discuss your next big idea!
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 rounded-2xl bg-surface-light/50 border border-gray-800 space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-800 text-white text-sm placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-800 text-white text-sm placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-800 text-white text-sm placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-800 text-white text-sm placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 focus:outline-none transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all disabled:opacity-70 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Message Sent!
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
