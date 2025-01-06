"use client";

import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
    color: string;
  };
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-lg bg-card border border-border/50"
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl" style={{ color: skill.color }}>
          {skill.icon}
        </span>
        <span className="font-medium">{skill.name}</span>
      </div>
    </motion.div>
  );
}