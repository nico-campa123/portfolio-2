import React from 'react';
import { motion } from 'framer-motion';

export function Contact(): React.ReactElement {
  return (
    <section id="contact" className="section-spacing bg-black text-white">
      <div className="container-responsive">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-4"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-2xl"
        >
          Let’s connect. I’m open to opportunities, collaborations, and interesting ideas.
        </motion.p>
        <div className="mt-10 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">My Links</h3>
            <div className="mt-6 flex gap-4">
              <a href="https://github.com/your-username" className="underline text-white/85 hover:text-white" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:you@example.com" className="underline text-white/85 hover:text-white">
                Email
              </a>
              <a href="#" className="underline text-white/85 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            <form className="grid grid-cols-1 gap-6">
              <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white" />
              <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white" />
              <textarea placeholder="Your Message" rows={5} className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"></textarea>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


