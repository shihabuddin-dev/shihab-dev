import { useState } from "react";
import projectsData from "../../assets/projects.json";
import { FaGlobe, FaGithub, FaCode, FaTimes } from "react-icons/fa";

const Test = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-8 md:py-12 lg:py-16">
      <div className="w-full md:w-1/2 mx-auto mb-16" data-aos="fade-up" data-aos-delay="200">
        <div className="divider before:bg-primary after:bg-primary text-primary text-3xl font-bold space-grotesk-font">
        <h2>My Projects</h2>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-10" data-aos="fade-up" data-aos-delay="300">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group card bg-base-200/50 backdrop-blur-sm shadow-lg border border-primary/20 hover:shadow-md hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-2 rounded-md overflow-hidden"
          >
            <figure className="relative overflow-hidden">
              <img
                src={project.thumb_img}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </figure>
            <div className="card-body p-6">
              <h3 className="text-xl font-bold text-primary space-grotesk-font group-hover:text-primary/80 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-secondary/80 leading-relaxed">
                {project.about}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technology.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-primary text-xs font-medium px-3 py-1 border-primary/40 text-primary/80 hover:bg-primary/10 hover:border-primary/60 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary text-base-100 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 shadow-md min-w-[90px]"
                >
                  <FaGlobe className="mr-1" /> Live
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-primary hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 border-primary/60 hover:border-primary min-w-[90px]"
                >
                  <FaGithub /> Repo
                </a>
                <button
                  className="btn btn-sm btn-outline btn-primary hover:bg-primary/80 hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 border-primary/60 hover:border-primary min-w-[90px]"
                  onClick={() => setSelectedProject(project)}
                >
                  <FaCode className="mr-1" /> Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="600">
        <a
          href="https://github.com/omarfaruk-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-outline text-lg font-semibold hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 border-primary/60 hover:border-primary transform hover:-translate-y-1 px-8 py-3"
        >
          See More Projects
        </a>
      </div>

      {/* Modal */}
{selectedProject && (
  <dialog
    id="project_modal"
    className=" modal modal-open border border-primary/20 backdrop-blur-xs"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="modal-box max-w-3xl border border-primary/20"
      onClick={(e) => e.stopPropagation()}
    >
             <div className="flex justify-between items-center mb-4">
         <h3 className="font-bold text-2xl text-primary">
           {selectedProject.title}
         </h3>
         <button
           className="btn btn-circle btn-sm btn-outline btn-primary hover:bg-primary hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all"
           onClick={() => setSelectedProject(null)}
         >
           <FaTimes />
         </button>
       </div>

      {/* Thumbnail Image */}
      <img
        src={selectedProject.thumb_img}
        alt={selectedProject.title}
        className="md:w-full md:h-110 object-cover rounded-md mb-4 border border-base-300"
      />

      {/* About */}
      <p className="mb-4 text-sm text-secondary/60">{selectedProject.about}</p>

      {/* Description */}
      <p className="mb-4 text-secondary/80">
      <span className="font-semibold text-primary">Details:</span>{" "}
        {selectedProject.description}</p>

      {/* Challenges */}
      <p className="mb-4 text-secondary/80">
        <span className="font-semibold text-primary">Challenges:</span>{" "}
        {selectedProject.challenges}
      </p>
      {/* Challenges overcome */}
      <p className="mb-4 text-secondary/80">
        <span className="font-semibold text-primary">Solutions Implemented:</span>{" "}
        {selectedProject.overcome}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <span className="font-semibold">Technologies:</span>{" "}
        {selectedProject.technology.join(", ")}
      </div>

             {/* Buttons */}
       <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
         <a
           href={selectedProject.live}
           target="_blank"
           rel="noopener noreferrer"
           className="btn btn-sm btn-primary text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all"
         >
           <FaGlobe className="mr-1" /> Live
         </a>
         <a
           href={selectedProject.client}
           target="_blank"
           rel="noopener noreferrer"
           className="btn btn-sm btn-outline btn-primary hover:shadow-md hover:text-base-100 hover:shadow-primary/20 transition-all"
         >
           <FaGithub /> Client
         </a>
         <a
           href={selectedProject.server}
           target="_blank"
           rel="noopener noreferrer"
           className="btn btn-sm btn-outline btn-primary hover:shadow-md hover:text-base-100 hover:shadow-primary/20 transition-all"
         >
           <FaGithub /> Server
         </a>
       </div>

       {/* Close Button */}
       <div className="modal-action">
         <button
           className="btn btn-primary btn-outline hover:text-base-100 hover:shadow-md hover:shadow-primary/20 transition-all"
           onClick={() => setSelectedProject(null)}
         >
           Close
         </button>
       </div>      
    </div>
  </dialog>
)}

    </section>
  );
};

export default Test;