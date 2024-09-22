// import React from 'react';
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section className="py-8" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-3xl font-bold"
      >
        Education
      </motion.h2>
      <div className="space-y-8 p-14">
        {" "}
        {/* Adjusted max-width for less margin */}
        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            key={index}
            className="mb-6 rounded-xl border border-stone-50/30 bg-white/10 p-6" // Added border and background
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
