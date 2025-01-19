import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', progress: 90, Icon: Palette },
  { name: 'Backend Development', progress: 85, Icon: Terminal },
  { name: 'System Architecture', progress: 80, Icon: Code2 },
];

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-slate-600 dark:text-slate-300 mb-12 text-center"
        >
          I'm a passionate developer with expertise in building modern web applications.
          With years of experience in both frontend and backend development,
          I create scalable solutions that solve real-world problems.
        </motion.p>

        <div className="grid gap-8">
          {skills.map(({ name, progress, Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                  {name}
                </h3>
              </div>
              
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-indigo-600 dark:bg-indigo-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};