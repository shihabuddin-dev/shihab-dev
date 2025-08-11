import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../shared/SectionHeading';
import Button from '../ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import project1Img1 from '../../assets/projects/project1/1.png';
import project1Img2 from '../../assets/projects/project1/2.png';
import project1Img3 from '../../assets/projects/project1/3.png';
import project1Img4 from '../../assets/projects/project1/4.png';
import project1Img5 from '../../assets/projects/project1/5.png';
import project1Img6 from '../../assets/projects/project1/6.png';
import project1Img7 from '../../assets/projects/project1/7.png';
import project1Img8 from '../../assets/projects/project1/8.png';
import project1Img9 from '../../assets/projects/project1/9.png';
import project1Img10 from '../../assets/projects/project1/10.png';
import project1Img11 from '../../assets/projects/project1/11.png';

import project2Img1 from '../../assets/projects/project2/1.png';
import project2Img2 from '../../assets/projects/project2/2.png';
import project2Img3 from '../../assets/projects/project2/3.png';
import project2Img4 from '../../assets/projects/project2/4.png';
import project2Img5 from '../../assets/projects/project2/5.png';
import project2Img6 from '../../assets/projects/project2/6.png';
import project2Img7 from '../../assets/projects/project2/7.png';
import project2Img8 from '../../assets/projects/project2/8.png';
import project2Img9 from '../../assets/projects/project2/9.png';
import project2Img10 from '../../assets/projects/project2/10.png';
import project2Img11 from '../../assets/projects/project2/11.png';
import project2Img12 from '../../assets/projects/project2/12.png';
import project2Img13 from '../../assets/projects/project2/13.png';

import project3Img1 from '../../assets/projects/project3/1.png';
import project3Img2 from '../../assets/projects/project3/2.png';
import project3Img3 from '../../assets/projects/project3/3.png';
import project3Img4 from '../../assets/projects/project3/4.png';
import project3Img5 from '../../assets/projects/project3/5.png';
import project3Img6 from '../../assets/projects/project3/6.png';
import project3Img7 from '../../assets/projects/project3/7.png';
import project3Img8 from '../../assets/projects/project3/8.png';
import project3Img9 from '../../assets/projects/project3/9.png';
import project3Img10 from '../../assets/projects/project3/10.png';
import project3Img11 from '../../assets/projects/project3/11.png';
import project3Img12 from '../../assets/projects/project3/12.png';
import project3Img13 from '../../assets/projects/project3/13.png';
import project3Img14 from '../../assets/projects/project3/14.png';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';
import TechIcon from '../shared/TechIcon';


const projectsData = [
  {
    id: 1,
    title: "Edu Sync",
    description: "Empower your learning journey! Edu Sync connects students, tutors, and admins for seamless education. Access resources, join live classes, and manage progress in place.",
    brief: "Edu Sync is a modern, collaborative platform designed to connect students, tutors, and administrators for a seamless educational experience. It streamlines study session scheduling, resource sharing, and progress tracking all in a secure, user friendly environment.",
    challenges: "Implementing role based dashboards, secure authentication, real time study session management, and integrating Stripe payments while maintaining a modern, responsive UI/UX.",
    improvements: "Planned improvements include adding AI powered study recommendations, more advanced analytics, deeper integrations with third party learning tools, and enhanced accessibility features.",
    images: [project3Img1, project3Img2, project3Img3, project3Img4, project3Img5, project3Img6, project3Img7, project3Img8, project3Img9, project3Img10, project3Img11, project3Img12, project3Img13, project3Img14],
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss", "SiVercel", "SiJwt"],
    links: {
      live: "https://edu-sync-pro.web.app/",
      githubClient: "https://github.com/shihabuddin-dev/edu-sync-client",
      githubServer: "https://github.com/shihabuddin-dev/edu-sync-server",
    },
  },
  {
    id: 2,
    title: "Traditional Recipe",
    description: "Unleash your inner chef! Discover, share, and savor authentic recipes from around the globe. Connect with food lovers, explore cuisines, and add masterpieces today.",
    brief: "Traditional Recipe is a curated collection of authentic recipes from around the world. The platform lets users explore, cook, and preserve culinary heritage with easy to follow instructions, beautiful images, and cultural context for each dish.",
    challenges: "Building a scalable recipe database, implementing real time data sync and authentication with Firebase, designing a fully responsive UI, and integrating interactive features like Swiper carousels, Lottie animations, and statistics dashboards.",
    improvements: "Future plans include expanding the recipe collection, adding user generated content moderation, introducing AI powered recipe recommendations, and enhancing accessibility and performance across devices.",
    images: [project1Img1, project1Img2, project1Img3, project1Img4, project1Img5, project1Img6, project1Img7, project1Img8, project1Img9, project1Img10, project1Img11],
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss", "SiAwesomeReveal", "SiInfinityScroll"],
    links: {
      live: "https://traditional-recipe.web.app/",
      githubClient: "https://github.com/shihabuddin-dev/traditional-recipe-client",
      githubServer: "https://github.com/shihabuddin-dev/traditional-recipe-server",
    },
  },
  {
    id: 3,
    title: "Athletic Hub",
    description: "Join the ultimate sports community! Connect with athletes, coaches, and fans, share your journey, join exciting events, and stay inspired with the latest updates and news.",
    brief: "Athletic Hub is a next generation, animated, and fully responsive event booking platform for athletes, organizers, and fans. It enables seamless event discovery, booking, and management with a modern UI, real time features, and robust organizer tools.",
    challenges: "Designing a stunning, branded UI/UX with advanced animations, implementing real time booking and feedback, building secure authentication and organizer tools, and ensuring accessibility and flawless performance across all devices.",
    improvements: "Future enhancements include deeper analytics for organizers, more social features for athletes and fans, AI powered event recommendations, and expanded support for international sporting events.",
    images: [project2Img1, project2Img2, project2Img3, project2Img4, project2Img5, project2Img6, project2Img7, project2Img8, project2Img9, project2Img10, project2Img11, project2Img12, project2Img13],
    tags: ["SiJavascript", "SiReact", "SiNodedotjs", "SiExpress", "SiMongodb", "SiFirebase", "SiTailwindcss", "SiVercel", "SiJwt"],
    links: {
      live: "https://athletichub-pro.web.app/",
      githubClient: "https://github.com/shihabuddin-dev/athletic-hub-client",
      githubServer: "https://github.com/shihabuddin-dev/athletic-hub-server",
    },
  },

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="/projects" className='px-2 md:px-0 scroll-mt-30'>
      <SectionHeading>My Projects</SectionHeading>
      {/* Responsive Grid for Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-self">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} onDetails={() => setSelectedProject(project)} />
        ))}
      </div>
      <a href='https://shihabuddin-repo.vercel.app/' target='blank' className='flex justify-center mt-10'><Button variant='outline'>More Projects</Button></a>
      {/* Modal */}
      {selectedProject && (
        <dialog
          id="project_modal"
          className="modal modal-open border border-primary/20 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-box max-w-3xl border border-primary/20"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-2xl text-primary">{selectedProject.title}</h3>
              <button
                className="btn btn-circle btn-sm btn-outline btn-primary hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all"
                onClick={() => setSelectedProject(null)}
              >
                X
              </button>
            </div>

            {/* Swiper Slider for Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className="mb-4 rounded-md border border-base-300"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={selectedProject.title} className="w-full h-36 md:h-76 object-cover rounded" />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <p className="mb-4 text-base-content/80 italic">{selectedProject.description}</p>
            {selectedProject.brief && (
              <div className="mb-4">
                <span className="font-semibold">Brief Description:</span>
                <p className="text-base-content/70 text-sm mt-1">{selectedProject.brief}</p>
              </div>
            )}
            {selectedProject.challenges && (
              <div className="mb-4">
                <span className="font-semibold">Challenges Faced:</span>
                <p className="text-base-content/70 text-sm mt-1">{selectedProject.challenges}</p>
              </div>
            )}
            {selectedProject.improvements && (
              <div className="mb-4">
                <span className="font-semibold">Potential Improvements & Future Plans:</span>
                <p className="text-base-content/70 text-sm mt-1">{selectedProject.improvements}</p>
              </div>
            )}
            <p className='mb-2 font-semibold'>Technology:</p>
            {/* Tags with Icons */}
            <div className="flex flex-wrap gap-3 mb-4">
              {selectedProject.tags?.map((iconName, index) => (
                <TechIcon key={index} iconName={iconName} />
              ))}
            </div>
            {/* Links  */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
              <a href={selectedProject.links?.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary text-base-content/80 hover:shadow-md hover:shadow-primary/20 hover:scale-110 transition-all"><FaGlobe /> Live</a>
              <a href={selectedProject.links?.githubClient} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline btn-primary text-base-content/80 hover:shadow-md hover:shadow-primary/20 hover:scale-110 transition-all"> <FaGithub />Client</a>
              <a href={selectedProject.links?.githubServer} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline btn-primary text-base-content/80 hover:shadow-md hover:shadow-primary/20 hover:scale-110 transition-all"> <MdOutlineSettings />Server</a>
            </div>
            <div className="modal-action">
              <button className="btn btn-primary btn-outline btn-sm hover:shadow-md hover:shadow-primary/20 transition-all" onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Projects;