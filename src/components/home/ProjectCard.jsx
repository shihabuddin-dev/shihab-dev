import { FaGithub } from 'react-icons/fa6';
import { FaCode, FaGlobe } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TechIcon from '../shared/TechIcon';


const ProjectCard = ({ project, onDetails }) => {
  const { title, description, tags, links, images } = project;

  return (
    <article className="group bg-gradient-to-br from-base-100 to-base-200/50 rounded-md shadow-lg border border-base-300/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden h-full">

      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <div>
          {images ? (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={title} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img src={project.image} alt={title} />
          )}
        </div>
        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-300/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>

        {/* Description */}
        <p className="text-base-content/70 text-sm leading-relaxed flex-grow mb-4">{description}</p>

        {/* Technology Icons Only */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6 cursor-pointer">
          {tags.map((iconName, index) => (
            <span
              key={index}
              className="w-4 md:w-5 h-6 rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 group/icon border border-base-300/30"
              title={iconName.replace('Si', '')}
            >
              <TechIcon iconName={iconName} minimal className="w-5 h-5 text-base-content/70 group-hover/icon:text-primary transition-colors duration-300 bg-transparent px-0 py-0" label="" />
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-2 md:gap-4 text-sm">
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary hover:scale-110 hover:shadow-md hover:shadow-primary/40 transition-all duration-400 shadow-md md:min-w-[90px] text-base-content/80"
          >
            <FaGlobe className='md:mr-1' /> Live
          </a>
          <a
            href={links.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline btn-primary hover:scale-110 hover:bg-primary hover:shadow-md hover:shadow-primary/40 transition-all duration-400 border-primary/70 hover:border-primary md:min-w-[90px] text-base-content/80"
          >
            <FaGithub className='md:mr-1' /> Repo
          </a>
          <button
            className="btn btn-sm btn-outline btn-primary hover:scale-110 hover:shadow-md hover:shadow-primary/40 transition-all duration-400 border-primary/70 hover:border-primary md:min-w-[90px] text-base-content/80"
            onClick={onDetails}
          >
            <FaCode className="md:mr-1" /> Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;