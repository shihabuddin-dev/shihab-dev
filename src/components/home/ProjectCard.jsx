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
import { FaShieldAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ProjectCard = ({ project }) => {
  const { title, description, tags, links } = project;

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
          {project.images ? (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={project.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img src={project.image} alt={project.title} />
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
        <div className="flex items-center justify-between pt-4 border-t border-base-300/30">
          <a
            href={links.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-base-content/70 hover:text-base-content transition-colors duration-300 hover:scale-105"
          >
            <FaGithub className="w-3 h-3" />
            Client
          </a>
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-focus transition-colors duration-300 hover:scale-105"
          >
            <FaArrowUpRightFromSquare className="w-3 h-3" />
            Live
          </a>
          <a
            href={links.githubServer}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-base-content/70 hover:text-base-content transition-colors duration-300 hover:scale-105"
          >
            <FaGithub className="w-3 h-3" />
            Server
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;