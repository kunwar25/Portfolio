'use client';
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold tracking-wide text-blue-400">
            PRIYANSHU
          </div>
          {/* Left Side - Navigation Links */}
          <ul className="flex space-x-3 text-lg font-medium">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
           
            <li><Link href="projects" className="hover:text-blue-400 transition">Projects</Link></li>
            <li><Link href="contact" className="hover:text-blue-400 transition">Contact Me</Link></li>
          </ul>
          
          {/* Right Side - Name */}
          
        </div>
      </nav>
    );
  }
  