import React, { useState } from 'react';
// Assuming you have a shared SectionHeading component, otherwise use the h2/p tags directly.
import SectionHeading from '../shared/SectionHeading';

// Import all the necessary icons from react-icons
import { FaReact, FaGitAlt, FaGithub, FaFigma, FaNodeJs, FaRegImage, FaBolt } from 'react-icons/fa';
import {
    SiNextdotjs,
    SiRedux,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiNpm,
    SiCanva,
    SiAdobexd,
    SiAdobephotoshop,
    SiNotion,
    SiTrello,
    SiNetlify,
    SiVercel,
    SiReactquery,
    SiFirebase,
} from 'react-icons/si';

const skillsData = {
    Web: [
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, borderColor: 'border-orange-500' },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-400" />, borderColor: 'border-blue-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" />, borderColor: 'border-cyan-300' },
        { name: 'React', icon: <FaReact className="text-cyan-400" />, borderColor: 'border-cyan-400' },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-400" />, borderColor: 'border-green-400' },
        { name: 'Express.js', icon: <SiExpress className="text-white" />, borderColor: 'border-white' },
        { name: 'MongoDB', icon: <SiMongodb className="text-primary" />, borderColor: 'border-primary' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, borderColor: 'border-yellow-500' },
        { name: 'npm', icon: <SiNpm className="text-red-600" />, borderColor: 'border-red-600' },
    ],
   
    Programming: [
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, borderColor: 'border-yellow-400' },
    ],
    Tools: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, borderColor: 'border-orange-600' },
        { name: 'GitHub', icon: <FaGithub className="text-white" />, borderColor: 'border-white' },
        { name: 'Atlas', icon: <SiMongodb className="text-primary" />, borderColor: 'border-primary' },
        { name: 'Netlify', icon: <SiNetlify className="text-green-400" />, borderColor: 'border-green-400' },
        { name: 'Vercel', icon: <SiVercel className="text-white" />, borderColor: 'border-white' },
        { name: 'AOS', icon: <FaRegImage className="text-pink-400" />, borderColor: 'border-pink-400' },
        { name: 'TanStack Query', icon: <SiReactquery className="text-red-500" />, borderColor: 'border-red-500' },
        { name: 'Surge', icon: <FaBolt className="text-yellow-400" />, borderColor: 'border-yellow-400' },
    ],
    Others: [
        { name: 'Figma', icon: <FaFigma className="text-pink-500" />, borderColor: 'border-pink-500' },
        { name: 'Canva', icon: <SiCanva className="text-blue-400" />, borderColor: 'border-blue-400' },
        { name: 'Adobe XD', icon: <SiAdobexd className="text-pink-400" />, borderColor: 'border-pink-400' },
        { name: 'Pixo', icon: <FaRegImage className="text-green-400" />, borderColor: 'border-green-400' },
        { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-300" />, borderColor: 'border-blue-300' },
        { name: 'Notion', icon: <SiNotion className="text-black dark:text-white" />, borderColor: 'border-black dark:border-white' },
        { name: 'Trello', icon: <SiTrello className="text-blue-500" />, borderColor: 'border-blue-500' },
    ],
};

const categories = Object.keys(skillsData);

const Skills = () => {
    const [activeTab, setActiveTab] = useState('Web');
    const activeSkills = skillsData[activeTab];

    return (
        // The main section container with a dark background
        <section className="">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <SectionHeading>My Skills</SectionHeading>
                <div className="text-center mb-12">
                </div>

                {/* Tab Toggle */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-1 md:py-1.5 rounded-md transition-all hover:duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/60
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                    {activeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className={`w-full max-w-[9rem] bg-[#1e293b] rounded-lg p-4 md:p-6 flex flex-col items-center justify-center text-center border-t-4 ${skill.borderColor} shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20`}
                        >
                            <div className="text-5xl md:text-6xl">
                                {skill.icon}
                            </div>
                            <p className="mt-4 font-semibold text-base md:text-lg text-slate-200">
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