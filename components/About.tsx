"use client";

import Image from 'next/image';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/my-image.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I&apos;m a passionate Full Stack Developer with expertise in modern web technologies.
              I specialize in creating responsive, user-friendly applications that solve real-world problems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Location:</span>
                <span className="text-muted-foreground">Available for Remote Work</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">Experience:</span>
                <span className="text-muted-foreground">3+ Years</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">Email:</span>
                <span className="text-muted-foreground">contact@example.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}