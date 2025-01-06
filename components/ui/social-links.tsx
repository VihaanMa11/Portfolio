"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center gap-6"
    >
      <a href="https://github.com/VihaanMa11" className="text-muted-foreground hover:text-foreground transition-colors">
        <Github className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/vihaan-malani-94557a320" className="text-muted-foreground hover:text-foreground transition-colors">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="vihaanmalani94@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
        <Mail className="w-6 h-6" />
      </a>
    </motion.div>
  );
}