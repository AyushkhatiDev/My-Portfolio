import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

export const Hero = () => {
  const { docX, docY } = useMousePosition();

  const calculateTransform = (x: number, y: number, factor: number = 1) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (x - centerX) * 0.01 * factor;
    const moveY = (y - centerY) * 0.01 * factor;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 via-slate-900/50 to-slate-900/80 backdrop-blur-sm" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/147798091/abstract-5165.mp4?width=1280&hash=4c0f1f9c0c9c0c0f1f9c0c9c0c0f1f9c0c9c0c0f"
            type="video/mp4"
          />
        </video>
      </div>
      
      {/* Animated Gradient Orbs */}
      <div 
        style={{ transform: calculateTransform(docX, docY, 0.5) }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl mix-blend-soft-light"
      />
      <div 
        style={{ transform: calculateTransform(docX, docY, -0.5) }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl mix-blend-soft-light"
      />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl font-bold text-white mb-4 text-center relative"
      >
        Ayush Khati
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-2xl text-indigo-200 mb-8 text-center relative"
      >
        Full Stack Developer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex gap-6"
      >
        {[
          { Icon: GithubIcon, href: 'https://github.com/AyushkhatiDev', label: 'GitHub' },
          { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ayush-khati-8a342821b/', label: 'LinkedIn' },
          { Icon: Mail, href: 'mailto:ayushiskhati305@gmail.com', label: 'Email' },
        ].map(({ Icon, href, label }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg group relative"
          >
            <Icon className="w-6 h-6 text-white group-hover:text-indigo-300 transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};