"use client";

import Link from 'next/link';
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from './ui/text-generate-effect';
import Contactinfo from './Contactinfo';
import { FlipWords } from './ui/flip-words';
import { useRef } from 'react';
import { SiDowndetector, SiMarkdown } from 'react-icons/si';
    const words = [
      {
        text: "Hi,",
      },
      {
        text: "I'",
      },
      {
        text: "m",
      },
      {
        text: "Priyanshu !",
        className: "text-blue-500 dark:text-blue-500",
      },
      
    ];

    const description = [
      "Software Engineer",
      "Full-Stack Developer (MERN)",
      "Competitive Programmer",
      "Open Source Contributor",
      "AI & Neural Networks Enthusiast"
    ];
    
    
function HeroSection() {

  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the ContactInfo section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-[50rem] md:h-[50rem]  rounded-md flex flex-col
    items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    <Spotlight />
     <div className="p-4 reative z-10 w-full text-center">
     
     <div className="flex justify-center items-center">
  <div className="relative w-40 h-40 mb-20">
    <img src="/priyanshu-profile.jpg" alt="Profile Picture" className="w-full h-full object-cover rounded-full border-4 border-indigo-400  " />
    <div className="absolute inset-0  opacity-40 rounded-full"></div>
  </div>
</div>

    <h1
    className='mt-10 md:mt-0 text-4xl md:text--6xl font-bold bg-clip-text
    text-transparent bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600'
    >
    <TypewriterEffect words={words} />
      </h1> 
      <div className="mt-4 text-md md:text-2xl font-semibold text-gray-500 dark:text-gray-400">

      <FlipWords words={description} /> <br />
        </div>
        
     </div>
     <div className='flex gap-10 items-center justify-center'>
     <div className="mt-4">
     
     <button className="p-[3px] relative " onClick={scrollToContact}>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
  Contact Me
  </div>
</button>

        </div>
        <div className="mt-4">
        <a href="/Priyanshu_Kumar_resume.pdf" download></a>
     <button className="p-[3px] relative " onClick={scrollToContact}>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center">
    <img src="/download.svg"  className = 'w-10 h-4' />
   
    Resume
  </div>
</button>

        </div>
     </div>
        
    </div>
    
  );
}

export default HeroSection;