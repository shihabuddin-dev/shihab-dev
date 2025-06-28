import Lottie from 'lottie-react';
import coding from '../../assets/lottis/coding.json'
import Button from '../ui/Button';
import { FaLinkedin, FaGithub, FaFacebook, FaDiscord, FaStackOverflow } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

const socialLinks = [
    {
        href: 'https://linkedin.com/in/shihab-dev',
        icon: <FaLinkedin />,
        label: 'LinkedIn',
    },
    {
        href: 'https://github.com/shihabuddin-dev',
        icon: <FaGithub />,
        label: 'GitHub',
    },
    {
        href: 'https://facebook.com/your-facebook',
        icon: <FaFacebook />,
        label: 'Facebook',
    },
    {
        href: 'https://discord.com/users/shihab.dev',
        icon: <FaDiscord />,
        label: 'Discord',
    },
    {
        href: 'https://stackoverflow.com/users/29589367/shihab-dev',
        icon: <FaStackOverflow />,
        label: 'Stack Overflow',
    },
];

const iconVariants = {
    initial: { y: 0, opacity: 1 },
    animate: {
        y: [0, -10, 0],
        opacity: 1,
        transition: {
            repeat: Infinity,
            duration: 2.5,
            ease: 'easeInOut',
            repeatType: 'loop',
            delay: 0.2,
            staggerChildren: 0.15,
        },
    },
    hover: {
        scale: 1.25,
        boxShadow: '0 4px 24px 0 var(--color-primary, #5046E5)',
        color: 'var(--color-primary, #5046E5)',
        transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
};

const Hero = () => {


    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:rellative">

            {/* Social Sidebar - Desktop Only */}
            <div className="hidden md:flex flex-col items-center gap-6 absolute left-10 top-1/2 -translate-y-1/2 z-10 text-lg">

                {socialLinks.map((link, i) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full"
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={iconVariants}
                        custom={i}
                        aria-label={link.label}
                    >
                        {link.icon}
                    </motion.a>
                ))}
                <div className="w-px h-16 bg-base-content/30 my-2"></div>
                <div className="bg-base-content/10 px-3 py-2 rounded-md rotate-[-90deg] text-base-content font-bold tracking-widest text-sm select-none">FOLLOW ME</div>
            </div>

            {/* Left: Text Content */}
            <div className="flex flex-col items-start gap-3 md:gap-4 md:pl-20">
                <p className="text-primary text-lg font-semibold">Hello! I am</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-base-content">
                    Shihab <span className="text-primary">Uddin</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-base-content/80">
                    <Typewriter
                        words={['MERN Stack Developer', 'Learning TypeScript & Next.js', 'Tech Enthusiast', 'Continious Learner!']}
                        loop={100}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                    /></h2>
                <p className="text-base md:text-lg text-base-content/70 max-w-xl">
                    I build modern web applications with a focus on performance, accessibility, and great user experience. Let's create something amazing together!
                </p>
                <div className="flex gap-2 md:gap-4 mt-2">
                    <Button>   <a href="#contact">Contact Me</a></Button>
                    <Button variant='outline'>      <a href="/resume.pdf" download>Get Resume</a></Button>
                </div>
            </div>

            {/* Social Row - Mobile Only */}
            <div className="flex flex-col items-center w-full gap-4 md:hidden">
                <SectionHeading>Follow ME</SectionHeading>
                <div className="flex items-center justify-center gap-5 text-xl">
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full"
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            variants={iconVariants[i % iconVariants.length] || iconVariants[0]}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
            {/* Right: Lottie Animation */}
            <div>
                <Lottie animationData={coding} className="w-full h-[250px] md:h-[350px]" />
            </div>
        </section>
    );
};

export default Hero;