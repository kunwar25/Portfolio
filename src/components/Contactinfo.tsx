"use client";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { BackgroundBeams } from "@/components/ui/background-beams.tsx";

function Contactinfo() {

  // Function to open WhatsApp with the given number
  const openWhatsApp = (number: string) => {
    const whatsappURL = `https://wa.me/${number}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    
      <div className="flex justify-center items-center min-h-screen z-10">
        <BackgroundBeams />
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full space-y-6">
          <h2 className="text-3xl font-semibold text-center text-white">Contact Information</h2>

          {/* GitHub Section */}
          <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300">
            <SiGithub className="w-6 h-6 text-gray-300 hover:text-gray-100" />
            <a
              href="https://github.com/kunwar25"
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

         
          

          {/* WhatsApp Section */}
          <div
            onClick={() => openWhatsApp("+918262808773")}
            className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300 cursor-pointer"
          >
            <SiWhatsapp className="w-6 h-6 text-green-500 hover:text-green-400" />
            <span className="text-lg text-gray-300">WhatsApp</span>
          </div>

        </div>
      </div>
    
  );
}

export default Contactinfo;
