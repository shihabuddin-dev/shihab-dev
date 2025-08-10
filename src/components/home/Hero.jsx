import Lottie from 'lottie-react';
import coding from '../../assets/lottis/coding.json'
import Button from '../ui/Button';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import AnimatedSocialIcon from '../shared/AnimatedSocialIcon';
import resume from '../../assets/resume.pdf';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
            {/* Left: Text Content */}
            <motion.div
                className="flex flex-col items-start gap-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-primary text-lg font-semibold -mb-3">
                    Hello! I am,
                </p>
                <motion.h1
                    className="text-4xl md:text-5xl font-bold leading-tight text-base-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Shihab <span className="text-primary">Uddin</span>
                </motion.h1>
                <h2 className="text-base md:text-2xl font-medium text-base-content/80"
                >
                    <Typewriter
                        words={['MERN Stack Developer', 'JavaScript & React Developer','Learning TypeScript','Passionate Full Stack Developer',]}
                        loop={100}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                    />
                </h2>
                <motion.p
                    className="text-base md:text-lg text-base-content/70 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    I build modern web applications with a focus on performance, accessibility, and great user experience. Let's create something amazing together!
                </motion.p>
                {/* Social Row*/}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                >
                    <AnimatedSocialIcon />
                </motion.div>
                <div
                    className="flex gap-2 md:gap-4 mt-2"
                >
                    <Button>   <a href="#/contact">Contact Me</a></Button>
                    <Button variant='outline'> <a href={resume} download>Get Resume</a></Button>
                </div>
            </motion.div>

            {/* Right: Lottie Animation */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <Lottie animationData={coding} className="w-full h-[220px] md:h-[350px]" />
            </motion.div>
        </section>
    );
};

export default Hero;