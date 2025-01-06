"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Settings } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "React, HTML & CSS",
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Node.js, MongoDB",
  },
  {
    title: "Tools & Methods",
    icon: Settings,
    description: "Git, Figma",
  },
  {
    title: "Languages",
    icon: Code2,
    description: "JavaScript, C++, Python",
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-accent">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}