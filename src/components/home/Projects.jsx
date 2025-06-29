import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../shared/SectionHeading';

const projectsData = [
  {
    id: 1,
    title: "Traditional Recipe",
    description: "A vibrant web app for discovering, sharing, and enjoying traditional recipes from around the world—made for food lovers everywhere.",
    image: "https://i.postimg.cc/D0SvBfCJ/recipe.png",
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss"],
    links: {
      live: "https://traditional-recipe.web.app/",
      github: "https://github.com/shihabuddin-dev/traditional-recipe-client",
    },
  },
  {
    id: 2,
    title: "Astroship",
    description: "This is modern web app connecting athletes, coaches, and fans—share updates, join events, and explore sports communities all in one place.",
    image: "https://i.postimg.cc/44WQPdcM/athletic-Hub.png",
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss"],
    links: {
      live: "https://athletichub-pro.web.app/",
      github: "https://github.com/shihabuddin-dev/athletic-hub-client",
    },
  },
  {
    id: 3,
    title: "Athletic Hub",
    description: "This is modern web app connecting athletes, coaches, and fans—share updates, join events, and explore sports communities all in one place.",
    image: "https://i.postimg.cc/44WQPdcM/athletic-Hub.png",
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss", "SiVercel", "SiJwt"],
    links: {
      live: "https://athletichub-pro.web.app/",
      github: "https://github.com/shihabuddin-dev/athletic-hub-client",
    },
  },
];

const Projects = () => {
  return (
    <section id="/projects" className='px-2 md:px-0'>
      <SectionHeading>My Projects</SectionHeading>
        {/* Responsive Grid for Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
    </section>
  );
};

export default Projects;