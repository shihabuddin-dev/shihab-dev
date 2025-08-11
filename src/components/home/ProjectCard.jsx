import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiMdx,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiGit,
  SiDocker,
  SiFigma,
  SiAdobexd,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiGraphql,
  SiApollographql,
  SiPrisma,
  SiSupabase,
  SiStripe,
  SiPaypal,
  SiAlgolia,
  SiCloudinary
} from 'react-icons/si';
import { BiLogoReact } from 'react-icons/bi';
import { FaCode, FaGlobe, FaShieldAlt, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const ProjectCard = ({ project, onDetails }) => {
  const { title, description, tags, links, images } = project;

  // Icon mapping - maps icon names to React icon components
  const iconMap = {
    'SiReact': SiReact,
    'SiNextdotjs': SiNextdotjs,
    'SiTypescript': SiTypescript,
    'SiTailwindcss': SiTailwindcss,
    'SiAstro': SiAstro,
    'SiMdx': SiMdx,
    'SiHtml5': SiHtml5,
    'SiCss3': SiCss3,
    'SiJavascript': SiJavascript,
    'SiNodedotjs': SiNodedotjs,
    'SiMongodb': SiMongodb,
    'SiExpress': SiExpress,
    'SiFirebase': SiFirebase,
    'SiVercel': SiVercel,
    'SiNetlify': SiNetlify,
    'SiGit': SiGit,
    'SiDocker': SiDocker,
    'SiFigma': SiFigma,
    'SiAdobexd': SiAdobexd,
    'SiPostgresql': SiPostgresql,
    'SiMysql': SiMysql,
    'SiRedux': SiRedux,
    'SiGraphql': SiGraphql,
    'SiApollographql': SiApollographql,
    'SiPrisma': SiPrisma,
    'SiSupabase': SiSupabase,
    'SiStripe': SiStripe,
    'SiPaypal': SiPaypal,
    'SiAlgolia': SiAlgolia,
    'SiCloudinary': SiCloudinary,
    'SiReactrouter': BiLogoReact,
    'SiSwiper': SiJavascript,
    'SiRecharts': SiJavascript,
    'SiJwt': FaShieldAlt
  };

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
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>

        {/* Description */}
        <p className="text-base-content/70 text-sm leading-relaxed flex-grow mb-4">{description}</p>

        {/* Technology Icons Only */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((iconName, index) => {
            const IconComponent = iconMap[iconName];
            return IconComponent ? (
              <div
                key={index}
                className="w-5 h-6 rounded-lg flex items-center justify-center  hover:scale-110 hover:shadow-xl transition-all duration-300 group/icon border border-base-300/30"
                title={iconName.replace('Si', '')} // Tooltip for accessibility
              >
                <IconComponent className="w-5 h-5 text-base-content/70 group-hover/icon:text-primary transition-colors duration-300" />
              </div>
            ) : null;
          })}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm">
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary hover:scale-110 hover:shadow-md hover:shadow-primary/40 transition-all duration-400 shadow-md min-w-[90px] text-base-content/80"
          >
            <FaGlobe className='mr-1' /> Live
          </a>
          <a
            href={links.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline btn-primary hover:scale-110 hover:bg-primary hover:shadow-md hover:shadow-primary/40 transition-all duration-400 border-primary/70 hover:border-primary min-w-[90px] text-base-content/80"
          >
            <FaGithub className='mr-1' /> Repo
          </a>
          <button
            className="btn btn-sm btn-outline btn-primary hover:scale-110 hover:shadow-md hover:shadow-primary/40 transition-all duration-400 border-primary/70 hover:border-primary min-w-[90px] text-base-content/80"
            onClick={onDetails}
          >
            <FaCode className="mr-1" /> Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;