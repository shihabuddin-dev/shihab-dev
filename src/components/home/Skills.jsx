import React, { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import { FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs, FaRegImage, FaBolt } from 'react-icons/fa';
import {
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiCanva,
    SiAdobexd,
    SiAdobephotoshop,
    SiNotion,
    SiTrello,
    SiNetlify,
    SiVercel,
    SiReactquery,
    SiFirebase,
    SiJsonwebtokens,
    SiNextdotjs,
} from 'react-icons/si';

const skillsData = {
    Web: [
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, borderColor: 'border-orange-500', shadowColor: 'hover:shadow-orange-500/40' },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-400" />, borderColor: 'border-blue-400', shadowColor: 'hover:shadow-blue-400/40' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" />, borderColor: 'border-cyan-300', shadowColor: 'hover:shadow-cyan-300/40' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, borderColor: 'border-yellow-400', shadowColor: 'hover:shadow-yellow-400/40' },
        { name: 'React', icon: <FaReact className="text-cyan-400" />, borderColor: 'border-cyan-400', shadowColor: 'hover:shadow-cyan-400/40' },
        { name: 'Next.js', icon: <SiNextdotjs className="text-base-content" />, borderColor: 'border-base-content', shadowColor: 'hover:shadow-base-content/40' },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-400" />, borderColor: 'border-green-400', shadowColor: 'hover:shadow-green-400/40' },
        { name: 'Express.js', icon: <SiExpress />, borderColor: 'border-base-content', shadowColor: 'hover:shadow-base-content/30' },
        { name: 'MongoDB', icon: <SiMongodb className="text-primary" />, borderColor: 'border-primary', shadowColor: 'hover:shadow-primary/40' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, borderColor: 'border-yellow-500', shadowColor: 'hover:shadow-yellow-500/40' }
    ],

    Tools: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, borderColor: 'border-orange-600', shadowColor: 'hover:shadow-orange-600/40' },
        { name: 'GitHub', icon: <FaGithub className="text-base-content" />, borderColor: 'border-base-content', shadowColor: 'hover:shadow-base-content/30' },
        { name: 'JWT', icon: <SiJsonwebtokens className="text-amber-500" />, borderColor: 'border-amber-500', shadowColor: 'hover:shadow-amber-500/40' },
        { name: 'Atlas', icon: <SiMongodb className="text-primary" />, borderColor: 'border-primary', shadowColor: 'hover:shadow-primary/40' },
        { name: 'Netlify', icon: <SiNetlify className="text-green-400" />, borderColor: 'border-green-400', shadowColor: 'hover:shadow-green-400/40' },
        { name: 'Vercel', icon: <SiVercel />, borderColor: 'border-base-content', shadowColor: 'hover:shadow-base-content/30' },
        { name: 'AOS', icon: <FaRegImage className="text-pink-400" />, borderColor: 'border-pink-400', shadowColor: 'hover:shadow-pink-400/40' },
        { name: 'TanStack Query', icon: <SiReactquery className="text-red-500" />, borderColor: 'border-red-500', shadowColor: 'hover:shadow-red-500/40' },
        { name: 'Surge', icon: <FaBolt className="text-yellow-400" />, borderColor: 'border-yellow-400', shadowColor: 'hover:shadow-yellow-400/40' },
    ],
    Others: [
        { name: 'Figma', icon: <FaFigma className="text-pink-500" />, borderColor: 'border-pink-500', shadowColor: 'hover:shadow-pink-500/40' },
        { name: 'Canva', icon: <SiCanva className="text-blue-400" />, borderColor: 'border-blue-400', shadowColor: 'hover:shadow-blue-400/40' },
        { name: 'Adobe XD', icon: <SiAdobexd className="text-pink-400" />, borderColor: 'border-pink-400', shadowColor: 'hover:shadow-pink-400/40' },
        { name: 'Pixo', icon: <FaRegImage className="text-green-400" />, borderColor: 'border-green-400', shadowColor: 'hover:shadow-green-400/40' },
        { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-300" />, borderColor: 'border-blue-300', shadowColor: 'hover:shadow-blue-300/40' },
        { name: 'Notion', icon: <SiNotion />, borderColor: 'border-base-content', shadowColor: 'hover:shadow-black/30 dark:hover:shadow-base-content/30' },
        { name: 'Trello', icon: <SiTrello className="text-blue-500" />, borderColor: 'border-blue-500', shadowColor: 'hover:shadow-blue-500/40' },
    ],
};


const categories = Object.keys(skillsData);

const Skills = () => {
    const [activeTab, setActiveTab] = useState('Web');
    const activeSkills = skillsData[activeTab];

    return (

        <section id='/skills' className='scroll-mt-30'>
            <div className="max-w-5xl mx-auto px-4">
                {/* Section Heading */}
                <SectionHeading>My Skills</SectionHeading>
                {/* Tab Toggle */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-2 py-1 md:py-1.5 rounded-md transition-all hover:duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/60
                ${activeTab === category
                                    ? 'bg-primary shadow-lg border-primary'
                                    : 'border-2 border-primary hover:bg-primary/10'}
              `}
                            style={{ minWidth: '120px' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Icon Grid with card design and names */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 justify-items-center">
                    {activeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className={` w-full max-w-[11rem] bg-gradient-to-bl from-base-100 to-base-200/60 rounded-md rounded-t-xl p-4 md:p-5 flex flex-col items-center justify-center text-center border-t-4 ${skill.borderColor} shadow-md transition-all ease-in-out duration-500 hover:transform hover:-translate-y-2 hover:scale-103 ${skill.shadowColor} hover:shadow-lg`}>
                            <div className="text-4xl md:text-5xl mt-2">
                                {skill.icon}
                            </div>
                            <p className="mt-4 font-semibold text-base md:text-lg">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;