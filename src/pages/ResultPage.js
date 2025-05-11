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
    name: "Advocate",
    description:
      "Advocates represent clients in legal proceedings and offer expert legal advice and interpretation.",
  },
  {
    name: "Arts",
    description:
      "Arts professionals express creativity through various media, including visual, performing, and literary forms.",
  },
  {
    name: "Automation Testing",
    description:
      "Automation testers develop scripts and tools to automate software testing processes for efficiency and accuracy.",
  },
  {
    name: "Blockchain",
    description:
      "Blockchain professionals design and manage decentralized ledger systems to ensure secure, transparent digital transactions.",
  },
  {
    name: "Business Analyst",
    description:
      "Business analysts evaluate business processes and data to suggest improvements and support strategic decisions.",
  },
  {
    name: "Civil Engineer",
    description:
      "Civil engineers design, construct, and maintain infrastructure projects like roads, bridges, and buildings.",
  },
  {
    name: "Data Science",
    description:
      "Data scientists analyze and model complex data to derive actionable insights and drive decision-making.",
  },
  {
    name: "Database",
    description:
      "Database administrators design, maintain, and secure data storage systems for reliable and efficient access.",
  },
  {
    name: "DevOps Engineer",
    description:
      "DevOps engineers bridge development and operations, ensuring fast, reliable, and scalable software delivery.",
  },
  {
    name: "DotNet Developer",
    description:
      ".NET developers build applications using Microsoft’s .NET framework, focusing on performance and scalability.",
  },
  {
    name: "Electrical Engineering",
    description:
      "Electrical engineers design and develop electrical systems and equipment for various industries.",
  },
  {
    name: "ETL Developer",
    description:
      "ETL developers create data pipelines to extract, transform, and load data into systems for analysis.",
  },
  {
    name: "Hadoop",
    description:
      "Hadoop developers manage large-scale data processing systems using the Hadoop ecosystem for big data solutions.",
  },
  {
    name: "Health and fitness",
    description:
      "Health and fitness professionals guide individuals in achieving physical wellness through exercise and nutrition.",
  },
  {
    name: "HR",
    description:
      "HR professionals manage hiring, training, and employee relations to build effective and compliant workplaces.",
  },
  {
    name: "Java Developer",
    description:
      "Java developers build cross-platform applications using the Java programming language and related tools.",
  },
  {
    name: "Mechanical Engineer",
    description:
      "Mechanical engineers design and build mechanical systems and products for industries ranging from automotive to aerospace.",
  },
  {
    name: "Network Security Engineer",
    description:
      "Network security engineers protect digital infrastructures by implementing measures to prevent cyber threats and breaches.",
  },
  {
    name: "Operations Manager",
    description:
      "Operations managers oversee daily operations, streamline processes, and ensure efficiency across departments.",
  },
  {
    name: "PMO",
    description:
      "Project Management Office professionals standardize project execution and support teams to meet organizational goals.",
  },
  {
    name: "Python Developer",
    description:
      "Python developers create software applications and automation tools using the Python programming language.",
  },
  {
    name: "Sales",
    description:
      "Sales professionals build client relationships and drive revenue by promoting and selling products or services.",
  },
  {
    name: "SAP Developer",
    description:
      "SAP developers build and customize enterprise solutions using SAP frameworks to meet business requirements.",
  },
  {
    name: "Testing",
    description:
      "Software testers identify bugs and ensure quality by validating software against requirements and user needs.",
  },
  {
    name: "Web Designing",
    description:
      "Web designers craft the layout and aesthetics of websites, focusing on user experience and responsiveness.",
  },
];

export default function ResultPage() {
  const [profession, setProfession] = useState("");
  const [spinnerProfession, setSpinnerProfession] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const result = localStorage.getItem("professionResult");
    if (result) {
      const parsed = JSON.parse(result);
      const professionMatch = professions.find(
        (p) => p.name.toLowerCase() === parsed.category?.toLowerCase()
      );
      if (professionMatch) {
        setProfession(professionMatch);
      } else {
        setProfession({
          name: parsed.category,
          description: "No description available.",
        });
      }
      setLoading(false);
    }
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
