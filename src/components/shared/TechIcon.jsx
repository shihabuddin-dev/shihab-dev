import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAstro, SiMdx, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiMongodb, SiExpress, SiFirebase, SiVercel, SiNetlify, SiGit, SiDocker, SiFigma, SiAdobexd, SiPostgresql, SiMysql, SiRedux, SiGraphql, SiApollographql, SiPrisma, SiSupabase, SiStripe, SiPaypal, SiAlgolia, SiCloudinary
} from 'react-icons/si';
import { BiLogoReact } from 'react-icons/bi';
import { FaCompress, FaInfinity, FaShieldAlt } from 'react-icons/fa';
import { MdAutoAwesome } from 'react-icons/md';

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
    'SiJwt': FaShieldAlt,
    'SiAwesomeReveal': MdAutoAwesome,
    'SiInfinityScroll': FaInfinity,
};

const TechIcon = ({ iconName, label, className = '', minimal = false }) => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;
    if (minimal) {
        return <IconComponent className={className || "w-5 h-5 text-base-content/70 group-hover/icon:text-primary transition-colors duration-300"} title={label || iconName.replace('Si', '')} />;
    }
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-1 bg-base-200 rounded text-sm ${className}`} title={label || iconName.replace('Si', '')}>
            <IconComponent className="w-4 h-4 text-primary" />
            {label || iconName.replace('Si', '')}
        </span>
    );
};

export default TechIcon;
