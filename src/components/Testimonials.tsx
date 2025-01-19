import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    // role: 'Product Manager at TechCorp',
    // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'Working with Ayush was an absolute pleasure. Their technical expertise and ability to deliver high-quality solutions consistently impressed our entire team.',
  },
  {
    name: 'John Doe',
    // role: 'CTO at StartupX',
    // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    content: 'Ayush demonstrated exceptional problem-solving skills and attention to detail. They were instrumental in the success of our project.',
  },
  {
    name: 'John Doe',
    // role: 'Lead Developer at InnovateLab',
    // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: 'Their deep understanding of modern web technologies and best practices helped us create a robust and scalable application.',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Client Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-200 dark:text-indigo-900" />
              
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};