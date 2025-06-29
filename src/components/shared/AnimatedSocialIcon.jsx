import { FaLinkedin, FaGithub, FaFacebook, FaDiscord, FaStackOverflow } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
        href: 'https://www.facebook.com/shihabuddinReal/',
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
        y: [0, 8, 0],
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

// Unique animation variants for each social icon (reduced, more subtle)
const uniqueIconVariants = {
    linkedin: {
        initial: { y: 0, opacity: 1 },
        animate: {
            y: [0, -7, 0],
            opacity: 1,
            transition: {
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
                repeatType: 'loop',
                delay: 0.1,
            },
        },
        hover: {
            scale: 1.15,
            color: 'var(--color-primary, #5046E5)',
            transition: { type: 'spring', stiffness: 400, damping: 15 },
        },
    },
    github: {
        initial: { y: 0, opacity: 1 },
        animate: {
            scale: [1, 1.08, 1],
            opacity: 1,
            transition: {
                repeat: Infinity,
                duration: 2.8,
                ease: 'easeInOut',
                repeatType: 'loop',
                delay: 0.3,
            },
        },
        hover: {
            scale: 1.18,
            color: 'var(--color-primary, #5046E5)',
            transition: { type: 'spring', stiffness: 400, damping: 15 },
        },
    },
    facebook: {
        initial: { y: 0, opacity: 1 },
        animate: {
            y: [0, -4, 0],
            opacity: 1,
            transition: {
                repeat: Infinity,
                duration: 3.2,
                ease: 'easeInOut',
                repeatType: 'loop',
                delay: 0.5,
            },
        },
        hover: {
            scale: 1.15,
            color: 'var(--color-primary, #5046E5)',
            transition: { type: 'spring', stiffness: 400, damping: 15 },
        },
    },
    discord: {
        initial: { y: 0, opacity: 1 },
        animate: {
            y: [0, 6, 0],
            opacity: 1,
            transition: {
                repeat: Infinity,
                duration: 3.1,
                ease: 'easeInOut',
                repeatType: 'loop',
                delay: 0.7,
            },
        },
        hover: {
            scale: 1.15,
            color: 'var(--color-primary, #5046E5)',
            transition: { type: 'spring', stiffness: 400, damping: 15 },
        },
    },
    stackoverflow: {
        initial: { y: 0, opacity: 1 },
        animate: {
            rotate: [0, 8, 0],
            opacity: 1,
            transition: {
                repeat: Infinity,
                duration: 3.5,
                ease: 'easeInOut',
                repeatType: 'loop',
                delay: 0.9,
            },
        },
        hover: {
            scale: 1.13,
            color: 'var(--color-primary, #5046E5)',
            transition: { type: 'spring', stiffness: 400, damping: 15 },
        },
    },
};

const AnimatedSocialIcon = () => {
    return (
        <div className="flex flex-col items-center gap-4 ">
            <div className="flex items-center justify-center gap-5 text-xl">
                {socialLinks.map((link) => {
                    // Get unique variant based on social platform
                    const variantKey = link.label.toLowerCase();
                    const uniqueVariant = uniqueIconVariants[variantKey] || iconVariants;
                    return (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/60"
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            variants={uniqueVariant}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimatedSocialIcon;