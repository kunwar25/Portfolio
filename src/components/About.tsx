'use client';
import Link from "next/link";
import Navbar from "./Navbar";
import { Meteors } from "./ui/meteors";

function About() {
  return (

    <div className="min-h-[10px] bg-gray-100 dark:bg-[#121212]">
         
      <div className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#f0f0f0]">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Hi!, I am Priyanshu Kumar, a third year Undergrad at Army Institute of Technology, Pune. I love solving complex problems
            with simple and efficient soultions. I am a Full-Stack Developer with a keen interest in AI and Neural Networks. Let's connect and build something amazing together.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="text-blue-500 hover:underline text-lg font-semibold"
          >
            Go on Top
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}
