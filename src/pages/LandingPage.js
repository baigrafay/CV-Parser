// src/pages/LandingPage.js
import { Link } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";
import logo from "../asset/logo.jpg"; // Make sure this path is correct
import FeaturesSection from "../components/FeaturesSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-96 h-96 bg-gray-500 rounded-full opacity-20 blur-3xl top-0 left-0 animate-pulse" />
      <div className="absolute w-80 h-80 bg-gray-600 rounded-full opacity-20 blur-3xl bottom-0 right-0 animate-pulse" />

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center drop-shadow-xl z-10">
        SkillSiftCV
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-300 mt-4 text-center max-w-2xl z-10">
        Unleash the power of AI to detect your profession from your resume.
        Fast, intelligent, and effortless.
      </p>

      {/* Upload Button */}
      <Link to="/upload" className="z-10 mt-10">
        <button className="flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
          <FaFileUpload className="text-xl" /> Upload Resume
        </button>
      </Link>
      <FeaturesSection />

      {/* Footer */}
      <p className="absolute bottom-4 text-sm text-gray-400 z-10">
        © 2025 SkillSiftCV. All rights reserved.
      </p>
    </div>
  );
}
