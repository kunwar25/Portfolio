"use client";

import { motion } from "framer-motion";
import { SiCplusplus,SiJavascript, SiTypescript, SiPython, SiReact, SiRedux, SiLodash, SiNextdotjs, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiFirebase, SiGit, SiDocker, SiPostman, SiHtml5, SiCss3, SiSocketdotio, SiFastapi, SiJsonwebtokens, SiRedis, SiCloudinary, SiMysql, SiNodedotjs, SiKubernetes, SiAmazon, SiOpengl, SiPinetwork, SiTensorflow, SiKeras, SiPandas } from "react-icons/si";

const techCategories = [
  {
    title: "Languages",
    techs: [
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-green-400" /> },
      {name:"OpenGL",icon:<SiOpengl className="text-blue-500"/>},
       
    ],
  },
  {
    title: "Frontend",
    techs: [
        {name:"Next.js",icon:<SiNextdotjs className="text-white"/>},
       
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
    
      { name: "HTML", icon: <SiHtml5 className="text-purple-400" /> },
      { name: "CSS", icon: <SiCss3 className="text-gray-300" /> },
      
    ],
  },
  {
    title: "Backend",
    techs: [
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },

      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {name:"Node.js",icon:<SiNodedotjs className="text-yellow-400"/>},
     {name:"fastAPI",icon:<SiFastapi className="text-green-400"/>},
     {name:"socket.io",icon:<SiSocketdotio className="text-green-400"/>},
     {name:"jsonwebtoken",icon:<SiJsonwebtokens className="text-green-400"/>},
     {name:"redis",icon:<SiRedis className="text-green-400"/>},
    ],
  },
  {
    title: "Databases",
    techs: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      {name:"MySQL",icon:<SiMysql className="text-green-500"/>},
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      {name:"Cloudinary",icon:<SiCloudinary className="text-green-400"/>},
    ],
  },
  {
    title: "Tools",
    techs: [
      { name: "Git", icon: <SiGit className="text-red-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      {name:"AWS" ,icon:<SiAmazon className="text-yellow-400"/>},
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      {name:"Docker",icon:<SiDocker className="text-blue-500"/>},
    ],
  },
  {
    title: "AI",
    techs: [
      { name: "Tensorflow", icon: <SiTensorflow className="text-red-500" /> },
      { name: "Keras", icon: <SiKeras className="text-blue-500" /> },
      {name:"Pandas" ,icon:<SiPandas className="text-yellow-400"/>},
      { name: "Python", icon: <SiPython className="text-green-400" /> },
     
    ],
  },
   
];

const TechStack = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
           
            <h3 className="text-xl font-semibold text-white ">{category.title}</h3>
            <div className="border-b-2 mb-3"></div>
            <div className="flex flex-wrap gap-4">
              {category.techs.map((tech, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
                  {tech.icon}
                  <p className="text-white">{tech.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
