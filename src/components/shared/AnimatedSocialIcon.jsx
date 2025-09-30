import { FaLinkedin, FaGithub, FaFacebook, FaDiscord, FaStackOverflow, FaTwitter } from 'react-icons/fa';
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
        href: 'https://twitter.com/shihab_dev',
        icon: <FaTwitter />,
        label: 'Twitter',
    },
    {
        href: 'https://www.facebook.com/shihab.dev',
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

// Unified but unique smooth animation for all icons
const baseIconVariants = {
    initial: { y: 0, scale: 1, opacity: 1 },
    animate: (i) => ({
        y: [0, -8, 0],
        scale: [1, 1.13, 1],
        opacity: 1,
        transition: {
            repeat: Infinity,
            duration: 2.8 + i * 0.2,
            ease: 'easeInOut',
            repeatType: 'loop',
            delay: 0.1 * i,
        },
    }),
    hover: {
        scale: 1.22,
        color: 'var(--color-primary, #5046E5)',
        boxShadow: '0 4px 24px 0 var(--color-primary, #5046E5)',
        transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
};

const AnimatedSocialIcon = () => {
    return (
        <div className="flex flex-col items-center gap-4 mt-2">
            <div className="flex items-center justify-center gap-5 text-xl">
                {socialLinks.map((link, i) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/60"
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        custom={i}
                        variants={baseIconVariants}
                        aria-label={link.label}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default AnimatedSocialIcon;