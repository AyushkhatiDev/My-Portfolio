import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Web Developer',
    company: 'Cognifyz Technologies',
    location: 'Remote',
    period: '2023 August - September',
    description: [
      'Built a modern Landing Page for Company using HTML, CSS, JS, BOOTSTRAP', 
      // 'Implemented microservices architecture reducing system latency by 40%',
      // 'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Frontend Developer',
    company: '5ELM',
    location: 'Remote',
    period: '2024 - 2025',
    description: [
      'Developing a front-end for a web application using React, Next.js, and Tailwind CSS',
      // 'Optimized database queries improving application performance by 50%',
      // 'Collaborated with design team to implement responsive UI/UX',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-indigo-200 dark:bg-indigo-900" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`w-5/12 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                    {experience.company}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};