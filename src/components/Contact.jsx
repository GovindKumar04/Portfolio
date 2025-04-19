import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      {/* Header */}
      <motion.h1
        id="contact"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-8"
      >
        Get In <span className="text-blue-600">Touch</span>
      </motion.h1>

      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Info Section */}
        <motion.div
          className="contact_section text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-700">
            Don't be shy! Feel free to get in touch with me. I am always open
            to discuss new projects, creative ideas, or opportunities to be a
            part of your vision.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="contact_section w-full max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden Input for Web3Forms API Key */}
            <input
              type="hidden"
              name="access_key"
              value="cd1175c4-c526-4153-8e14-49100a4d8523"
            />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <motion.input
                type="text"
                name="First Name"
                className="px-4 py-2 border rounded-md w-full"
                placeholder="First Name"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="text"
                name="Last Name"
                className="px-4 py-2 border rounded-md w-full"
                placeholder="Last Name"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div className="space-y-4">
              <motion.input
                type="email"
                name="Email"
                id="email"
                className="px-4 py-2 border rounded-md w-full"
                placeholder="Your Email"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="text"
                name="Subject"
                id="subject"
                className="px-4 py-2 border rounded-md w-full"
                placeholder="Your Subject"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.textarea
                name="Message"
                id="message"
                className="px-4 py-2 border rounded-md w-full"
                placeholder="Your Message"
                rows="4"
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <motion.button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow-lg mt-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
