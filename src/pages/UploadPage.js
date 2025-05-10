import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaChevronLeft } from 'react-icons/fa'; // Importing React Icons
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { HiOutlineUpload } from 'react-icons/hi';

export default function UploadPage() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFileChange(files);
  };

  const handleFileChange = (files) => {
    const file = files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      toast.success('File uploaded successfully!', { position: 'top-center' });
    } else {
      toast.error('Please upload a valid PDF file.', { position: 'top-center' });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!fileName) {
      toast.error('No file selected!', { position: 'top-center' });
      return;
    }
    setLoading(true);
    toast.info('Processing your resume...', { position: 'top-center' });
    setTimeout(() => {
      setLoading(false);
      navigate('/result');
    }, 3000);
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigates to the landing page
  };

  const handleBackClick = () => {
    navigate('/upload'); // Navigates to the upload page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-700 flex items-center justify-center p-6 relative">
      <ToastContainer />

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

      <motion.div
        className="bg-white/10 p-8 rounded-2xl shadow-xl w-full max-w-xl backdrop-blur-lg text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Upload Your CV</h2>

        {/* Drag-and-Drop Upload Area */}
        <div
          className={`flex flex-col items-center justify-center w-full max-w-3xl h-56 border-dashed border-2 ${
            isDragging
              ? 'border-[#44576D] bg-[#f0f5f8]'
              : 'border-transparent bg-[#fafafa]'
          } rounded-lg shadow-lg transition-colors duration-300 transform ${
            isDragging ? 'scale-105' : ''
          } mt-8`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <HiOutlineUpload size={48} className={`text-[#44576D] ${isDragging ? 'animate-bounce' : ''}`} />
          <p className={`mt-4 text-[#44576D] text-lg font-medium ${isDragging ? 'text-[#44576D]' : ''}`}>
            {isDragging ? 'Release to Upload!' : 'Drop documents here to upload'}
          </p>
          <button
            className="mt-4 px-6 py-2 bg-[#DEEBF6] text-[#29353C] rounded-lg shadow hover:bg-[#AAC7DA] transition-colors duration-200 hover:shadow-md"
            onClick={handleUploadClick}
          >
            Upload
          </button>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => handleFileChange(e.target.files)}
          accept="application/pdf"
        />

        {/* Displaying the file name */}
        {fileName && (
          <div className="mt-6 p-4 bg-white text-black rounded-lg shadow-md">
            <p className="font-semibold text-lg">Uploaded File:</p>
            <p className="mt-2 text-lg">{fileName}</p>
          </div>
        )}

        {/* Submit Button in the center */}
        {fileName && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleUpload}
              className="px-32 py-3 items-center bg-gray-400 text-white rounded-lg shadow hover:bg-gray-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        )}
      </motion.div>

      {/* Loading Spinner Overlay */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <p className="absolute bottom-4 text-sm text-gray-400 z-10">
        © 2025 SkillSiftCV. All rights reserved.
      </p>
    </div>
  );
}
