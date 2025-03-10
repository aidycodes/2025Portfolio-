'use client'
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from './ProjectShowCase';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCardLarge = ({ project }: { project: Project }) => {
  return (
    <Card className="max-w-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
      <div className="flex flex-col h-full">
    
        <Link href={project.liveLink} target="_blank">
        <div className="relative sm:h-[400px] h-[250px] group overflow-hidden p-4 cursor-pointer">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 cursor-pointer"
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-transparent h-full rounded-xl" />
        </div>
        </Link>

     
        <div className="sm:p-8 p-4 flex-1 flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-300 sm:text-lg text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies Section */}
          <div className="space-y-2 sm:space-y-4 mt-auto">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-200">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>


        <div className="flex items-center justify-between mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 p-3 sm:p-4">
          <div className="flex gap-2 sm:gap-4">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              View Code
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCardLarge; 