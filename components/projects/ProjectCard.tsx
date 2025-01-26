'use client'
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from './ProjectShowCase';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="flex flex-col rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl max-w-sm mx-auto h-auto">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          width={450}
          height={300}
        />
      </div>
      <div className="flex flex-col p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 h-40">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-500 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Link>
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-500 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;