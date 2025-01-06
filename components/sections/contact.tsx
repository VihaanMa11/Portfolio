"use client";

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui/contact-form';
import { SocialLinks } from '@/components/ui/social-links';

export function Contact() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}