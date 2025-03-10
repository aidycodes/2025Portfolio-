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
    title: 'Online Store',
    description: `An online store with user authentication and a dashboard to view past orders, featuring SSR for products, user data, and cart information.
     It integrates Stripe for payments and includes a fully type-safe API using Zod with tRPC, along with modern data-fetching patterns that leverage optimistic updates with TanStack Query.`,
    image: '/previews/PosterShop.png',
    techStack: ['React','NextJS 15', 'TailwindCSS', 'Postgres', 'Stripe', 'Better-auth', 'Hono', 'Zod', 'React Hook Form',  'Drizzle', 'TanStack'],
    githubLink: 'https://github.com/aidycodes/postershop2025',
    liveLink: 'https://postershop2025.vercel.app/',
  },
  {
    title: 'Image Converter',
    description: 'A Next.js 15 project that allows you to convert images to different formats and sizes, utilizing the Sharp library and the latest features from the most recent Next.js update.',
    image: '/previews/ImageConverter.jpg',
    techStack: ['React','NextJS 15', 'TailwindCSS', 'Sharp', 'ShadCN', 'React Hook Form', 'TanStack Query'],
    githubLink: 'https://github.com/aidycodes/Image-Converter',
    liveLink: 'https://image-converter-pied-two.vercel.app/',
  },
  {
    title: 'Dashboard',
    description: `A comprehensive solution for managing an online store, including order management, customer tracking, and the ability to add, edit, or remove products and categories. The system should also provide stock level alerts, along with charts, graphs, and tables for visualizing data. Features such as pagination,
     advanced filtering for orders and revenue, and detailed analytics on user interactions with the site should also be included.`,
    image: '/previews/dashboard.png',
    techStack: ['React', 'Next.js', 'Typescript', 'Postgres', 'TailwindCSS', 'ShadCN', 'Hono', 'Clerk', 'Drizzle', 'TanStack', 'Recharts', 'zod', 'React-hook-form'],
    githubLink: 'https://github.com/aidycodes/dashboard',
    liveLink: 'https://dashboard-ebon-ten-41.vercel.app/',
  },
  {
    title: 'Snake Game',
    description: 'A simple Snake game built using only React and Next.js, featuring a leaderboard that uses Upstash and Redis to store the data.',
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-8 lg:gap-2 sm:p-4 p-0">
        {projects.map((project, index) => (
          <ProjectCardLarge key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;