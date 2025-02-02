'use client';
import React, { useState } from "react";

export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold tracking-wide text-blue-400">
            PRIYANSHU
          </div>
          {/* Left Side - Navigation Links */}
          <ul className="flex space-x-6 text-lg font-medium">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
           
            <li><a href="projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="contact" className="hover:text-blue-400 transition">Contact Me</a></li>
          </ul>
          
          {/* Right Side - Name */}
          
        </div>
      </nav>
    );
  }
  