"use client";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function Contactinfo() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full space-y-6">
        <h2 className="text-3xl font-semibold text-center text-white">Contact Information</h2>

        {/* GitHub Section */}
        <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300">
          <SiGithub className="w-6 h-6 text-gray-300 hover:text-gray-100" />
          <a
            href="https://github.com"
            target="_blank"
            className="text-lg text-gray-300 hover:text-gray-100"
          >
            GitHub
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300">
          <SiLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-400" />
          <a
            href="https://www.linkedin.com/in/priyanshukumar25/"
            target="_blank"
            className="text-lg text-blue-500 hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>

        {/* Gmail Section */}
        <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300">
          <SiGmail className="w-6 h-6 text-red-500 hover:text-red-400" />
          <a
            href="mailto:pk304115@mail.com"
            className="text-lg text-gray-300 hover:text-gray-100"
          >
            pk304115@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactinfo;
