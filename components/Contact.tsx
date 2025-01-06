"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-accent">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m currently available for freelance work and Part-time positions.
            If you have a project that you want to get started or think you need my help
            with something, then get in touch.
          </p>
          <a
            href="mailto:vihaanmalani94@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity mb-12"
          >
            Send Message
          </a>
          <div className="flex justify-center gap-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}