import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCode, FaNetworkWired } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "Data Structures & Algorithms - Self Paced",
      description: "230-hour course on Data Structures and Algorithms from GeeksforGeeks.",
      tags: ["GeeksforGeeks", "DSA", "Self Paced"],
      link: "https://media.geeksforgeeks.org/courses/certificates/415da4e3d2c0746cf1021f37cb724437.pdf",
      icon: <FaCertificate className="inline-block mr-2 text-green-600" />,
    },
    {
      title: "Static Routing Configuration",
      description: "Completed a Coursera project on Static Routing using Packet Tracer.",
      tags: ["Coursera", "Networking", "Packet Tracer"],
      link: "https://coursera.org/verify/3VBDTR5TRKGZ",
      icon: <FaNetworkWired className="inline-block mr-2 text-indigo-600" />,
    },
    {
      title: "Mastering DSA using C & C++",
      description: "Completed 58.5 hours course on mastering DSA using C and C++ on Udemy.",
      tags: ["Udemy", "C/C++", "DSA"],
      link: "https://ude.my/UC-477bc6fe-b01f5-495c-a215-b04ce24cdbab",
      icon: <FaCode className="inline-block mr-2 text-purple-600" />,
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Certificates</span>
      </motion.h1>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {cert.icon}
              {cert.title}
            </motion.h2>
            <p className="text-gray-600 mb-4">{cert.description}</p>
            <div className="flex justify-center flex-wrap gap-2 mb-4">
              {cert.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-600 text-sm py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.a
              href={cert.link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              View Certificate
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
