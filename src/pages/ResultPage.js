import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaChevronLeft } from "react-icons/fa"; // Importing React Icons

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

const professions = [
  {
    name: "Software Engineer",
    description:
      "A software engineer designs, develops, and maintains software systems. They are problem solvers and innovators, creating applications that drive technology forward.",
  },
  {
    name: "Data Scientist",
    description:
      "Data scientists analyze large sets of data to uncover insights and help businesses make informed decisions. They excel at interpreting complex data patterns and building predictive models.",
  },
  {
    name: "UI/UX Designer",
    description:
      "UI/UX designers focus on creating beautiful and user-friendly interfaces. They ensure that digital experiences are intuitive, accessible, and enjoyable for users.",
  },
  {
    name: "Product Manager",
    description:
      "A product manager oversees the development and lifecycle of a product. They bridge the gap between engineering, design, and marketing teams to deliver the best product possible.",
  },
  {
    name: "Cybersecurity Analyst",
    description:
      "Cybersecurity analysts protect systems, networks, and data from cyber threats. They identify vulnerabilities and implement security measures to safeguard sensitive information.",
  },
];

export default function ResultPage() {
  const [profession, setProfession] = useState("");
  const [spinnerProfession, setSpinnerProfession] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const random = Math.floor(Math.random() * professions.length);
    const timeout = setTimeout(() => {
      setProfession(professions[random]);
      setLoading(false);
    }, 4000); // Spinner effect runs for 4 seconds before stopping on the correct profession

    const spinnerInterval = setInterval(() => {
      const randomSpinner =
        professions[Math.floor(Math.random() * professions.length)];
      setSpinnerProfession(randomSpinner.name);
    }, 200); // Change profession every 200ms

    return () => {
      clearTimeout(timeout);
      clearInterval(spinnerInterval); // Clear the interval when the component unmounts or the effect ends
    };
  }, []);

  const handleAddAnotherCV = () => {
    navigate("/upload"); // Navigates to the upload page
  };

  const handleHomeClick = () => {
    navigate("/"); // Navigates to the landing page
  };

  const handleBackClick = () => {
    navigate("/upload"); // Navigates to the upload page
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 text-white flex flex-col justify-center items-center px-6 relative"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Top left buttons with React Icons */}
      <div className="absolute top-16 left-6 flex space-x-6">
        <button
          onClick={handleHomeClick}
          className="bg-[#44576D] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#617b8a] flex items-center space-x-2 transform transition duration-300 ease-in-out"
        >
          <FaHome className="text-2xl" />
          <span className="text-xl">Home</span>
        </button>
        <button
          onClick={handleBackClick}
          className="bg-[#44576D] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#617b8a] flex items-center space-x-2 transform transition duration-300 ease-in-out"
        >
          <FaChevronLeft className="text-2xl" />
          <span className="text-xl">Back</span>
        </button>
      </div>

      <h2 className="text-4xl font-bold mb-6 text-center">
        🎉 Profession Detected 🎉
      </h2>

      {loading ? (
        <motion.div
          className="mt-6 px-12 py-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl shadow-xl backdrop-blur-lg text-4xl font-bold text-white flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 1,
            },
          }}
        >
          {/* Fade effect between professions */}
          <motion.p
            className="text-center text-3xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            key={spinnerProfession} // Ensures that profession changes smoothly
          >
            {spinnerProfession}
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="mt-6 px-12 py-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl shadow-xl backdrop-blur-lg text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 1,
            },
          }}
        >
          <motion.p
            className="text-center text-3xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            {profession.name}
          </motion.p>
        </motion.div>
      )}

      {/* Profession Description */}
      <motion.div
        className="mt-8 px-8 py-6 bg-white/10 border border-gray-400/30 rounded-2xl backdrop-blur-lg shadow-xl text-lg text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        <h3 className="text-2xl font-semibold mb-4">
          Key Qualities of a {profession.name}:
        </h3>
        <p>{profession.description}</p>
      </motion.div>

      {/* Add Another CV Button */}
      <button
        onClick={handleAddAnotherCV}
        className="mt-8 px-8 py-4 bg-gray-700 text-white font-semibold text-xl rounded-full shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105"
      >
        Add Another CV
      </button>
      <p className="absolute bottom-4 text-sm text-gray-400 z-10">
        © 2025 SkillSiftCV. All rights reserved.
      </p>
    </motion.div>
  );
}
