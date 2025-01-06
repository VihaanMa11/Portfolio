"use client";

import { motion } from 'framer-motion';
import { Code2, Globe, Server } from 'lucide-react';

const experiences = [
  {
    title: "Frontend Development",
    icon: Globe,
    description: "Specializing in building responsive and performant web applications using React and Next.js"
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Creating robust APIs and server-side applications with Node.js and modern databases"
  },
  {
    title: "UI/UX Design",
    icon: Code2,
    description: "Desinging clean and intuitive user interfaces with a focus on user experience"
  }
];

export function About() {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground">
            A passionate Full Stack Developer with a strong foundation in web technologies
            and a keen eye for creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border/50"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}