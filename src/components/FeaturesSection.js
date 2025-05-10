// src/components/FeaturesSection.js
import { motion } from "framer-motion";
import { FaBrain, FaBolt, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered",
    description: "Advanced algorithms analyze your resume to detect profession type with precision.",
  },
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    description: "Processes your resume in under 3 seconds — no lag, just results.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Effortless Upload",
    description: "Drag and drop your resume or upload it seamlessly with one click.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="mt-24 px-6 w-full max-w-6xl mx-auto z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white drop-shadow-lg">
        Why Choose <span className="text-purple-400">SkillSiftCV</span>?
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden bg-white/10 border border-purple-700/30 rounded-3xl p-8 text-center shadow-lg backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-purple-400"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Hover glow animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl" />

            {/* Icon */}
            <div className="text-5xl text-purple-300 mb-6 group-hover:animate-pulse group-hover:text-white transition duration-300">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-purple-200 text-base leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
