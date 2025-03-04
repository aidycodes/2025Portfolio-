'use client'
import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from './ProjectShowCase';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCardLarge = ({ project }: { project: Project }) => {
  return (
    <Card className="max-w-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <Link href={project.liveLink} target="_blank">
        <div className="relative h-[400px] group overflow-hidden p-4 cursor-pointer">
          
          <Image
            src={project.image}
            alt={"project.title"}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 cursor-pointer"
            width={800}
            height={600}
          />
         
          <div className="absolute inset-0 bg-transparent h-full rounded-xl" />
        </div>
          </Link>

        {/* Description Section */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-3xl font-bold text-gray-100 mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies Used Section */}
          <div className="space-y-4 mt-auto">
            <h4 className="text-xl font-semibold text-gray-200">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Links */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800 p-4">
          <div className="flex gap-4">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Code
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </Link>
          </div>
     
        </div>
      </div>
    </Card>
  );
};

export default ProjectCardLarge; 