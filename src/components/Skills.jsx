import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      staggerChildren: 0.5, // Delays each child element
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
      {/* Outer Margin */}
      <motion.div
        initial="hidden" // Set initial hidden state for container
        whileInView="visible" // Animate when in view
        variants={containerVariants} // Apply container variants
        viewport={{ once: true }} // Ensure animation happens only once
        className="mx-6 lg:mx-20 flex flex-col rounded-3xl px-12 py-6 border border-stone-50/30"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants} // Apply item-specific animation
            className={`py-6 flex items-center justify-between ${
              index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            <div className="flex items-center">
              {skill.icon} {/* Ensure skill.icon is valid JSX */}
              <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-xl">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
