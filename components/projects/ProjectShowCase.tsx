import React from 'react';
import ProjectCard from './ProjectCard';

export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
};

const projects: Project[] = [
  {
    title: 'Dasboard',
    description: `A full solutation for managing an online store, complete with a dashboard for maintaining orders customers and editing, adding, removing new products/categories aswell as alerting to stock levels
     with charts and graphs for the orders  and revenue and analytics related to how users interact with the site`,
    image: '/previews/dashboard.png',
    techStack: ['React', 'Next.js', 'Typescript', 'PostHog', 'Postgres', 'TailwindCSS', 'Shadcn', 'Hono', 'Clerk', 'Drizzle', 'TanStack', 'Recharts', 'zod', 'React-hook-form'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Image Converter',
    description: 'A NextJS 15 project that allows you to convert images to different formats and sizes ultilizing the sharp library and the features of the most recent update of NextJS',
    image: '/previews/dashboard.png',
    techStack: ['React','NextJS 15', 'TailwindCSS', 'Shadcn', 'MongoDb', 'Sharp', 'Shadcn', 'Zod', 'React Hook Form', 'TanStack Query'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Online Store',
    description: 'A online store which is managed by the dashboard project, customers habits and purchases are tracked with posthog and they can buy products and pay using stripe or paypal',
    image: '/previews/dashboard.png',
    techStack: ['React','NextJS 15', 'TailwindCSS', 'Shadcn', 'Postgres', 'Hono', 'Shadcn', 'Zod', 'React Hook Form', 'Stripe', 'PostHog', 'Drizzle', 'TanStack'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Snake Game',
    description: 'A simple snake game made using only react and nextjs with a leaderboard which is using upstash and reddis to store the data',
    image: '/previews/snake1.png',
    techStack: ['React','NextJS', 'TailwindCSS', 'Reddis', 'Javascript', 'Upstash', 'Vercel'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Snake Game',
    description: 'A simple snake game made using only react and nextjs with a leaderboard which is using upstash and reddis to store the data',
    image: '/previews/snake1.png',
    techStack: ['React','NextJS', 'TailwindCSS', 'Reddis', 'Javascript', 'Upstash', 'Vercel'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  
  // Add more projects here
];

const ProjectsShowcase = () => {
  return (
    <div className="flex gap-6 p-6 flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsShowcase;