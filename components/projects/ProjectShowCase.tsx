import React from 'react';
import ProjectCardLarge from './ProjectCardLarge';

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
    title: 'Dashboard',
    description: `A full solutation for managing an online store for maintaining orders customers and editing, adding, removing new products/categories aswell as alerting to stock levels
     with charts, graphs and tables with pagination and complex filtering for the orders  and revenue and analytics related to how users interact with the site`,
    image: '/previews/dashboard.png',
    techStack: ['React', 'Next.js', 'Typescript', 'Postgres', 'TailwindCSS', 'ShadCN', 'Hono', 'Clerk', 'Drizzle', 'TanStack', 'Recharts', 'zod', 'React-hook-form'],
    githubLink: 'https://github.com/aidycodes/dashboard',
    liveLink: 'https://dashboard-ebon-ten-41.vercel.app/',
  },
  {
    title: 'Image Converter',
    description: 'A NextJS 15 project that allows you to convert images to different formats and sizes ultilizing the sharp library and the features of the most recent update of NextJS',
    image: '/previews/imageConverter.jpg',
    techStack: ['React','NextJS 15', 'TailwindCSS', 'Sharp', 'ShadCN', 'React Hook Form', 'TanStack Query'],
    githubLink: 'https://github.com/aidycodes/Image-Converter',
    liveLink: 'https://image-converter-pied-two.vercel.app/',
  },
  {
    title: 'Online Store',
    description: `A online store with user authentication and dashboard to see past orders, SSR for products, user and cart data, intergrating stripe for payments fully
     typesafe api using zod with jstack and modern data fetching patterns ulitzliing optimistic updates with tanstack query`,
    image: '/previews/postershop.png',
    techStack: ['React','NextJS 15', 'TailwindCSS', 'Postgres', 'Stripe', 'Better-auth', 'Hono', 'Zod', 'React Hook Form',  'Drizzle', 'TanStack'],
    githubLink: 'https://github.com/aidycodes/postershop2025',
    liveLink: 'https://postershop2025.vercel.app/',
  },
  {
    title: 'Snake Game',
    description: 'A simple snake game made using only react and nextjs with a leaderboard which is using upstash and reddis to store the data',
    image: '/previews/snake1.png',
    techStack: ['React','NextJS', 'TailwindCSS', 'Reddis', 'Javascript', 'Upstash', 'Vercel'],
    githubLink: 'https://github.com/aidycodes/snake2023',
    liveLink: 'https://nextsnakee.vercel.app/',
  },

  
  // Add more projects here
];

const ProjectsShowcase = () => {
  return (
    <div className=''>
            <h1 className="mt-16 text-4xl text-gray-300 font-bold mx-10 mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
        {projects.map((project, index) => (
          <ProjectCardLarge key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;