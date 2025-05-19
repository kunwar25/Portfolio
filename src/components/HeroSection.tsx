"use client";


import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from 'next/image';
import { FlipWords } from './ui/flip-words';

import { Meteors } from './ui/meteors';
import Link from "next/link";
    const words = [
      {
        text: "Hi,",
      },
      {
        text: "I",
      },
      {
        text: "am",
      },
      {
        text: "Priyanshu !",
        className: "text-blue-500 dark:text-blue-500",
      },
      
    ];

    const description = [
      " An Undergrad from AIT Pune",
      "Software Engineer",
      "Full-Stack Developer (MERN)",
      "Competitive Programmer",
      "Open Source Contributor",
      "AI & Neural Networks Enthusiast"
    ];
    
    
function HeroSection() {

  

  // Function to scroll to the ContactInfo section

  return (
   
    <div className="h-[50rem] md:h-[50rem]  rounded-md flex flex-col
    items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    <Meteors number={50}/>
    <Spotlight />
     <div className="p-4 reative z-10 w-full text-center">
     
     <div className="flex justify-center items-center">
  <div className="relative w-40 h-40 mb-20 z-70">
  <Image 
  src="/priyanshu-profile.jpg" 
  alt="Profile Picture" 
  width={160} // Explicit width
  height={160} // Explicit height
  className="w-full h-full object-cover rounded-full border-4 border-indigo-400"
/>
    <div className="absolute inset-0  opacity-40 rounded-full"></div>
  </div>
</div>

    <h1
    className='mt-10 text-5xl  font-bold bg-clip-text
    text-transparent bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600'
    >
    <TypewriterEffect words={words} />
      </h1> 
      <div className="mt-4 text-lg  font-semibold text-gray-500 dark:text-gray-400">

      <FlipWords words={description} /> <br />
        </div>
        
     </div>
     <div className='flex gap-10 items-center justify-center'>
     <div className="mt-4">
     
     <button className="p-[3px] relative " >

  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
  <Link href='contact'>Contact Me</Link>
  </div>
</button>

        </div>
        <div className="mt-4">
  <Link href="/Priyanshu_resume.pdf" download>
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center">
        <Image 
        width = {10}
        height = {4}

        src="/download.svg"  alt='download' className='w-10 h-4' />
        Resume
      </div>
    </button>
  </Link>
</div>
     </div>
        
    </div>
    
  );
}

export default HeroSection;