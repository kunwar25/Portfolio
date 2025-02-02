"use client";
import { div, p } from 'motion/react-client';
import projectData from '../data/proj-data.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Project {
    name: string;
    timeline: string;
    completed: boolean;
    description: string;
    features: string[];
    technologies: string[];
}

function Projects() {   
    const proj = projectData.projects.filter((project: Project) => project.completed);

    return (
        <div className='py-16 bg-gray-900 text-white'>
            {/* Header Section */}
            <div className="text-center">
                <h2 className="text-lg font-bold text-teal-400 tracking-widest uppercase">
                     Projects
                </h2>
                <p className="mt-3 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-">
                    Explore My Work
                </p>
                <p className="mt-3 text-lg text-gray-400">
                    A collection of my finest projects built with cutting-edge tech.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                {proj.map((project: Project) => (
                    <div key={project.name} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-gray-800 shadow-xl overflow-hidden h-full max-w-sm transition-transform transform hover:scale-105">
                            <div className="p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                                    {project.name}
                                </p>
                                <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
                                <p className="mt-3 text-xs italic text-gray-400">
                                    <span className="font-semibold text-teal-400">Tech Stack:</span> {project.technologies.join(', ')}
                                </p>
                                <Link href={`https://github.com/kunwar25?tab=repositories`} className="mt-5 inline-block px-6 py-2 bg-teal-500 rounded-md text-sm font-bold transition duration-200 hover:bg-teal-400">
                                    View Details →
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="mt-20 text-center">
                <Link className="px-8 py-3 rounded-md bg-teal-500 text-white font-bold text-lg transition duration-300 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 shadow-lg" href="/projects">
                    View All Projects 🔗
                </Link>
            </div>

            
        </div>
    );
}

export default Projects;
